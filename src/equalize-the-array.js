// time : 00h04m02s

const equalizeArray = array => {
	const map = {}
	array.forEach(
		number => (map[number] = (map[number] || 0) + 1),
	)

	return (
		array.length -
		Object.values(map).reduce(
			(max, amount) => (max < amount ? amount : max),
			0,
		)
	)
}

const tests = [
	{
		input: [[3, 3, 2, 1, 3]],
		output: 2,
	},
	{
		input: [[1, 2, 3, 1, 2, 3, 3, 3]],
		output: 4,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = equalizeArray(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
