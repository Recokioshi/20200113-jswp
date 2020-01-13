/**

 # Zadanie
 1. Zobacz zastosowanie ES6+

 #Cel:
 Poznawanie nowych metod w dynamicznie rozwijającym się środowisku języka JavaScript.
 Użycie ich na własną korzyść.
 Pokazanie wykorzystania closures w praktyce (osiągniecie prywatności w obiekcie)
 Pokazanie zastosowania w praktyce elementów ES-NEXT.

 */

// Domyślne wartości dla argumentów funkcji
// http://es6-features.org/#DefaultParameterValues
function makeLawyer( fullName = '', salary = 3000) {

  // Destrukturyzacja tablicy
  // http://es6-features.org/#ArrayMatching
  // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
  const [firstName, lastName = ''] = fullName.split(' ');

  // Zapis skrótowy pól obiektu
  // nazwa pola w nowym obiekcie jest taka sama jak nazwa zmiennej
  // PropertyShorthand http://es6-features.org/#PropertyShorthand
  return {
    firstName,
    lastName,
    // http://es6-features.org/#ExpressionBodies
    getSalary: () => `${firstName} earns $${salary}`
  }
}

const lawyerHarvey = makeLawyer('Harvey Specter', 6000);
const lawyerMike = makeLawyer('Michael Ross');
const lawyerRachel = makeLawyer('Rachel Zane', 5000);
const lawyerDonna = makeLawyer('Donna');

console.log(lawyerRachel.getSalary());
console.log(lawyerMike.getSalary());
console.log(lawyerHarvey.getSalary());
console.log(lawyerDonna.getSalary());

console.log('Value when no lastName:', lawyerDonna.lastName, '|');