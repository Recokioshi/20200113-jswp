/**

 # Zadanie
 1. Zapoznaj się z elementami, których nie warto używać w JavaScript.

 #Cel:
 Zobaczenie iż nie wszystkie elementy JavaScript nadają się do "codziennego" wykorzystywania w kodzie.
 Część z nich jest eksperymentalna, część nie jest bezpieczna ze względu na website security.

 Porównaj: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape

 */

// NIE UŻYWAJ with
// To źródło potencjalnych błędów
const myObject = {
  field: 'one',
  hello: 'world'
};
with (myObject) {
  console.log(field, hello);
}
// console.log(field);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with

// używanie eval :
eval('var x = 1');
console.log(x);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!

// używanie funkcji z przyszłości: (np. experimental)
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]