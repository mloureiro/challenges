// time : 00h17m44s

const weightedUniformStrings = (string, queries) => {
	const weightMap = {}
	let currentWeight = 0
	for (let i = 0; i < string.length; i++) {
		const characterWeight =
			1 + string.charCodeAt(i) - 'a'.charCodeAt(0)
		weightMap[characterWeight] = true

		if (i > 0 && string[i] === string[i - 1]) {
			currentWeight += characterWeight
			weightMap[currentWeight] = true
		} else {
			currentWeight = characterWeight
		}
	}

	return queries.map(weight =>
		weightMap[weight] ? 'Yes' : 'No',
	)
}

const tests = [
	{
		input: ['abccddde', [1, 3, 12, 5, 9, 10]],
		output: ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No'],
	},
	{
		input: ['aaabbbbcccddd', [9, 7, 8, 12, 5]],
		output: ['Yes', 'No', 'Yes', 'Yes', 'No'],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = weightedUniformStrings(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
