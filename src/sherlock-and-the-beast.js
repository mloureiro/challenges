// time : 11m17s

const FIVES_DENOMINATOR = 3
const THREES_DENOMINATOR = 5

const decentNumber = length => {
	const maxFives = Math.floor(length / FIVES_DENOMINATOR)
	for (let i = maxFives; i >= 0; i--) {
		const remains = length - i * FIVES_DENOMINATOR
		if (remains % THREES_DENOMINATOR === 0)
			return '5'.repeat(i * 3) + '3'.repeat(remains)
	}

	return '-1'
}

const tests = [
	{
		input: [1],
		output: '-1',
	},
	{
		input: [3],
		output: '555',
	},
	{
		input: [5],
		output: '33333',
	},
	{
		input: [11],
		output: '55555533333',
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = decentNumber(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
