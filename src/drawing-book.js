// ~12m (after reading example)

const pageCount = (totalPages, targetPage) => {
	const fromStart = Math.floor(targetPage / 2)
	const fromEnd = Math.floor(totalPages / 2) - fromStart

	return fromStart < fromEnd ? fromStart : fromEnd
}

const tests = [
	{
		input: [6, 2],
		output: 1,
	},
	{
		input: [5, 4],
		output: 0,
	},
	{
		input: [2, 2],
		output: 0,
	},
	{
		input: [2, 1],
		output: 0,
	},
	{
		input: [1, 1],
		output: 0,
	},
	{
		input: [8, 5],
		output: 2,
	},
	{
		input: [7, 5],
		output: 1,
	},
	{
		input: [26, 17],
		output: 5,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = pageCount(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
