// time : 00h06m11s

const repeatedString = (string, totalCharacters) => {
	return (
		Math.floor(totalCharacters / string.length) *
			string.replace(/[^a]/g, '').length +
		string
			.slice(0, totalCharacters % string.length)
			.replace(/[^a]/g, '').length
	)
}

const tests = [
	{
		input: ['aba', 10],
		output: 7,
	},
	{
		input: ['a', 1000000000000],
		output: 1000000000000,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = repeatedString(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
