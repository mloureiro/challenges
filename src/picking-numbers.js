// time: ~11m40s

const pickingNumbers = numberList => {
	const sums = {}

	numberList.forEach(value => {
		if (!sums[value]) sums[value] = 0

		if (!sums[value - 1]) sums[value - 1] = 0

		sums[value]++
		sums[value - 1]++
	})

	return Object.keys(sums).reduce(
		(acc, key) => (sums[key] > acc ? sums[key] : acc),
		0,
	)
}

const tests = [
	{
		input: [[4, 6, 5, 3, 3, 1]],
		output: 3,
	},
	{
		input: [[1, 2, 2, 3, 1, 2]],
		output: 5,
	},
	{
		input: [[1, 2, 2, 4, 4, 5, 5, 2]],
		output: 4,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = pickingNumbers(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
