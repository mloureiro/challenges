// time : 00h16m20s - extremely confusing example

const towerBreakers = (n, m) =>
	m === 1 || n % 2 === 0 ? 2 : 1

const tests = [
	{
		input: [2, 2],
		output: 2,
	},
	{
		input: [1, 4],
		output: 1,
	},
	{
		input: [1, 7],
		output: 1,
	},
	{
		input: [3, 7],
		output: 1,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = towerBreakers(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
