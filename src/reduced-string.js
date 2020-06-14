// time : 08m45s

const superReducedString = string => {
	return (
		string
			.split('')
			.reduce(
				(final, character) =>
					final[final.length - 1] === character
						? [...final.slice(0, final.length - 1)]
						: [...final, character],
				[],
			)
			.join('') || 'Empty String'
	)
}

const tests = [
	{
		input: ['aaabccddd'],
		output: 'abd',
	},
	{
		input: ['aa'],
		output: 'Empty String',
	},
	{
		input: ['baab'],
		output: 'Empty String',
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = superReducedString(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
