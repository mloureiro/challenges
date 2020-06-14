// time : 00h13m27s

//Note:
//  You must do this in-place without making a copy of the array.
//  Minimize the total number of operations.

const moveZeroes = list => {
	let zeroes = 0
	for (let i = 0; i < list.length; i++) {
		if (list[i] === 0) {
			zeroes++
		} else if (zeroes > 0) {
			list[i - zeroes] = list[i]
			list[i] = 'x'
		}
	}

	for (let i = zeroes; i > 0; i--)
		list[list.length - i] = 0

	return list
}

const tests = [
	{
		input: [[0, 1, 0, 3, 12]],
		output: [1, 3, 12, 0, 0],
	},
	{
		input: [[0, 1, 0, 3, 12, 0, 0]],
		output: [1, 3, 12, 0, 0, 0, 0],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = moveZeroes(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
