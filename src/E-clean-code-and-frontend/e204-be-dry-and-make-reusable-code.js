/**

 Uruchom w środowisku typu LiveCoding
 Np. http://jsbin.com albo http://stackblitz.com

 # Zadanie
 1. Zaproponuj lepszą obsługę poniższego kodu
 2. Pozamieniaj nazwy metod na bardziej adekwatne do tego co robią
 3. Zaproponuj moduły dla logicznie oddzielnych zapytań

 Więcej informacji na temat fetch:
 https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

 #Cel:
 DRY = Dont repeat yourself
 Zauważenie powtarzalności i refaktoryzacja istniejącego kodu
 
 */

function iWillDoAllTheLogicMyself() {

  const apiAddress = 'https://randomuser.me/api/';

  fetch(apiAddress)
    .then((hello) => console.log(`Result ${hello.toString()}`))
}

function todos() {

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((hello) => console.log(`Result ${hello.toString()}`))
}

function users() {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((hello) => console.log(`Result ${hello.toString()}`))
}

function todo1() {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((hello) => console.log(`Result ${hello.toString()}`))
}
