// time: 17m20s

const saveThePrisoner = (prisoners, sweets, chair) => {
	const position = (sweets % prisoners) + chair - 1
	return position % prisoners || prisoners
}

const tests = [
	{
		input: [5, 2, 1],
		output: 2,
	},
	{
		input: [5, 2, 2],
		output: 3,
	},
	{
		input: [7, 19, 2],
		output: 6,
	},
	{
		input: [3, 7, 3],
		output: 3,
	},
	{
		input: [3, 7, 1],
		output: 1,
	},
	{
		input: [3, 8, 1],
		output: 2,
	},
	{
		input: [3, 8, 2],
		output: 3,
	},
	{
		input: [3, 8, 3],
		output: 1,
	},
	{
		input: [3, 9, 1],
		output: 3,
	},
	{
		input: [3, 9, 2],
		output: 1,
	},
	{
		input: [3, 9, 3],
		output: 2,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = saveThePrisoner(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
