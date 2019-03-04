const { success, fail, repair } = require('../enhancer');
const getItem = require('../build-item');

let item, enhance;

beforeEach(() => {
    item = getItem();
})

describe('when enhancement succeeds', () => {
    
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
    })
    
})
