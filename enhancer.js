const success = (item) => {

}

const fail = (item) => {
    if (item.enhancement > 14) {
        const updatedItem = {...item, durability: item.durability - 10}
        return updatedItem.durability
    }
    const updatedItem = {...item, durability: item.durability - 5}
    return updatedItem.durability
}

const repair = (item) => {

}

module.exports = {
    success,
    fail,
    repair
}