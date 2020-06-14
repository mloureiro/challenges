// time: ~57m

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

const findClosestPositionScore = (
	scores,
	myRank,
	start,
	end,
) => {
	if (start === end) {
		return scores[end] || null
	}

	const middle = Math.round((end - start) / 2) + start

	if (scores[middle] >= myRank) {
		return findClosestPositionScore(
			scores,
			myRank,
			middle,
			end,
		)
	} else {
		return findClosestPositionScore(
			scores,
			myRank,
			start,
			middle - 1,
		)
	}
}

const climbingLeaderboard = (scores, myScores) => {
	const positions = calculatePositionHash(scores)

	return myScores.map(score => {
		const nextTableScore = findClosestPositionScore(
			scores,
			score,
			0,
			scores.length - 1,
		)

		if (score > nextTableScore)
			return positions[nextTableScore] - 1 || 1
		if (nextTableScore > score)
			return positions[nextTableScore] + 1

		return positions[nextTableScore]
	})
}

const tests = [
	{
		input: [
			[100, 100, 50, 40, 40, 20, 10],
			[5, 25, 50, 120],
		],
		output: [6, 4, 2, 1],
	},
	{
		input: [
			[100, 100, 50, 40, 40, 20, 10],
			[5, 25, 50, 75, 120],
		],
		output: [6, 4, 2, 2, 1],
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
