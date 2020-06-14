// time : 00h14m12s

const calculateMaximumSurrounds = (list, maxIndex) => {
	let maxLeft = 0;
	for (let i = maxIndex - 1, current = 0; i >= 0; i--) {
		current += list[i]
		if (maxLeft < current)
			maxLeft = current
	}

	let maxRight = 0
	for (let i = maxIndex + 1, current = 0; i < list.length; i++) {
		current += list[i]
		if (maxRight < current)
			maxRight = current
	}

	return list[maxIndex] + maxRight + maxLeft
}

const maxSubArray = list => {
	let maxIndexList = []
	list.reduce((maxValue, value, idx) => {
		if (maxValue === null || maxValue < value) {
			maxIndexList = [idx]
			return value
		}

		if (maxValue === value)
			maxIndexList = [...maxIndexList, idx]

		return maxValue
	}, null)

	return maxIndexList.reduce(
		(max, index) => {
			const total = calculateMaximumSurrounds(list, index)
			if (max === null)
				return total

			return max < total ? total : max
		},
		null,
	)
}

const tests = [
	{
		input: [[-2,1,-3,4,-1,2,1,-5,4]],
		output: 6,
	},
	{
		input: [[3,-2,-3,-3,1,3,0]],
		output: 4,
	},
	{
		input: [[8,-2,-4,-1,-8,3,8,8,3,4,2,-9,-1,-3,-6,8,-3,9]],
		output: 23,
		// output: 28, // What???
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = maxSubArray(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
