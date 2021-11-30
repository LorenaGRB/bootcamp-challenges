const { 
    mayor,
    menor,
    sumar,
    pares,
    duplicar 
} = require('../utils/transformacions')

describe('duplicar', () => {
    it('should return an array with the elements duplicated', () => {
        // Arrange
        const array = [2,6]

        //Act
        const result = duplicar(array)

        //Assert
        expect(result[0]).toBe(4)
    })
})

describe('mayor', () => {
    it('should return an array with the mayor element', () => {
        // Arrange
        const array = [2,6]

        //Act
        const result = mayor(array)

        //Assert
        expect(result).toBe(6)
    })
})

describe('sumar', () => {
    it('should return an array with the plus of elements', () => {
        // Arrange
        const array = [2,6]

        //Act
        const result = sumar(array)

        //Assert
        expect(result).toBe(8)
    })
})

describe('pares', () => {
    it('should return an array with the pair element', () => {
        // Arrange
        const array = [2,6]

        //Act
        const result = pares(array)

        //Assert
        expect(result).toStrictEqual([2,6])
    })
})

describe('menor', () => {
    it('should return an array with the minor element', () => {
        // Arrange
        const array = [2,6]

        //Act
        const result = menor(array)

        //Assert
        expect(result).toBe(2)
    })
})