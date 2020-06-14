// time : 00h04m14s

const chocolateFeast = (cash, cost, wrappersPromotion) => {
	let remainingWrappers = Math.floor(cash / cost)
	let totalChocolates = remainingWrappers
	while (remainingWrappers >= wrappersPromotion) {
		const promotionChocolates = Math.floor(
			remainingWrappers / wrappersPromotion,
		)
		totalChocolates += promotionChocolates
		remainingWrappers =
			(remainingWrappers % wrappersPromotion) +
			promotionChocolates
	}

	return totalChocolates
}

const tests = [
	{
		input: [10, 2, 5],
		output: 6,
	},
	{
		input: [12, 4, 4],
		output: 3,
	},
	{
		input: [6, 2, 2],
		output: 5,
	},
	{
		input: [7, 3, 2],
		output: 3,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = chocolateFeast(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
