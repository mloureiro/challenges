// time : 00h20m03s

const minimumDistances = list => {
	let shortest = -1
	for (let map = {}, i = 0; i < list.length; i++) {
		const number = list[i]
		if (typeof map[number] !== 'undefined') {
			const distance = i - map[number]

			if (shortest === -1 || shortest > distance)
				shortest = distance
		}

		map[number] = i

		if (shortest === 1) return shortest
	}

	return shortest
}

const tests = [
	{
		input: [[1, 1]],
		output: 1,
	},
	{
		input: [[7, 1, 3, 4, 1, 7]],
		output: 3,
	},
	{
		input: [[1, 2, 3, 4, 10]],
		output: -1,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = minimumDistances(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
