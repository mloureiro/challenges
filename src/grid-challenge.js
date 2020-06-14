// time : 22min to understand the details + 5 min to build it

const gridChallenge = grid => {
	const sorted = grid.map(row =>
		row.split('').sort().join(''),
	)
	for (let i = 1; i < sorted.length; i++)
		for (let j = 1; j < sorted[0].length; j++)
			if (
				sorted[i][j] < sorted[i - 1][j] ||
				sorted[i][j] < sorted[i][j - 1]
			)
				return 'NO'

	return 'YES'
}

const tests = [
	{
		input: [['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']],
		output: 'YES',
	},
	{
		input: [['abc', 'lmp', 'qrt']],
		output: 'YES',
	},
	{
		input: [['mpxz', 'abcd', 'wlmf']],
		output: 'NO',
	},
	{
		input: [['abc', 'hjk', 'mpq', 'rtv']],
		output: 'YES',
	},
	{
		input: [['abcdefg']],
		output: 'YES',
	},
	{
		input: [['a']],
		output: 'YES',
	},
	{
		input: [['zz', 'zz']],
		output: 'YES',
	},
	{
		input: [['az', 'az']],
		output: 'YES',
	},
	{
		input: [['abc', 'ghi', 'def', 'jkl']],
		output: 'NO',
	},
	{
		input: [['p']],
		output: 'YES',
	},
	{
		input: [
			[
				'vbznfwg',
				'eacklwk',
				'bmarzvp',
				'rwgnjqd',
				'xqddtln',
				'wuxtduk',
				'rzmfcik',
			],
		],
		output: 'NO',
	},
	{
		input: [['tjxxx', 'xtxxj', 'rzzzz', 'zzrzz', 'rzzzz']],
		output: 'YES',
	},
	{
		input: [
			[
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
				'zzzzzzzzzz',
			],
		],
		output: 'YES',
	},
	{
		input: [
			[
				'umcuoqaj',
				'bbjgbhcr',
				'lpomaerv',
				'tknrndsj',
				'qxyxbtna',
				'wktoedyl',
				'kpfyjlpm',
				'geixiery',
			],
		],
		output: 'NO',
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = gridChallenge(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
