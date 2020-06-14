// time : 28m54s

const calculateEncryption = shift => {
	const alpha = 'abcdefghijklmnopqrstuvwxyz'
	const remaining = shift % alpha.length
	const encryption =
		alpha.slice(remaining) + alpha.slice(0, remaining)

	return [encryption, encryption.toUpperCase()]
}

const encryptCharacter = (character, [start, dictionary]) =>
	dictionary[character.charCodeAt(0) - start.charCodeAt(0)]

const processCharacter = (
	character,
	[lowerCase, upperCase],
) => {
	if (/[^a-z]/i.test(character)) return character

	return /[A-Z]/.test(character)
		? encryptCharacter(character, ['A', upperCase])
		: encryptCharacter(character, ['a', lowerCase])
}

const caesarCipher = (string, shift) => {
	const [lowerCase, upperCase] = calculateEncryption(shift)

	return string
		.split('')
		.map(c => processCharacter(c, [lowerCase, upperCase]))
		.join('')
}

const tests = [
	{
		input: ['middle-Outz', 2],
		output: 'okffng-Qwvb',
	},
	{
		input: ['Always-Look-on-the-Bright-Side-of-Life', 5],
		output: 'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj',
	},
	{
		input: ['amz-AMZ', 0],
		output: 'amz-AMZ',
	},
	{
		input: ['amz-AMZ', 25],
		output: 'zly-ZLY',
	},
	{
		input: ['amz-AMZ', 52],
		output: 'amz-AMZ',
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = caesarCipher(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
