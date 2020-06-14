// time : 00h16m50s

const serviceLane = (widths, cases) => {
	let largestCars = []
	for (const [start, end] of cases) {
		let largest = -1
		for (let i = start; i <= end; i++)
			if (largest === -1 || widths[i] < largest)
				largest = widths[i]

		largestCars = [...largestCars, largest]
	}

	return largestCars
}

const tests = [
	// @todo consider 0
	{
		input: [
			[2, 3, 1, 2, 3, 2, 3, 3],
			[
				[0, 3],
				[4, 6],
				[6, 7],
				[3, 5],
				[0, 7],
			],
		],
		output: [1, 2, 3, 2, 1],
	},
	{
		input: [
			[1, 2, 2, 2, 1],
			[
				[2, 3],
				[1, 4],
				[2, 4],
				[2, 4],
				[2, 3],
			],
		],
		output: [2, 1, 1, 1, 2],
	},
	{
		input: [
			[1, 2, 0, 2, 1],
			[
				[0, 1],
				[2, 3],
				[1, 4],
				[2, 4],
				[2, 4],
				[2, 3],
			],
		],
		output: [1, 0, 0, 0, 0, 0],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = serviceLane(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
