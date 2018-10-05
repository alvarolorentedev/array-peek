require('../src/peek')

describe('peek', () => {
    test('should take the object apply function and return the same array', () => {
        let array = [1,2,3]
        let callback = jest.fn()
        let result = array.peek(callback)
        array.forEach(element => {
            expect(callback).toBeCalledWith(element)
        });
        expect(array).toEqual(result)
    });
})