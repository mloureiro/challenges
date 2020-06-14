// time : 00h02m52s

const groupAnagrams = words => {
	const map = {}
	for (let i = 0; i < words.length; i++) {
		const sortedWord = words[i].split('').sort().join('')
		if (!map[sortedWord])
			map[sortedWord] = []

		map[sortedWord] = [...map[sortedWord], words[i]]
	}

	return Object.values(map)
}

const tests = [
	{
		input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
		output: [
			['eat', 'tea', 'ate'],
			['tan', 'nat'],
			['bat']
		],
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = groupAnagrams(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
