// time : 00h06m36s

const countElements = numbers => {
	const map = {}
	for (let i = 0; i < numbers.length; i++) {
		map[numbers[i]] = (map[numbers[i]] || 0) + 1
	}

	return Object.keys(map)
		.reduce(
			(total, key) => {
				const number = parseInt(key, 10)

				return map[number + 1]
					? map[number] + total
					: total
			},
			0,
		)
}

const tests = [
	{
		input: [[1,2,3]],
		output: 2,
	},
	{
		input: [[1,1,3,3,5,5,7,7]],
		output: 0,
	},
	{
		input: [[1,3,2,3,5,0]],
		output: 3,
	},
	{
		input: [[1,1,2,2]],
		output: 2,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = countElements(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
