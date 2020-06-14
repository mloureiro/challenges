// time : 00h05m05s

const marcsCakewalk = calories =>
	calories
		.sort((a, b) => (a < b ? 1 : -1))
		.reduce((total, cal, idx) => total + 2 ** idx * cal, 0)

const tests = [
	{
		input: [[1, 3, 2]],
		output: 11,
	},
	{
		input: [[7, 4, 9, 6]],
		output: 79,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = marcsCakewalk(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
