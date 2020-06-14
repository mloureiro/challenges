// time : 00h12m38s

const workbook = (_, maxPerPage, chapters) => {
	let totalSpecialProblems = 0
	let currentPage = 1
	for (let i = 0; i < chapters.length; i++) {
		let writtenProblems = 0
		while (writtenProblems < chapters[i]) {
			const start = writtenProblems + 1
			const end =
				writtenProblems + maxPerPage < chapters[i]
					? writtenProblems + maxPerPage
					: chapters[i]

			if (start <= currentPage && currentPage <= end)
				totalSpecialProblems++

			writtenProblems += maxPerPage
			currentPage++
		}
	}

	return totalSpecialProblems
}

const tests = [
	{
		input: [5, 3, [4, 2, 6, 1, 10]],
		output: 4,
	},
	{
		input: [10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]],
		output: 8,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = workbook(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
