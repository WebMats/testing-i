const success = (item) => {

}

const fail = (item) => {
    if (item.enhancement > 16) {
        item.enhancement = item.enhancement - 1;
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
    repair
}