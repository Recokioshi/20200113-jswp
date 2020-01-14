/**

 # Zadania poniżej
 1. Przekształć podaną tablicę użytkowników na tablicę imion należących tylko do kobiet i Uppercasowanych
 tj. wynik dla poniższej tablicy = [ 'KAZIMIERA', 'BARBARA' ]


 #Cel:
 W wielu przypadkach transformacji danych z pomocą przychodzi nam programowanie funkcyjne.
 Drobne funkcje z pojedynczą odpowiedzialnością - łatwo się testuje i przyjemnie używa ponownie.

 */


const users = [
  {
    name: 'Janusz',
    age: 41,
    profession: 'Hydraulik'
  },
  {
    name: 'Kazimiera',
    age: 25,
    profession: 'Senior HR'
  },
  {
    name: 'Barbara',
    age: 35,
    profession: 'Programistka'
  },
  {
    name: 'Zbyszek',
    age: 55,
    profession: 'Kierowca'
  },
  null
];

// Rozwiązanie:
const women = [];
for(let x = 0; x < users.length; x++) {
  if(!users[x]) {
    continue;
  }
  if(users[x].name[users[x].name.length-1].toUpperCase() === 'A') {
    women.push(users[x].name.toUpperCase())
  }
}
console.log(women);

const women2 = [];
for(let user of users) {
  if(!user) {
    continue;
  }
  if(user.name.endsWith('a')) {
    women2.push(user.name.toUpperCase())
  }
}
console.log(women2);


// --- FUNKCYJNIE:
const women3 = users.map(function(user) {
  if(isNotNull(user) && user.name.endsWith('a')) {
    return user.name.toUpperCase();
  }
}).filter(function (userName) {
  return userName;
})

console.log(women3);

// users.map(({name}) => name)



/*const womenRightWay = users.map(user => user.name)
    .filter(userName => userName.toUpperCase().endsWith('A'))
    .map(userName => userName.toUpperCase())*/

function pluck(field) {
  return function (user) {
    return user[field];
  };
}

function pluckName(user) {
  return user.name;
}

function isAWoman(name) {
  return name.toUpperCase().endsWith('A')
}

function toUpperCase(word) {
  return word.toUpperCase()
}

function isNotNull(user) {
  return !!user;
  // return Boolean(user);
}

const womenRightWay = users.filter(isNotNull).map(pluckName).filter(isAWoman).map(toUpperCase);
const womenRightWay2 = users.filter(isNotNull).map(pluck('name')).filter(isAWoman).map(toUpperCase);

console.log(womenRightWay);

console.log(pluckName({name: 'Michał'}))
console.log(isAWoman('Michał'))
console.log(isAWoman('Basia'))
