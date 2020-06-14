const yourFunction = list => {
	return list.reduce((acc, value) => acc + value, 0)
}

const systemUnderTest = yourFunction
const tests = [
	{
		input: [
			1000000001,
			1000000002,
			1000000003,
			1000000004,
			1000000005,
		],
		output: 5000000015,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = systemUnderTest(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
