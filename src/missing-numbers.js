// time : 00h16m30s

const missingNumbers = (arr, brr) => {
	arr.sort((a, b) => (a < b ? -1 : 1))
	brr.sort((a, b) => (a < b ? -1 : 1))

	let missingNumbers = []
	let i = 0
	while (i + missingNumbers.length < brr.length) {
		if (brr[i + missingNumbers.length] !== arr[i]) {
			missingNumbers = [
				...missingNumbers,
				brr[i + missingNumbers.length],
			]
		} else i++
	}

	return missingNumbers.reduce(
		(final, number, idx) =>
			missingNumbers[idx - 1] !== number
				? [...final, number]
				: final,
		[],
	)
}

// b [3,  4,  4,  7,  7,  8, 10, 10, 11, 11, 11, 12, 12, 13, 14
// a [    4,  4,  7,         10,     11, 11, 11, 12,     13, 14

const tests = [
	{
		input: [
			[203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
			[
				203,
				204,
				204,
				205,
				206,
				207,
				205,
				208,
				203,
				206,
				205,
				206,
				204,
			],
		],
		output: [204, 205, 206],
	},
	{
		input: [
			[11, 4, 11, 7, 13, 4, 12, 11, 10, 14],
			[
				11,
				4,
				11,
				7,
				3,
				7,
				10,
				13,
				4,
				8,
				12,
				11,
				10,
				14,
				12,
			],
		],
		output: [3, 7, 8, 10, 12],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = missingNumbers(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
