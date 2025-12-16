addLayer("c", {
    name: "Calories", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b7c40aff",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Calories", // Name of prestige currency
    baseResource: "Dollars", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(100)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Purchase calories", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    upgrades: {
        11: {
            title: "Buy an Energy drink",
            description: "work faster to double money earned .",
            cost: new Decimal(330),
        },
        12: {
            title: "quintroble",
            description: "quintouple the poinnnnts!!!",
            cost: new Decimal(5),
        },
    },
})
addLayer("s", {
    name: "soopy", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
	    points: new Decimal(0),
    }},
    color: "#08a337ff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "shits points", // Name of prestige currency
    baseResource: "prestige", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    
    


    upgrades: {
        11: {
            title: "HOLY SHIY",
            description: "No more shits",
            cost: new Decimal(1),
        },
        12: {
            title: "quintroble",
            description: "quintouple the poinnnnts!!!",
            cost: new Decimal(5),
        },
    },

})
