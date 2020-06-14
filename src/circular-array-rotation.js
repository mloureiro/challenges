// time : 10m20s

const circularArrayRotation = (
	list,
	rotations,
	queries,
) => {
	const sliceAt = list.length - (rotations % list.length)
	const rotatedList = [
		...list.slice(sliceAt),
		...list.slice(0, sliceAt),
	]

	return queries.map(q => rotatedList[q])
}

const tests = [
	{
		input: [[1, 2, 3], 2, [0, 2]],
		output: [2, 1],
	},
	{
		input: [[1, 2, 3, 4, 5], 18, [0, 2, 3]],
		output: [3, 5, 1],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = circularArrayRotation(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
