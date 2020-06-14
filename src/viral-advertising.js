// time: 11m20s

const viralAdvertising = totalDays => {
	let totalLikes = 2
	let previousDayLikes = totalLikes
	for (let i = 1; i < totalDays; i++) {
		const todayShares = previousDayLikes * 3
		const todayLikes = Math.floor(todayShares / 2)

		totalLikes += todayLikes
		previousDayLikes = todayLikes
	}

	return totalLikes
}

const tests = [
	{
		input: [3],
		output: 9,
	},
	{
		input: [4],
		output: 15,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = viralAdvertising(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
