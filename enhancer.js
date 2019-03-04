const success = (item) => {

}

const fail = (item) => {
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