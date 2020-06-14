// time : 00h09m13s - failed on big int's
// time : 00h11m40s

const taumBday = (b, w, bc, wc, z) => {
	const wcz = bc + z
	const bcz = wc + z

	const wt = BigInt(w) * BigInt(wc < wcz ? wc : wcz)
	const bt = BigInt(b) * BigInt(bc < bcz ? bc : bcz)

	return wt + bt
}

const tests = [
	{
		input: [10, 10, 1, 1, 1],
		output: 20,
	},
	{
		input: [5, 9, 2, 3, 4],
		output: 37,
	},
	{
		input: [3, 6, 9, 1, 1],
		output: 12,
	},
	{
		input: [7, 7, 4, 2, 1],
		output: 35,
	},
	{
		input: [3, 3, 1, 9, 2],
		output: 12,
	},
	{
		input: [3, 5, 3, 4, 1],
		output: 29,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = taumBday(...input)
	const isEqualResult = isEqual(
		result.toString(),
		output.toString(),
	)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
