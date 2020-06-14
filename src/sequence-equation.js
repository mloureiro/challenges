// time : 16m40s

const permutationEquation = list => {
	const map = {}
	list.forEach((v, idx) => (map[v] = idx + 1))

	return list.map((_, idx) => map[map[idx + 1]])
}

const tests = [
	{
		input: [[2, 3, 1]],
		output: [2, 3, 1],
	},
	{
		input: [[4, 3, 5, 1, 2]],
		output: [1, 3, 5, 4, 2],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = permutationEquation(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
