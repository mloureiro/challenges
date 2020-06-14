// time: 02m40s

const camelcase = string => {
	return string.replace(/([A-Z])/g, '-$1').split('-').length
}

const tests = [
	{
		input: ['saveChangesInTheEditor'],
		output: 5,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = camelcase(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
