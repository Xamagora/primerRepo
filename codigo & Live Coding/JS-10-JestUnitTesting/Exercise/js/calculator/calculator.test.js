const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('adds 1 * 2 to equal 2', () => { // Para saber si hace la función de multiplicación
  expect(calculator.multiply(1, 2)).toBe(2);// multiplica 1 por 2 que debe ser igual a 2
});
test('adds 2 * 2 to equal 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test('adds 8 / 2 to equal 4', () => { // Para saber si hace la función de división
  expect(calculator.divide(8, 2)).toBe(4); // multiplica 8 entre 2 que debe ser igual a 4
});
test('adds 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});



