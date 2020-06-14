// time : 1h33m12s (after 4 wrong iterations)

function product_Range(a, b) {
	var prd = a,
		i = a

	while (i++ < b) {
		prd *= i
	}
	return prd
}

function combinations(n, r) {
	if (n == r) {
		return 1
	} else {
		r = r < n - r ? n - r : r
		return product_Range(r + 1, n) / product_Range(1, n - r)
	}
}

const getSubStringSorted = (string, start, length) =>
	string
		.slice(start, start + length)
		.split('')
		.sort()
		.join('')

const sherlockAndAnagrams = string => {
	const map = {}
	let total = 0
	for (let i = 0; i < string.length; i++)
		for (let l = 1; l + i <= string.length; l++) {
			const sub = getSubStringSorted(string, i, l)
			if (map[sub]) total++

			map[sub] = (map[sub] || 0) + 1
		}

	return Object.values(map).reduce(
		(total, value) =>
			value > 1 ? total + combinations(value, 2) : total,
		0,
	)
}

const tests = [
	{
		input: ['abba'],
		output: 4,
	},
	{
		input: ['abcd'],
		output: 0,
	},
	{
		input: ['ifailuhkqq'],
		output: 3,
	},
	{
		input: ['kkkk'],
		output: 10,
	},
	{
		input: ['cdcd'],
		output: 5,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = sherlockAndAnagrams(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})

/*

// permutations without losing sequence for the anagrams
// const calculateSubStringPermutations = string => {
// 	let permutations = []
// 	for (let i = 0; i < string.length; i++) {
// 		for (let j = i; j < string.length; j++) {
// 			permutations = [...permutations, string.slice(i, j + 1)];
// 		}
// 	}
//
// 	return permutations;
// }

============
const decToBin = dec => (dec >>> 0).toString(2)

	const map = {}
	let totalPairs = 0
	for (let i = 0; i < 2 ** string.length; i++) {
		const bin = decToBin(i)
		const position = string.length - bin.length
		const subString = bin.split('')
			.reduce((final, bit, idx) =>
				bit === '1'
					? final + (string[position + idx])
					: final
			, '')
			.split('')
			.sort()
			.join('')

		if (subString && map[subString] && !map[subString].includes(position))
			totalPairs++
console.log('>', position, subString,
	Boolean(subString && map[subString] && !map[subString].includes(position)))
		map[subString] = [...(map[subString] || []), position]
	}

	console.log('Result', totalPairs, map)


	return totalPairs

===============

	const map = {}
	let totalPairs = 0
	for (let i = 0; i < string.length; i++) {
		for (let j = i; j < string.length; j++) {
			for (let l = 1; l + i <= string.length; l++) {
				const subString = string.slice(i, j + l)
					.split('')
					.sort()
					.join('')
console.log('Sub', [i, j, l], subString, !!map[subString])
				if (map[subString])
					totalPairs++

				map[subString] = 1
			}
		}
	}

	return totalPairs

=============
	const characterMap = {}
	string.split('')
		.forEach((character, idx) =>
			characterMap[character] = [...(characterMap[character] || []), idx])

console.log({ characterMap })
	let pairs = []
	for (const character in characterMap) {
console.log({ character })
		const length = characterMap[character].length
console.log({ length, map: characterMap[character] })

		if (length === 1)
			continue;

		for (let i = 0; i < length; i++) {
			const origin = characterMap[character][i]
			for (let j = i + 1; j < length; j++) {
				const target = characterMap[character][j]
console.log(' >>> ', string[origin], string[target])
				for (
					let k = 0;
					string[origin + k] === string[target - k]
						&& string[origin + k];
					k++) {
console.log('BAM!', k, string[origin + k], string[target - k])
					pairs = [...pairs, [
						string.slice(origin, origin + k + 1),
						[origin, target - k],
					]]
				}
			}
		}
	}

*/
