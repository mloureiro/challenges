const calculatePositionHash = scores => {
	const positions = {}
	let previous = -1
	let currentPosition = 1
	for (let i = 0; i < scores.length; i++) {
		if (previous === -1 || scores[i] !== previous) {
			positions[scores[i]] = currentPosition
			currentPosition++
			previous = scores[i]
		}
	}

	return positions
}

const climbingLeaderboard = (scores, myScores) => {
	const positions = calculatePositionHash(scores)

	let ranks = []
	for (
		let i = 0, j = scores.length - 1;
		i < myScores.length;
		i++
	) {
		while (j >= 0 && myScores[i] > scores[j]) j--

		if (j === -1) ranks = [...ranks, 1]
		else if (myScores[i] < scores[j])
			ranks = [...ranks, positions[scores[j]] + 1]
		else ranks = [...ranks, positions[scores[j]]]
	}

	return ranks
}

const tests = [
	{
		input: [
			[100, 100, 50, 40, 40, 20, 10],
			[5, 25, 50, 120],
		],
		output: [6, 4, 2, 1],
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = climbingLeaderboard(...input)
	const isSame =
		JSON.stringify(result) === JSON.stringify(output)

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
