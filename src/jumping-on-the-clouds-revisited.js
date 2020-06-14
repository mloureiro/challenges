// time : 12m50s

const jumpingOnClouds = (clouds, jumps) => {
	let power = 100
	for (
		let i = 0;
		i === 0 || i % clouds.length !== 0;
		i += jumps
	) {
		if (i > clouds.length) i -= clouds.length
		power -= 1 + (clouds[i] === 1 ? 2 : 0)
	}

	return power
}

const tests = [
	{
		input: [[0, 0, 1, 0, 0, 1, 1, 0], 2],
		output: 92,
	},
	{
		input: [[1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3],
		output: 80,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = jumpingOnClouds(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
