// time : 14m55s

const mandatoryCharactersValidation = [
	string => /\d/.test(string),
	string => /[a-z]/.test(string),
	string => /[A-Z]/.test(string),
	string => /[!@#\$%\^&*\(\)\-+]/.test(string),
]

const minimumNumber = (_, string) => {
	const mandatoryCharactersMissing = mandatoryCharactersValidation.reduce(
		(missing, test) =>
			!test(string) ? missing + 1 : missing,
		0,
	)

	const charactersMissing =
		string.length >= 6 ? 0 : 6 - string.length

	return charactersMissing <= mandatoryCharactersMissing
		? mandatoryCharactersMissing
		: charactersMissing
}

const tests = [
	{
		input: [null, 'Ab1'],
		output: 3,
	},
	{
		input: [null, '#HackerRank'],
		output: 1,
	},
	{
		input: [null, ''],
		output: 6,
	},
	{
		input: [null, '""""""""'],
		output: 4,
	},
	{
		input: [null, 'AUzs-nV'],
		output: 1,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = minimumNumber(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
