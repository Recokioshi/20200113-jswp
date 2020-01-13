/**
 * Prosty przykład obrazujący problem braku re-używalności kodu.
 *
 * Zadanie:
 *
 * Jak sprawić aby kod był re-używalny?
 * */

console.log('Hello in program for dividing 2 numbers')

const x = 10;
const y = 5;

console.log('Divide 10 / 5 =', divide(x, y));

function divide(x, y) {
    return x / y;
}
/*const divide = function (x, y) {
    return x / y;
};*/

console.log(divide(10, 5))
console.log(divide(10, 0))


