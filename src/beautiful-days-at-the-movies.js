// time: 19m13s

const reverseNumber = number =>
	parseInt(
		number.toString().split('').reverse().join(''),
		10,
	)

const beautifulDays = (start, end, divisor) => {
	let total = 0
	for (let i = start; i <= end; i++)
		total +=
			Math.abs(i - reverseNumber(i)) % divisor === 0 ? 1 : 0

	return total
}

const tests = [
	{
		input: [20, 23, 6],
		output: 2,
	},
	{
		input: [13, 45, 3],
		output: 33,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = beautifulDays(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
