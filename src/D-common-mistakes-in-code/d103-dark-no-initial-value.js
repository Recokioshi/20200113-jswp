/**

 # Zadanie
 1. Nadaj początkowe wartości i napraw funkcjonalność

 #Cel:
 Zrozumienie, że brak określenia stanu początkowego w momencie kiedy możemy to zrobić,
 powoduje zaciemnienie obrazu i intencji programisty.
 Natomiast przyrównanie wartości do null na wstępie, powoduje konieczność zmiany typu
 i zmusza nas do dodatkowej if'ologii.

*/


let user = {
  name: '',
  lastName: '',
  jobTitle: ''
};
// let counter;
const bookStore = 'My Book Store';

function enterBookStore(store) {
  if(store) {
    console.log('Entering to:', store);
  }
}
enterBookStore(bookStore);

// chcemy dostać się do wartości w user
setTimeout(() => {
  console.log('Initial user name:', user.name);
}, 2000);

// (
// wartość z user przychodzi po HTTP
setTimeout(() => {
  user = {
    name: 'Mike',
    lastName: 'Ross',
    jobTitle: 'SuperLawyer'
  };
  console.log('REST user', user);
}, 3000);