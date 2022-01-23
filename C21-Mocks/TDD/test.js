const Calculadora = require('./calculadora')

Test('Should add 4 and 5', () => {
    expect(Calculadora.sumar(4,5)).toBe(9)
    expect(Calculadora.sumar(-3,-2)).toBe(-5)
    expect(Calculadora.multiplicar(3,2)).toBe(6)
}) 