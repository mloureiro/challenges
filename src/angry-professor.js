// time: ~2min40s

const isClassCancelled = (minStudents, arrivals) =>
	arrivals.filter(arrival => arrival <= 0).length >=
	minStudents
		? 'NO'
		: 'YES'

const tests = [
	{
		input: [3, [-1, -3, 4, 2]],
		output: 'YES',
	},
	{
		input: [2, [0, -1, 2, 1]],
		output: 'NO',
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = isClassCancelled(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
