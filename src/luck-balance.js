// time : 00h00m00s

const luckBalance = (k, contests) => {
	let remainingPossibleLosses = k

	return contests
		.sort(([a], [b]) => (a < b ? 1 : -1))
		.reduce((total, [luck, isImportant]) => {
			if (!isImportant) return total + luck

			if (remainingPossibleLosses === 0) return total - luck

			remainingPossibleLosses--

			return total + luck
		}, 0)
}

const tests = [
	{
		input: [
			3,
			[
				[5, 1],
				[2, 1],
				[1, 1],
				[8, 1],
				[10, 0],
				[5, 0],
			],
		],
		output: 29,
	},
	{
		input: [
			5,
			[
				[13, 1],
				[10, 1],
				[9, 1],
				[8, 1],
				[13, 1],
				[12, 1],
				[18, 1],
				[13, 1],
			],
		],
		output: 42,
	},
	{
		input: [
			2,
			[
				[5, 1],
				[4, 0],
				[6, 1],
				[2, 1],
				[8, 0],
			],
		],
		output: 21,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = luckBalance(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
