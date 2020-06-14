// time : 00m00s
const marsExploration = message => {
	let charactersAltered = 0
	for (let i = 0; i < message.length; i++) {
		const position = i % 3
		if (position === 1) {
			if (message[i] !== 'O') charactersAltered++
		} else if (message[i] !== 'S') {
			charactersAltered++
		}
	}

	return charactersAltered
}

const tests = [
	{
		input: ['SOSSPSSQSSOR'],
		output: 3,
	},
	{
		input: ['SOSSOT'],
		output: 1,
	},
	{
		input: ['SOSSOSSOS'],
		output: 0,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = marsExploration(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✔' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
