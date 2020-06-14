// ~42min (failed)
// ~47min (failed again)

// const isNonDivisible = (k, [first, ...rest], current) => {
// 	// console.log({ first, current, d: (first + current) % k})
// 	return (first + current) % k !== 0
// 		&& (rest.length === 0 || isNonDivisible(k, rest, current))
// }
//
// const startListInPosition = (values, i) => [
// 	values[i],
// 	...values.slice(0, i),
// 	...values.slice(i + 1),
// ]
//
// const filterDivisibles = (k, values) => {
// 	let list = [values[0]]
// 	for (let i = 1; i < values.length; i++) {
// 		if (!list.find(v => (v + values[i]) % k === 0))
// 			list = [...list, values[i]]
// 	}
//
// 	if (list.length === 1 && list[0] % k === 0)
// 		return []
//
// console.log({ result: list })
// 	return list
// }
//
// const nonDivisibleSubset = (k, values) => {
// 	let combinations = []
// 	for (let i = 0; i < values.length; i ++)
// 		combinations = [
// 			...combinations,
// 			filterDivisibles(k, startListInPosition(values, i))
// 		]
//
// 	return combinations.reduce(
// 		(largest, combination) => largest < combination.length
// 			? combination.length
// 			: largest,
// 		0,
// 	)
// }

/*

n, k = map(int,raw_input().strip().split(" "))
numbers = map(int,raw_input().strip().split(" "))

counts = [0] * k
for number in numbers:
    counts[number % k] += 1

count = min(counts[0], 1)
for i in range(1, k//2+1):
    if i != k - i:
        count += max(counts[i], counts[k-i])
if k % 2 == 0:
    count += 1

print count

 */

const nonDivisibleSubset = (k, values) => {
	const counts = Array(k).fill(0)
	values.forEach(value => counts[value % k]++)

	let count = counts[0] < 1 ? counts[0] : 1
	for (
		let i = 1, till = Math.floor(k / 2) + 1;
		i <= till;
		i++
	)
		if (i !== k - i)
			count +=
				counts[i] > counts[k - i]
					? counts[i]
					: counts[k - i]

	if (k % 2 === 0) count++

	return count
}

const tests = [
	{
		input: [3, [3]],
		output: 0,
	},
	{
		input: [3, [3, 6, 9]],
		output: 0,
	},
	{
		input: [3, [1]],
		output: 1,
	},
	{
		input: [3, [1, 7, 2, 4]],
		output: 3,
	},
	{
		input: [5, [1, 0, 2, 5]],
		output: 3,
	},
	{
		input: [5, [1, 5, 2, 0]],
		output: 3,
	},
	{
		input: [2, [2, 4, 6, 8]],
		output: 0,
	},
	{
		input: [5, [5, 2, 0, 1]],
		output: 3,
	},
	{
		input: [4, [19, 10, 12, 10, 24, 25]],
		output: 3,
	},
]

tests.forEach(({ input, output }, idx) => {
	let result = nonDivisibleSubset(...input)
	const isSame = result === output

	console.log(
		`Test ${idx + 1}:`,
		isSame ? '✓' : '❌',
		!isSame ? `-  ${output} ∙ ${result}` : '',
	)
})
