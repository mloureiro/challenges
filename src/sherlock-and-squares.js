// time : 00h03m38s - not performant
// time : 00h20m41s

const squares = (start, end) => {
	const squareStart = Math.ceil(Math.sqrt(start))
	const squareEnd = Math.floor(Math.sqrt(end))

	return squareEnd - squareStart + 1
}

const tests = [
	{
		input: [3, 9],
		output: 2,
	},
	{
		input: [17, 24],
		output: 0,
	},
	{
		input: [35, 70],
		output: 3,
	},
	{
		input: [100, 1000],
		output: 22,
	},
	{
		input: [1, 1000000000],
		output: 31622,
	},
	{
		input: [89784519, 103811134],
		output: 713,
	},
	{
		input: [50979851, 733216221],
		output: 19937,
	},
	{
		input: [171329332, 418580628],
		output: 7370,
	},
	{
		input: [123905259, 755565730],
		output: 16356,
	},
	{
		input: [427179538, 677407359],
		output: 5359,
	},
	{
		input: [243896428, 791246640],
		output: 12512,
	},
	{
		input: [444446178, 492806755],
		output: 1118,
	},
	{
		input: [187339538, 484177206],
		output: 8317,
	},
	{
		input: [125865754, 699129690],
		output: 15223,
	},
	{
		input: [169802456, 614868850],
		output: 11766,
	},
	{
		input: [192215942, 938242938],
		output: 16766,
	},
	{
		input: [296756780, 884885994],
		output: 12521,
	},
	{
		input: [19485899, 473633363],
		output: 17349,
	},
	{
		input: [396312466, 513969782],
		output: 2763,
	},
	{
		input: [11949158, 853358071],
		output: 25756,
	},
	{
		input: [109622770, 520785556],
		output: 12350,
	},
	{
		input: [371207145, 376610977],
		output: 140,
	},
	{
		input: [216265183, 869656193],
		output: 14784,
	},
	{
		input: [239126973, 256323473],
		output: 547,
	},
	{
		input: [69813108, 135732543],
		output: 3295,
	},
	{
		input: [300412404, 992454885],
		output: 14171,
	},
	{
		input: [211862306, 445042102],
		output: 6541,
	},
	{
		input: [238798186, 355417581],
		output: 3399,
	},
	{
		input: [262265687, 982116339],
		output: 15144,
	},
	{
		input: [173781755, 707552013],
		output: 13417,
	},
	{
		input: [284041916, 351822523],
		output: 1903,
	},
	{
		input: [285923330, 778061319],
		output: 10984,
	},
	{
		input: [475987418, 760500233],
		output: 5760,
	},
	{
		input: [406702836, 924161907],
		output: 10234,
	},
	{
		input: [12674117, 147597721],
		output: 8588,
	},
	{
		input: [391382449, 880481817],
		output: 9889,
	},
	{
		input: [152903611, 619375356],
		output: 12522,
	},
	{
		input: [59029698, 826656218],
		output: 21068,
	},
	{
		input: [158230678, 538524486],
		output: 10628,
	},
	{
		input: [326785037, 691884170],
		output: 8226,
	},
	{
		input: [228027929, 677103608],
		output: 10921,
	},
	{
		input: [283898639, 731619404],
		output: 10199,
	},
	{
		input: [116638768, 667591545],
		output: 15038,
	},
	{
		input: [397617830, 579832266],
		output: 4139,
	},
	{
		input: [33943384, 91914899],
		output: 3761,
	},
	{
		input: [37497644, 419225355],
		output: 14351,
	},
	{
		input: [1958906, 702508377],
		output: 25105,
	},
	{
		input: [64933362, 594873842],
		output: 16332,
	},
	{
		input: [28203780, 181144905],
		output: 8149,
	},
	{
		input: [455413546, 758771175],
		output: 6205,
	},
	{
		input: [357655346, 370055317],
		output: 325,
	},
	{
		input: [210341246, 555409408],
		output: 9064,
	},
	{
		input: [413246428, 522918735],
		output: 2539,
	},
	{
		input: [447921373, 880780558],
		output: 8513,
	},
	{
		input: [407717959, 746079740],
		output: 7122,
	},
	{
		input: [163166700, 875944724],
		output: 16823,
	},
	{
		input: [298101393, 884597840],
		output: 12477,
	},
	{
		input: [143668007, 819051415],
		output: 16633,
	},
	{
		input: [455762601, 675354425],
		output: 4639,
	},
	{
		input: [175047687, 419367997],
		output: 7248,
	},
	{
		input: [204585377, 843122768],
		output: 14733,
	},
	{
		input: [112215140, 545263430],
		output: 12757,
	},
	{
		input: [141211904, 921031437],
		output: 18465,
	},
	{
		input: [51637991, 879522412],
		output: 22471,
	},
	{
		input: [54251271, 850161040],
		output: 21792,
	},
	{
		input: [66118860, 261736652],
		output: 8047,
	},
	{
		input: [438245553, 550036028],
		output: 2518,
	},
	{
		input: [187409002, 342372053],
		output: 4814,
	},
	{
		input: [73848251, 193531714],
		output: 5318,
	},
	{
		input: [342694078, 776348675],
		output: 9352,
	},
	{
		input: [110098181, 888761424],
		output: 19320,
	},
	{
		input: [299683605, 764262215],
		output: 10334,
	},
	{
		input: [120073052, 943963023],
		output: 19766,
	},
	{
		input: [82729270, 290571072],
		output: 7951,
	},
	{
		input: [69851118, 224382481],
		output: 6622,
	},
	{
		input: [470502344, 637429590],
		output: 3556,
	},
	{
		input: [330405157, 757046658],
		output: 9337,
	},
	{
		input: [329966829, 905357457],
		output: 11925,
	},
	{
		input: [169185858, 855117887],
		output: 16235,
	},
	{
		input: [212121264, 336009838],
		output: 3766,
	},
	{
		input: [143508830, 414833911],
		output: 8388,
	},
	{
		input: [16303712, 589527264],
		output: 20243,
	},
	{
		input: [410826987, 528030997],
		output: 2710,
	},
	{
		input: [197082485, 233669728],
		output: 1248,
	},
	{
		input: [303003189, 531906879],
		output: 5657,
	},
	{
		input: [97511200, 198585972],
		output: 4218,
	},
	{
		input: [62054624, 631938166],
		output: 17261,
	},
	{
		input: [378648045, 764981804],
		output: 8200,
	},
	{
		input: [494482241, 981860655],
		output: 9098,
	},
	{
		input: [84086465, 806659924],
		output: 19232,
	},
	{
		input: [394057299, 991603290],
		output: 11639,
	},
	{
		input: [477280734, 727986612],
		output: 5135,
	},
	{
		input: [206453450, 687473177],
		output: 11851,
	},
	{
		input: [246922491, 419417467],
		output: 4766,
	},
	{
		input: [96149878, 135411388],
		output: 1831,
	},
	{
		input: [491685010, 945834345],
		output: 8581,
	},
	{
		input: [147605205, 966616572],
		output: 18941,
	},
	{
		input: [162535422, 435479079],
		output: 8120,
	},
	{
		input: [372984220, 641890828],
		output: 6023,
	},
	{
		input: [27628229, 758903428],
		output: 22292,
	},
	{
		input: [459338267, 572049475],
		output: 2485,
	},
	{
		input: [69163630, 362517007],
		output: 10723,
	},
	{
		input: [285652724, 360248157],
		output: 2079,
	},
	{
		input: [1000000000, 1000000000],
		output: 0,
	},
]

const isEqual = (a, b) =>
	JSON.stringify(a) === JSON.stringify(b)

tests.forEach(({ input, output }, idx) => {
	let result = squares(...input)
	const isEqualResult = isEqual(result, output)

	console.log(
		`Test ${idx + 1}:`,
		isEqualResult ? '✓' : '❌',
		!isEqualResult ? `-  ${output} ∙ ${result}` : '',
	)
})
