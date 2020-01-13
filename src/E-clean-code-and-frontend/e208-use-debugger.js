/**

 # Zadanie:
 1. Uruchom w środowisku typu LiveCoding i sprawdź przykład debuggerem

 #Cel:
 Utrwalenie / Poznanie narzędzi typu debugger. Sposoby jego wywoływania.
 Ustawianie brake'pointów w kodzie - przeglądarka Chrome

 */


function callTheApi() {
  return fetch('https://randomuser.me/api/')
}

callTheApi()
  .then(resultJson => resultJson.json())
  .then(res => res.results ? res.results[0] : {})
  .then(console.log)
  .catch(err => console.error(err));

console.log('Runner start');

function addTwoNumbers(numA, numB) {
  return numA + numB;
}

const result = addTwoNumbers(33, 21);

function incrementSequence() {
  let a = 100;

  function incA() {
    a++;
  }

  incA();
  incA();
  incA();
  console.log(a);
}

console.log(result);
incrementSequence();