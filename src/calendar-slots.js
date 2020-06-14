// time : 01h24m00s

const timeToInt = time =>
	time.split(':').map(x => parseInt(x, 10))

const fullLength = time => time.length < 5 ? '0' + time : time

const formatSlotsToFullLength = slots =>
	slots.map(([start, end]) => ([
		fullLength(start),
		fullLength(end)
	]))

const earliest = (a, b) => a < b ? a : b
const latest = (a, b) => a > b ? a : b

const nextSlot = (time, duration) => {
	let [hours, minutes] = timeToInt(time)
	minutes += duration

	const overlap = Math.floor(minutes / 60)
	if (overlap) {
		minutes %= 10
		// @TODO think about next day
		hours += overlap
	}

	return `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`
}

const boundaries = (boundaries1, boundaries2) => {
	return [
		latest(boundaries1[0], boundaries2[0]),
		earliest(boundaries1[1], boundaries2[1]),
	]
}

const hasOverlap = ([start1, end1], [start2, end2]) => {
	return (
		(fullLength(start1) <= fullLength(end2) && fullLength(end1) >= fullLength(start2))
		|| (fullLength(start2) <= fullLength(end1) && fullLength(end2) >= fullLength(start1))
	)
}

const mergeSlots = (first, second) => {
	const sorted = [
		...first,
		...second,
	].sort(([a], [b]) => a <= b ? -1 : 1)

	let previous = sorted[0]
	let merged = []
	for (let i = 1; i <= sorted.length; i++) {
		if (!sorted[i] || !hasOverlap(previous, sorted[i])) {
			merged = [...merged, previous]
			previous = sorted[i]
		} else {
			previous = [
				earliest(previous[0], sorted[i][0]),
				latest(previous[1], sorted[i][1]),
			]
		}
	}

	return merged
}

const availableCalendarSlots = (
	calendar1,
	boundaries1,
	calendar2,
	boundaries2,
	slotDuration,
) => {
	const [start, end] = boundaries(...[
		...formatSlotsToFullLength([boundaries1]),
		...formatSlotsToFullLength([boundaries2])
		],
	)

	const busySlots = mergeSlots(
		formatSlotsToFullLength(calendar1),
		formatSlotsToFullLength(calendar2),
	)

	let availableSlots = []
	let time = start
	let i = 0
	while (time < end) {
		const next = nextSlot(time, slotDuration)

		if (next > end)
			break;

		while(i < busySlots.length && busySlots[i][1] <= time) i++

		if (!busySlots[i] || next <= busySlots[i][0]) {
			availableSlots = [
				...availableSlots,
				[time, next],
			]

			time = next
		} else {
			time = busySlots[i][1]
		}
	}

	return mergeSlots(availableSlots, [])
}

const tests = [
	{
		input: [
			[['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']],
			['9:00', '20:00'],
			[['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']],
			['10:00', '18:30'],
			30,
		],
		output: [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = availableCalendarSlots(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
