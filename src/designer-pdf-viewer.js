// ~8m20s
const characterCode = character =>
	character.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)

const designerPdfViewer = (characterHeights, word) => {
	const rectangleHeight = word
		.split('')
		.reduce((height, character) => {
			const characterHeight =
				characterHeights[characterCode(character)]

			return height < characterHeight
				? characterHeight
				: height
		}, 0)

	return word.length * rectangleHeight
}

const tests = [
	{
		input: [
			[
				1,
				3,
				1,
				3,
				1,
				4,
				1,
				3,
				2,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
			],
			'abc',
		],
		output: 9,
	},
	{
		input: [
			[
				1,
				3,
				1,
				3,
				1,
				4,
				1,
				3,
				2,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				7,
			],
			'zaba',
		],
		output: 28,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = designerPdfViewer(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
