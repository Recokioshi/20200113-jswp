/**

 # Zadanie
 1. Zaproponuj rozwiązanie problemów i popraw sposób wykorzystania zmiennych

 #Cel:
 Możliwość dynamicznej zmiany typu zawartości zmiennych nigdy nie jest dobrym pomysłem.
 Zaciemnia intencje programisty, logikę kodu i będzie ciężkie do debugowania.

 */

const ZERO = 0;
console.log(ZERO);

for(let x = 1; x<=10; x++){
  console.count('Hello');
}

// Problem: Poza tym że zmienna wykorzystana jest do kilku rzeczy,
// zmienia ona swój typ z number na string 
const HELLO_WORLD = 'Hello World';
console.log(HELLO_WORLD);

// Problem: Tablica ma pomieszane typy danych (string i number)
const arrayWithNumber = [1, 2, 3, 5, 10];
const arrayWithStrings = ['hello','P', 'G'];

console.log(arrayWithNumber);
console.log(arrayWithStrings);
