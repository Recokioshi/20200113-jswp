/**

 #Zadanie:
 1. Popraw, zaproponuj alternatywy do kodu napisanego poniżej w zły sposób
 2. Jaką dodatkową korzyść osiągamy dodając domyślne wartości argumentów w funkcjach

 #Cel:
 Zrozumienie i przełożenie na praktykę, zasad "Czystego kodu".
 Metody i zmienne powinny mieć unikatowe ale znaczące nazwy.
 Wielkość całego modułu nie powinna przekraczać 200+ linii kodu
 Wielkość metody nie powinna przekraczać 20+ linii

 Zobacz książkę:
 "Czysty kod. Podręcznik dobrego programisty" - Robert C. Martin
 
 */

function multiply(a, b) {
  return a * b;
}

function sayMyName(name) {
  return `Your name is ${name}`
  // return 'Your name is' + name;
}

const person = {
  name: '',
  address: {},
  gender: 'male'
};

// Metoda z wieloma parametrami na 1 rzut oka wygląda niegroźnie
// w momencie deklaracji faktycznie wygląda "składnie"

// destrukturyzacja już przy deklaracji funkcji
// function setupUserParams({ name, address, sendMails, hasAdminAccount, hasTelephone, hasGMTTimeZone }) {
function setupUserParams(params) {
  //
  //
  // ...
  // tutaj niżej byłaby jakaś logika....
  const { name, address, sendMails, hasAdminAccount, hasTelephone, hasGMTTimeZone } = params;
  //
  console.log(name);
  console.log(address);
}


setupUserParams({
  address: 'michal@test.pl',
  hasAdminAccount: true,
  name: 'Michal',
  hasTelephone: true,
  hasGMTTimeZone: true,
  sendMails: true
})

// problem pojawia się w momencie odczytania kodu gdy ją wywołujemy:
// setupUserParams('Michal', 'michal@test.pl', true, true, true, true);


// Przykład:
const user = {
  name: "Michał",
  address: {}
};

// const name = user.name;
// const address = user.address;
const {name, address} = user;

console.log(name);
console.log(address);

