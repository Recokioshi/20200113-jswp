
/**
 #Zadanie:
 Pokaż tablicę Array<string> zawierającą jedynie cytaty,
 z wszystkich książek, wszystkich użytkowników

 #Cel:
 Kolejne zadanie na utrwalenie koncepcji programowania funkcyjnego i korzystania z Higher Order Functions w Array API
 Pokazanie możliwości wykorzystania małych funkcji pomocniczych w wykonaniu zadania.
 */

// fake API z danymi:
const api = {
  users: [
    {
      name: 'Michał',
      age: 34,
      books : [
        {name: 'The Two Towers', quote: 'There is some good in this world, and it’s worth fighting for'},
        {name: 'Fight Club', quote: 'I don’t want to die without any scars.'},
        {name: 'C is fun', quote: 'memory leak..., memory leak..., memory leak...'},
      ]
    },
    {
      name: 'Wacława',
      age: 25,
      books : [
        {name: 'A Woman of No Importance', quote: 'Who, being loved, is poor?'},
        {name: 'To Kill a Mockingbird', quote: 'Most people are nice when you finally see them.'},
        {name: 'Autumn Leaves', quote: 'It is better to be hated for what you are than to be loved for what you are not.'},
        {name: 'Cookbook', quote: 'add 2 eggs to the butter and flour'},
      ]
    }
  ]
};

const pluckBooks = (user) => user.books;
//const pluckBooks2 = user => user.books;
const pluckQuote = function(book) {
  return book.quote;
};

function pluck(fieldName) {
  return function (someObject) {
    return someObject[fieldName];
  };
}

// Rozwiązanie:
const quotes = api.users.map(pluckBooks).flat().map(pluckQuote);
const quotes2 = api.users.map(pluck('books')).flat().map(pluck('quote'));

console.log(quotes);
console.log(quotes2);