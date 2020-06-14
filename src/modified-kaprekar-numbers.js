// time : 00h25m16s

const kaprekarNumbers = (start, end) => {
	let numbers = []
	for (let i = start; i <= end; i++) {
		let square = (i ** 2).toString()
		if (square.length % 2 !== 0) square = '0' + square

		const [left, right] = [
			parseInt(square.slice(0, square.length / 2), 10),
			parseInt(square.slice(square.length / 2), 10),
		]

		if (left + right === i) numbers = [...numbers, i]
	}

	console.log(
		numbers.length === 0
			? 'INVALID RANGE'
			: numbers.join(' '),
	)

	return numbers
}

const tests = [
	{
		input: [1, 100],
		output: [1, 9, 45, 55, 99],
	},
	{
		input: [100, 300],
		output: [297],
	},
	{
		input: [400, 700],
		output: [],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = kaprekarNumbers(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})

/*

		const square = i ** 2
		const length = square.toString().length
		const rightLength = Math.ceil(length / 2)
// console.log('%', Math.floor(square / (10 ** rightLength)), rightLength, (10 ** (rightLength - 1)), )
		const right =  square % (10 ** rightLength)
		const left = Math.floor(square / (10 ** (length - rightLength - 1)))

console.log(left + right === i, i, left + right, '-', square, [length, length - rightLength - 1, rightLength], [left, right])
		if (left + right === i)
			numbers = [...numbers, i]
*/
