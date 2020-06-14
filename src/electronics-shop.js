const getMoneySpent = (keyboards, drives, budget) => {
	keyboards.sort((a, b) => (a < b ? 1 : -1))
	drives.sort((a, b) => (a < b ? 1 : -1))

	if (
		keyboards[keyboards.length - 1] +
			drives[drives.length - 1] >
		budget
	)
		return -1

	let max = 0
	for (let i = 0; i < keyboards.length; i++) {
		for (let j = 0; j < drives.length; j++) {
			const total = keyboards[i] + drives[j]

			if (total === budget) return total

			if (total < budget && total > max) max = total

			if (total < budget) break
		}
	}

	return max
}

const tests = [
	{
		input: [[40, 50, 60], [5, 8, 12], 60],
		output: 58,
	},
	{
		input: [[1, 2, 3], [1, 2, 3], 1],
		output: -1,
	},
	{
		input: [[1, 1, 2], [2], 4],
		output: 4,
	},
	{
		input: [[1, 1, 2], [2], 3],
		output: 3,
	},
	{
		input: [[2], [1, 1, 2], 3],
		output: 3,
	},
	{
		input: [[2, 3], [1, 1, 3], 5],
		output: 5,
	},
	{
		input: [[1, 1, 3], [2, 3], 5],
		output: 5,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = getMoneySpent(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
