const countingValleys = (total, steps) => {
	let level = 0
	let totalValleys = 0

	for (let i = 0; i < total; i++) {
		const previousLevel = i === 0 ? 0 : level
		level += steps[i] === 'U' ? 1 : -1

		if (previousLevel === 0 && level === -1) totalValleys++
	}

	return totalValleys
}

const systemUnderTest = countingValleys
const tests = [
	{
		input: [8, 'UDDDUDUU'],
		output: 1,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = systemUnderTest(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
