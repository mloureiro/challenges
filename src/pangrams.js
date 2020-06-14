// time : 00h06m22s

const pangrams = string => {
	const uniqueCharacters = string
		.toLowerCase()
		.split('')
		.sort()
		.join('')
		.trim()
		.replace(/(.)\1*/g, '$1')

	return uniqueCharacters.length === 26
		? 'pangram'
		: 'not pangram'
}

const tests = [
	{
		input: [
			'We promptly judged antique ivory buckles for the next prize',
		],
		output: 'pangram',
	},
	{
		input: [
			'We promptly judged antique ivory buckles for the prize',
		],
		output: 'not pangram',
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = pangrams(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
