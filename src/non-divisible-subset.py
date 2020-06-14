def nonDivisibleSubset(k, numbers):
	counts = [0] * k
	for number in numbers:
		counts[number % k] += 1

	print(counts)

	count = min(counts[0], 1)
	for i in range(1, k//2+1):
		if i != k - i:
			count += max(counts[i], counts[k-i])
	if k % 2 == 0:
		count += 1

	return count


tests = [
	{
		'input': [3, [3]],
		'output': 0,
	},
	{
		'input': [3, [3, 6, 9]],
		'output': 0,
	},
	{
		'input': [3, [1]],
		'output': 1,
	},
	{
		'input': [3, [1, 7, 2, 4]],
		'output': 3,
	},
	{
		'input': [5, [1, 0, 2, 5]],
		'output': 3,
	},
	{
		'input': [5, [1, 5, 2, 0]],
		'output': 3,
	},
	{
		'input': [2, [2, 4, 6, 8]],
		'output': 0,
	},
	{
		'input': [5, [5, 2, 0, 1]],
		'output': 3,
	},
	{
		'input': [4, [19, 10, 12, 10, 24, 25]],
		'output': 3,
	},
]

for i, test in zip(range(1, len(tests)), tests):
	print(i)
	if nonDivisibleSubset(test['input'][0], test['input'][1]) == test['output']:
		print('passed')
	else:
		print('FAILED')

