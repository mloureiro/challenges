// time : 00h25m20s

// @TODO think about selling/buying multiple
// it wasn't needed for this test (there was no
// info regarding multiple investments)

const maxProfit = stockPrices => {
	return stockPrices.reduce(
		({ total, stock }, value, idx) => {
			if (idx + 1 === stockPrices.length) {
				if (stock > 0)
					return {
						total: total + stockPrices[idx],
						stock: 0,
					}

				return {total, stock}
			}

			if (stockPrices[idx] > stockPrices[idx + 1] && stock > 0)
				return {
					total: total + stockPrices[idx],
					stock: 0,
				}

			if (stockPrices[idx] < stockPrices[idx + 1] && stock === 0 && idx < stockPrices.length)
				return {
					total: total - stockPrices[idx],
					stock: 1,
				}

			return { total, stock }
		},
		{
			total: 0,
			stock: 0,
		},
	).total
}

const tests = [
	{
		input: [[7,1,5,3,6,4]],
		output: 7,
	},
	{
		input: [[1,2,3,4,5]],
		output: 4,
	},
	{
		input: [[7,6,4,3,1]],
		output: 0,
	},
	{
		input: [[1, 2]],
		output: 1,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = maxProfit(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
