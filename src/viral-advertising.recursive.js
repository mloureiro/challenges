// time: ~5min
const viralAdvertisingRecursive = (
	remainingDays,
	people = 5,
) =>
	remainingDays !== 0
		? viralAdvertisingRecursive(
				remainingDays - 1,
				Math.floor(people / 2) * 3,
		  ) + Math.floor(people / 2)
		: 0

const tests = [
	{
		input: [3],
		output: 9,
	},
	{
		input: [4],
		output: 15,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = viralAdvertisingRecursive(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
