// time : 00h23m32s

const cutTheSticks = list => {
	const map = {}
	for (let i = 0; i < list.length; i++) {
		if (!map[list[i]]) map[list[i]] = 0

		map[list[i]]++
	}

	let iterations = []
	let remainingSticks = list.length
	for (const key in map) {
		iterations = [...iterations, remainingSticks]
		remainingSticks -= map[key]
	}

	return iterations
}

const tests = [
	{
		input: [[5, 4, 4, 2, 2, 8]],
		output: [6, 4, 2, 1],
	},
	{
		input: [[1, 2, 3, 4, 3, 3, 2, 1]],
		output: [8, 6, 4, 1],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = cutTheSticks(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
