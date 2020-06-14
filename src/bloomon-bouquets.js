// time : 02h26m10s

const readline = require('readline')
const fs = require('fs');
const path = require('path')

// const DATA_FILE = path.join(__dirname, 'bloomon-bouquets.data.txt')
const DATA_FILE = path.join(__dirname, 'bloomon-bouquets.data2.txt')
const TYPE_FLOWER = 'FLOWER'
const TYPE_BOUQUET_DESIGN = 'BOUQUET_DESIGN'
const EVENT_FLOWER_ADDED = 'FLOWER/NEW'
const EVENT_DESIGN_ADDED = 'DESIGN/NEW'
const EVENT_BOUQUET_CREATED = 'BOUQUET/NEW'

const createBouquets = () => {
	const eventSystem = newEventSystem()
	const store = newStore(eventSystem)

	// DEBUG
	// eventSystem.subscribe(EVENT_DESIGN_ADDED, ({ design }) => console.log(EVENT_DESIGN_ADDED, design.id))
	// eventSystem.subscribe(EVENT_FLOWER_ADDED, ({ flower }) => console.log(EVENT_FLOWER_ADDED, flower.id))
	// eventSystem.subscribe(EVENT_BOUQUET_CREATED, ({ bouquet }) => console.log(EVENT_BOUQUET_CREATED, bouquet.design.id, bouquet.flowers.length))

	// Domain events
	eventSystem.subscribe(EVENT_FLOWER_ADDED, buildBouquet({ store, eventSystem }))
	eventSystem.subscribe(EVENT_BOUQUET_CREATED, reportBouquet)

	readline.createInterface({
		input: fs.createReadStream(DATA_FILE),
		output: process.stdout,
		console: false
	})
		.on('line', factoryParseLine(store))
		// Debug
		// .on('close', () => console.log('DONE', store.getDesigns().AS.getFlowerMap(), store.getFlowers()))
}

const factoryParseLine = store => line => {
	if (!line.trim()) {
		return
	}

	const input = parseLine(line)
	if (!input) {
		console.error(`Input ${line} is invalid`)
		return
	}

	if (input._type === TYPE_FLOWER)
		store.addFlower(input)
	else
		store.addDesign(input)
}

const parseLine = line => {
	if (/^[a-z][SL]$/.test(line))
		return createNewFlowerFromString(line)

	if (/^[A-Z][SL](\d+[a-z][SL])*\d+$/)
		return createNewBouquetDesignFromString(line)
}

const createNewFlowerFromString = line => {
	const type = line[0]
	const size = line[1]

	return Object.freeze({
		_type: TYPE_FLOWER,
		id: line,
		type,
		size,
		isLarge: () => size === 'L'
	})
}

const createNewBouquetDesignFromString = line => {
	const type = line[0]
	const size = line[1]
	const totalFlowers = parseInt(line.replace(/^.*?(\d+)$/, '$1'), 10)

	const flowerMap = {}
	for (const flowerDefinition of line.matchAll(/(\d+)([a-z])/g)) {
		const flowerType = flowerDefinition[2]
		const flowerQuantity = parseInt(flowerDefinition[1], 10)

		const flower = createNewFlowerFromString(`${flowerType}${size}`)
		if (!flowerMap[flower.id])
			flowerMap[flower.id] = {
				type: flower,
				quantity: 0
			}

		flowerMap[flower.id].quantity += flowerQuantity
	}

	return Object.freeze({
		_type: TYPE_BOUQUET_DESIGN,
		id: `${type}${size}`,
		type,
		size,
		requiredQuantity: totalFlowers,
		isLarge: () => size === 'L',
		getFlowerMap: () => Object.freeze(flowerMap),
	})
}

const newStore = eventSystem => {
	const designs = {}
	const flowers = {}

	return Object.freeze({
		// Flowers
		addFlower: flower => {
			if (!flowers[flower.id])
				flowers[flower.id] = {
					quantity: 0,
					type: flower,
				}

			flowers[flower.id].quantity++

			eventSystem.trigger(EVENT_FLOWER_ADDED, { flower })
		},
		getFlowers: () => cloneObject(flowers),
		removeFlowers: flowerList => flowerList
			.forEach(flower => flowers[flower.type.id].quantity -= flower.quantity),

		// Designs
		addDesign: design => {
			if (designs[design.id]) {
				console.warn(`Bouquet design "${design}" is duplicated, ignoring.`)
				return
			}

			designs[design.id] = design

			eventSystem.trigger(EVENT_DESIGN_ADDED, { design })
		},
		getDesigns: () => cloneObject(designs),
	})
}

const newEventSystem = () => {
	const eventListeners = {}

	return Object.freeze({
		subscribe: (eventType, callback) => {
			if (!eventListeners[eventType])
				eventListeners[eventType] = {}

			eventListeners[eventType][callback] = callback

			return Object.freeze({
				off: () => delete eventListeners[eventType][callback],
			})
		},
		trigger: (eventType, ...props) => {
			Object.values(eventListeners[eventType] || {})
				.forEach(listener => listener(...props))
		}
	})
}

const extractFlowersForBouquet = (design, flowerStock) => {
	let quantityLeft = design.requiredQuantity
	const flowersForBouquet = {}
	Object.values(design.getFlowerMap())
		.forEach(flower => {
			if (!flowerStock[flower.type.id] || flowerStock[flower.type.id].quantity < flower.quantity)
				throw Error(`Not enough stock of "${flower.type.id}" flower type for design "${design.id}"`)

			flowersForBouquet[flower.type.id] = flower
			quantityLeft -= flower.quantity
		})

	if (quantityLeft <= 0)
		return flowersForBouquet

	for (const flower of Object.values(flowerStock)) {
		const usedQuantity = flowersForBouquet[flower.type.id]
			? flowersForBouquet[flower.type.id].quantity
			: 0
		let quantity = flower.quantity - usedQuantity

		if (quantity <= 0 || flower.type.size !== design.size)
			continue

		if (quantity > quantityLeft)
			quantity = quantityLeft

		if (!flowersForBouquet[flower.type.id])
			flowersForBouquet[flower.type.id] = {
				type: flower.type,
				quantity: 0,
			}

		flowersForBouquet[flower.type.id].quantity += quantity
		quantityLeft -= quantity

		if (quantityLeft <= 0)
			return flowersForBouquet
	}

	throw Error(`Not enough stock for design "${design.id}"`)
}

const matchBouquet = (designs, flowerStock) => {
	for (const design of Object.values(designs)) {
		try {
			return Object.freeze({
				design,
				flowers: extractFlowersForBouquet(design, flowerStock),
			})
		} catch (e) {
			// do nothing
		}
	}

	return null
}

const buildBouquet = ({ store, eventSystem }) => () => {
	const flowerStock = store.getFlowers()
	const designs = store.getDesigns()

	const bouquet = matchBouquet(designs, flowerStock)
	if (!bouquet)
		return

	store.removeFlowers(Object.values(bouquet.flowers))
	// @TODO store bouquet
	eventSystem.trigger(EVENT_BOUQUET_CREATED, { bouquet })
}

const reportBouquet = ({ bouquet }) => {
	const flowers = Object.values(bouquet.flowers)
		// .map(flower => `${flower.quantity}${flower.type.id}`)
		.map(flower => `${flower.quantity}${flower.type.type}`)

	console.log(`${bouquet.design.id}${flowers.join('')}`)
}

const cloneObject = entity => {
	if (typeof entity !== 'object' && !Array.isArray(entity))
		return entity

	return Object.fromEntries(
		Object.entries(entity)
			.map(([key, value]) => ([key, cloneObject(value)])))
}

createBouquets();
