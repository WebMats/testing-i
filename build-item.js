const items = [
    {name: 'Mark L', type: 'armor', durability: 100, enhancement: 0},
    {name: 'Captain American\'s shield', type: 'armor', durability: 100, enhancement: 0},
    {name: 'Mjølnir', type: 'weapon', durability: 100, enhancement: 0},
    {name: 'Black Widow\'s Batons', type: 'weapon', durability: 100, enhancement: 0},
    {name: 'Iron Spider Armor', type: 'armor', durability: 100, enhancement: 0},
    {name: 'Godslayer', type: 'armor', durability: 100, enhancement: 0},
    {name: 'Gravity Mine', type: 'weapon', durability: 100, enhancement: 0},
    {name: 'Stormbreaker', type: 'weapon', durability: 100, enhancement: 0},
    {name: 'Time Stone', type: 'weapon', durability: 100, enhancement: 0},
    {name: 'Infinity Gauntlet', type: 'weapon', durability: 100, enhancement: 0},
]


module.exports = () => {
    const randomNum = Math.floor(Math.random() + 10)
    return items[randomNum]
}