/**

 # Zadanie
 1. Czy dostrzegasz problem?
 2. Jak można mu zaradzić?

 #Cel:
 Pokazanie ze nawet z oddzielnymi modułami musimy pilnować naszej logicznej składni projektu.
 Ponieważ mogą w nim się znaleźć pliki (moduły) ze zbyt dużą ilością odpowiedzialności.
 "Boskie Obiekty"

 */

const myApplicationStore = {
  cartValue: 0,
  options: [
    'WITHDRAW',
    'REFUND',
    'ORDER'
  ],
  users: [],
  bestDeals: {
    thisWeek: '',
    this_month: '',
    THIS_DAY: []
  }
};

const myUser = {
  name: 'Mariusz',
  age: 22,
  job: 'programmer'
};

function callUserAPI() {

}

function callPostAPI() {

}

const messages = {
  getMessages: function() {

  },
  callMessageAPI: function() {

  }
}

messages.callMessageAPI();

function callOtherRestEndpoint() {

}

function calculateValue(x, y) {
  return x + y;
}

const arraySeed = [123123,1221,2223,1111,233394,1239];




