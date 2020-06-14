// time : 0h28m58s (after 3 iterations, and explanation from Wiki)

const getValueForPoint = (map, [x, y]) => {
	try {
		return map[x][y] || 0
	} catch {
		return 0
	}
}

const west = (map, [x, y]) =>
	getValueForPoint(map, [x - 1, y])
const north = (map, [x, y]) =>
	getValueForPoint(map, [x, y - 1])
const norWest = (map, [x, y]) =>
	getValueForPoint(map, [x - 1, y - 1])

const commonChild = (a, b) => {
	const map = []
	for (let x = 0; x < a.length; x++) {
		map[x] = []
		for (let y = 0; y < b.length; y++) {
			if (a[x] === b[y])
				map[x][y] = norWest(map, [x, y]) + 1
			else {
				const westValue = west(map, [x, y])
				const northValue = north(map, [x, y])
				map[x][y] =
					westValue > northValue ? westValue : northValue
			}
		}
	}

	return map[a.length - 1][b.length - 1]
}

const tests = [
	{
		input: ['HARRY', 'SALLY'],
		output: 2,
	},
	{
		input: ['AA', 'BB'],
		output: 0,
	},
	{
		input: ['AAAA', 'AAAA'],
		output: 4,
	},
	{
		input: ['SHINCHAN', 'NOHARAAA'],
		output: 3,
	},
	{
		input: ['NOHARAAA', 'SHINCHAN'],
		output: 3,
	},
	{
		input: ['ELONGCTIOILS', 'INGONTEICLOS'],
		output: 6,
	},
	{
		input: [
			'REALWORLDCASESESPECIALLYSOURCECODEDIFFSANDPATCHES',
			'FORTEXTUALSEQUENCESSUCHASSOURCECODEYOUWANTTOVIEWLINESASTHESEQUENCE',
		],
		output: 0,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = commonChild(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
