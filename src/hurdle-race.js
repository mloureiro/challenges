// time: ~5min

const hurdleRace = (jumpHeight, obstacles) => {
	const tallestObstacle = obstacles.reduce(
		(tallest, height) =>
			tallest < height ? height : tallest,
		0,
	)

	if (tallestObstacle < jumpHeight) return 0

	return tallestObstacle - jumpHeight
}

const tests = [
	{
		input: [4, [1, 6, 3, 5, 2]],
		output: 2,
	},
	{
		input: [7, [2, 5, 4, 5, 2]],
		output: 0,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = hurdleRace(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
