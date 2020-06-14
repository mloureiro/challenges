// time : 00h08m18s

const jumpingOnClouds = clouds => {
	let totalJumps = 0
	let i = 0
	while (i + 1 < clouds.length) {
		if (clouds[i + 2] === 0) i += 2
		else i++

		totalJumps++
	}

	return totalJumps
}

const tests = [
	{
		input: [[0, 0, 1, 0, 0, 1, 0]],
		output: 4,
	},
	{
		input: [[0, 0, 0, 1, 0, 0]],
		output: 3,
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
