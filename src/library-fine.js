// time : 00h15m12s

const libraryFine = (d1, m1, y1, d2, m2, y2) => {
	if (y1 > y2) return 10000

	if (m1 > m2 && y1 === y2) return (m1 - m2) * 500

	if (d1 > d2 && m1 === m2 && y1 === y2)
		return (d1 - d2) * 15

	return 0
}

const tests = [
	{
		input: [9, 6, 2015, 6, 6, 2015],
		output: 45,
	},
	{
		input: [10, 10, 2015, 10, 10, 2015],
		output: 0,
	},
	{
		input: [11, 10, 2015, 10, 10, 2015],
		output: 15,
	},
	{
		input: [1, 1, 2016, 31, 12, 2015],
		output: 10000,
	},
	{
		input: [2, 7, 1014, 1, 1, 1015],
		output: 0,
	},
	{
		input: [28, 2, 2015, 15, 4, 2015],
		output: 0,
	},
	{
		input: [2, 5, 1984, 3, 3, 1985],
		output: 0,
	},
	{
		input: [12, 3, 2014, 11, 3, 2015],
		output: 0,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = libraryFine(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
