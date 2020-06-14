// time : 18m48s

const calculateAllPairs = ([first, ...rest]) => {
	if (rest.length === 0) return []

	return [
		...rest.map(char => [first, char]),
		...calculateAllPairs(rest),
	]
}

// time : 9m45s
const alternateAlternative = string => {
	const characterListMap = {}
	string
		.split('')
		.forEach(c => (characterListMap[c] = true))

	return calculateAllPairs(
		Object.keys(characterListMap),
	).reduce((length, pairs) => {
		const word = string.replace(
			new RegExp(`[^${pairs.join('')}]`, 'g'),
			'',
		)

		return length > word.length || /([a-z])\1/.test(word)
			? length
			: word.length
	}, 0)
}

const alternate = string => {
	const characterList = string
		.split('')
		.sort()
		.join('')
		.replace(/([a-z])(\1*)/g, '$1')

	let length = 0
	for (let i = 0; i + 1 < characterList.length; i++)
		for (let j = i + 1; j < characterList.length; j++) {
			const word = string.replace(
				new RegExp(
					`[^${characterList[i]}${characterList[j]}]`,
					'g',
				),
				'',
			)

			if (length < word.length && !/([a-z])\1/.test(word))
				length = word.length
		}

	return length
}

const tests = [
	{
		input: ['beabeefab'],
		output: 5,
	},
	{
		input: ['asdcbsdcagfsdbgdfanfghbsfdab'],
		output: 8,
	},
	{
		input: ['asvkugfiugsalddlasguifgukvsa'],
		output: 0,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = alternate(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})

// WRONG TEST
// time : 13m36s
// const alternate = string => {
// 	let finalString = string
// 	for (let i = 0; i < finalString.length; i++) {
// 		if (finalString[i - 1] === finalString[i]) {
// 			finalString = finalString.replace(new RegExp(finalString[i], 'g'), '')
// 			i = 0
// 		}
// 	}
//
// 	return finalString.length
// }
