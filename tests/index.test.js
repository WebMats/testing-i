const { success, fail, repair, upperLevels} = require('../enhancer');
const getItem = require('../build-item');

let item, enhance;

beforeEach(() => {
    item = getItem();
})

describe('when enhancement succeeds', () => {
    beforeAll(() => {
        enhance = success;
    })
    test('should increase item enhancement by one', () => {
        const enhancementBefore = item.enhancement;
        const { enhancement: enhancementAfter } = enhance(item);
        expect(enhancementAfter).toEqual(enhancementBefore + 1)
    })
    
})

describe('when enhancement fails', () => {
    beforeAll(() => {
        enhance = fail;
    })
    describe('when enhancement is between 0 and 14', () => {
        test('should decrease durability by 5.', () => {
            const durabilityBefore = item.durability;
            const {durability: durabilityAfter} = enhance(item);
            expect(durabilityAfter).toEqual(durabilityBefore - 5);
        })
        describe('when durability is below 25', () => {
            beforeEach(() => {
                const difference = item.durability - 24;
                if (difference > 0) {
                    item.durability = item.durability - difference;
                }
            })
            test('should not be able to enhance item', () => {
                const itemBefore = {...item}
                const itemAfter = enhance(item);
                expect(itemAfter).toEqual(itemBefore);
            });
        })
    })
    describe('when enhancement is greater than 14', () => {
        beforeEach(() => {
            const difference = 15 - item.enhancement;
            if (difference > 0) {
                item.enhancement = item.enhancement + difference
            }
        })
        test('should decrease durability by 10.', () => {
            const durabilityBefore = item.durability;
            const {durability: durabilityAfter} = enhance(item);
            expect(durabilityAfter).toEqual(durabilityBefore - 10);
        })
        describe('when durability is below 10', () => {
            beforeEach(() => {
                const difference = item.durability - 9;
                if (difference > 0) {
                    item.durability = item.durability - difference;
                }
            })
            test('should not be able to enhance item', () => {
                const itemBefore = {...item}
                const itemAfter = enhance(item);
                expect(itemAfter).toEqual(itemBefore);
            });
        })
    })
    describe('when item\'s enhancement level is greater than 16', () => {
        beforeEach(() => {
            const difference = 17 - item.enhancement;
            if (difference > 0) {
                item.enhancement = item.enhancement + difference
            }
        })
        test('should decrease enhancement level by 1', () => {
            const enhancementBefore = item.enhancement;
            const {enhancement: enhancementAfter} = enhance(item);
            expect(enhancementAfter).toEqual(enhancementBefore - 1);
        })
        test('should update name to include enhancement level', () => {
            const nameBefore = item.name;
            const {name: nameAfter} = enhance(item);
            expect(nameAfter).toEqual(`[${upperLevels[item.enhancement]}] ${nameBefore}`)
        })
    })
    
})
