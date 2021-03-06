const upperLevels = {
    1: "+1", 2: "+2", 3: "+3", 4: "+4", 5: "+5",
    6: "+6", 7: "+7", 8: "+8", 9: "+9", 10: "+10",
    11: "+11", 12: "+12", 13: "+13", 14: "+14", 15: "+15",
    16: 'PRI', 17: 'DUO', 18: 'TRI', 19: 'TET', 20: 'PEN',
}

const success = (item) => {
    return {
        ...item, 
        enhancement: item.enhancement + 1, 
        name: `[${upperLevels[item.enhancement + 1]}] ${item.name}`}
}

const fail = (item) => {
    let updatedItem = {...item}
    if (item.enhancement >= 15 && item.durability < 10) {
        return updatedItem
    }
    if (item.enhancement <= 14 && item.durability < 25) {
        return updatedItem
    }
    if (item.enhancement > 16) {
        updatedItem.enhancement = updatedItem.enhancement - 1
        updatedItem.name = `[${upperLevels[updatedItem.enhancement]}] ${updatedItem.name}`
    }
    if (item.enhancement > 14) {
        return {...updatedItem, durability: item.durability - 10}
    }
    return {...updatedItem, durability: item.durability - 5}
}

const repair = (item) => {
    return { ...item, durability: 100 }
}

module.exports = {
    success,
    fail,
    repair,
    upperLevels
}