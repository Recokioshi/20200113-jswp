/**

 # Zadanie
 Pozamieniaj na właściwe porównania razem ze sprawdzeniem typów

 #Cel:
 Zrozumienie, że z użyciem podwójnego "==" porównania w JavaScript, wiąże się problem,
 "Niejawnego rzutowania typów".
 Zamiast podwójnie powinniśmy wszędzie stosować potrójny operator porównania.

 Zobacz: https://dorey.github.io/JavaScript-Equality-Table/

 */

const one = '1';
const otherOne = 1;
const on = true;
const off = false;


if(one === on) {
  console.log('Hello one is on !');
}

if([] === off) {
  console.log('hello');
}

if(otherOne === one) {
  console.log('Hello World');
}

if(otherOne === 1) {
  console.log('Hello World');
}

if(0) {
  console.log('Hello')
}

if(null) {
  console.log('Hello')
}

if(undefined) {
  console.log('Hello')
}