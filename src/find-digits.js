// time : 05m24s

const findDigits = number => {
	return number
		.toString()
		.split('')
		.reduce((total, character) => {
			const digit = parseInt(character, 10)
			if (digit !== 0 && number % digit === 0)
				return total + 1

			return total
		}, 0)
}

const tests = [
	{
		input: [12],
		output: 2,
	},
	{
		input: [1012],
		output: 3,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = findDigits(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
