// time = 5m45s

const catAndMouse = (
	catAPosition,
	catBPosition,
	mousePosition,
) => {
	const distanceCatA = Math.abs(
		catAPosition - mousePosition,
	)
	const distanceCatB = Math.abs(
		catBPosition - mousePosition,
	)

	if (distanceCatA === distanceCatB) return 'Mouse C'

	return distanceCatA < distanceCatB ? 'Cat A' : 'Cat B'
}

const tests = [
	{
		input: [1, 2, 3],
		output: 'Cat B',
	},
	{
		input: [1, 3, 2],
		output: 'Mouse C',
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = catAndMouse(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
