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
    describe('when enhancement is between 0 and 14.', () => {
        test('should durability decrease by 5', () => {
            const durabilityBefore = item.durability;
            const durabilityAfter = enhance(item);
            expect(durabilityAfter).toEqual(durabilityBefore - 5);
        })
        
    })
})
