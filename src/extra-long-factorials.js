// time : 08m56s

const extraLongFactorialsRec = number => {
	if (number <= 1) return 1

	return (
		BigInt(number) *
		BigInt(extraLongFactorialsRec(number - 1))
	)
}

const extraLongFactorials = number => {
	let total = BigInt(1)
	for (let i = 1; i <= number; i++) total *= BigInt(i)

	console.log(total.toString())

	return total
}

const tests = [
	{
		input: [25],
		output: '15511210043330985984000000',
	},
	{
		input: [30],
		output: '265252859812191058636308480000000',
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = extraLongFactorials(...input)
	const isEqualResult = isEqual(result.toString(), output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
