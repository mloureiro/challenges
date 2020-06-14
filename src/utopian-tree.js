// time: 12m21s

const utopianTree = cycles => {
	let totalCycles = 0
	let height = 1
	while (++totalCycles <= cycles) {
		height = totalCycles % 2 === 1 ? height * 2 : height + 1
	}

	return height
}

const tests = [
	{
		input: [0],
		output: 1,
	},
	{
		input: [1],
		output: 2,
	},
	{
		input: [4],
		output: 7,
	},
	{
		input: [4],
		output: 7,
	},
	{
		input: [3],
		output: 6,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = utopianTree(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
