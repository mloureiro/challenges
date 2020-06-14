// time : 13m12s

const appendAndDelete = (initial, desired, maxMoves) => {
	let i = 0
	let position = initial.length
	while (i < initial.length && i < desired.length) {
		if (initial[i] !== desired[i]) {
			position = i
			break
		}
		i++
	}

	let totalToDelete = Math.abs(initial.length - position)
	let totalToAppend = Math.abs(desired.length - position)

	return maxMoves >= totalToAppend + totalToDelete
		? 'Yes'
		: 'No'
}

const tests = [
	{
		input: ['hackerhappy', 'hackerrank', 9],
		output: 'Yes',
	},
	{
		input: ['aba', 'aba', 7],
		output: 'Yes',
	},
	{
		input: ['ashley', 'ash', 2],
		output: 'No',
	},
	{
		input: ['a', 'z', 2],
		output: 'Yes',
	},
	{
		input: ['a', 'z', 1],
		output: 'No',
	},
	{
		input: ['abc', 'cba', 6],
		output: 'Yes',
	},
	{
		input: ['abc', 'cba', 5],
		output: 'No',
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = appendAndDelete(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
