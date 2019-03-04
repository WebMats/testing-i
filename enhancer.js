const upperLevels = {
    16: 'PRI',
    17: 'DUO',
    18: 'TRI',
    19: 'TET',
    20: 'PEN',
}

const success = (item) => {

}

const fail = (item) => {
    if (item.enhancement >= 15 && item.durability < 10) {
        return item
    }
    if (item.enhancement <= 14 && item.durability < 25) {
        return item
    }
    if (item.enhancement > 16) {
        item.enhancement = item.enhancement - 1;
        
        item.name = `[${upperLevels[item.enhancement]}] ${item.name}`
    }
    if (item.enhancement > 14) {
        return {...item, durability: item.durability - 10}
    }
    return {...item, durability: item.durability - 5}
}

const repair = (item) => {

}

module.exports = {
    success,
    fail,
    repair,
    upperLevels
}