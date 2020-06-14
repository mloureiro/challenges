// time : 00h06m41s

const howManyGames = (start, discount, minimum, cash) => {
	let remainingCash = cash
	let currentCost = start
	let totalGamesBought = 0
	while (remainingCash >= currentCost) {
		remainingCash -= currentCost
		totalGamesBought++
		currentCost -= discount
		if (currentCost < minimum) currentCost = minimum
	}

	return totalGamesBought
}

const tests = [
	{
		input: [20, 3, 6, 80],
		output: 6,
	},
	{
		input: [20, 3, 6, 85],
		output: 7,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = howManyGames(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
