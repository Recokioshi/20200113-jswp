/**
  Nowy lukier składniowy i rozszerzenie API dla JavaScript

  #Cel:
  Za równo programowanie funkcyjne jak i reaktywne, teraz - korzystają z wielu uproszczeń,
  udogodnień i nowych funkcjonalności JavaScript - warto na nie spojrzeć i zacząć przyswajać.
*/

// Sample #1 | Modułowość w JavaScript dawniej
(function oldFashionModularity(){
  console.log('#1  ---- oldFashionModularity() :');

  var outerScope = 'Hello';

  (function immediatelyInvokedFunctionExpression() {

    var innerScope = ' World?';
    console.log('Access to outer module.', outerScope + innerScope);
  }());

  // #! Usuń komentarz poniżej:
  // console.log(innerScope);

  // A znacie / pamiętacie jQuery?
  const fakeJQuery = { fn: {} };
  (function ( $ ) {

    $.fn.whoIsYourCreator = function() {
       const author = {
         name: 'John Resig',
         birth: 'May 8, 1984',
         tweet: '@jeresig'
       };
       return author.name;
    };
  }( fakeJQuery ));
  console.log('my fake jQuery', fakeJQuery);


  // Teraz podobny efekt (Modularyzację) osiągamy oddzielnymi plikami .js
}());

// Sample #2 | Nowe sposoby deklarowania zmiennych: let, const
(function lexicalLetAndConst(){
  console.log('#2 ---- lexicalLetAndConst() :');
    // #! porównaj z przykładem: a1-samples/var-problem.standalone.js

    let x = 1;
    x++;
    console.log('My ex is:', x);

    const y = 100;
    console.log('Hello I\'m', y, 'I cannot be reassigned');
}());

// Sample #3 | Funkcje Arrow
(function arrowFunctions(){
  console.log('#3 ---- arrowFunctions() :');
    // Skrócony zapis:
    const myFunc = (x) => {
      return x;
    };
    myFunc(20) //?

    // Jeszcze bardziej skrócony zapis:
    const myFunc2 = (x) => x;
    myFunc2(10) //?

    const myFuncWithObj = (name) => ({name: name})

    myFuncWithObj('michal') //?
    // Tak też zadziała dla jednego argumentu:
    const oneArgFunc = name => `hello ${name}`;
    console.log(oneArgFunc('Helena'));


    const name = 'Michał';
    ////....

    //.....
    const user = {
      name
    }
    console.log(user);
    // Niemienność kontekstu:
    // #! porównaj z przykładem: a1-samples/context-problem.standalone.js

}());

// Sample #4 | Domyślne wartości dla argumentów funkcji
(function defaultValues(){
  console.log('#4 ---- defaultValues() :');

  function callMyGrandpa(name, phoneNo = '111-223-222', device = 'Motorola') {
     console.log('Grab', device, 'dial', phoneNo, 'call', name)
  }

  callMyGrandpa('Józef');
  callMyGrandpa('Staszek', '0000-1202917');
  callMyGrandpa('Zbyszek', '+48 601-284-212', 'Xiaomi');

  // Żegnaj ifologio stosowana?
}());

// Sample #5 | Składniowy lukier dla klas
(function classes(){
  console.log('#5 ---- classes() :');

  class Grandma {
    constructor ( name ) {
      this.name = name;
      this.type = 'Grandma';
    }

    hello() {
      console.log(this.type, this.name, 'says Hello!');
    }
  }

  const myGrandma = new Grandma('Uruszla');
  myGrandma.hello();

  console.log(typeof myGrandma);
  // #! Usuń komentarz poniżej, zgadnij co pokaże się na konsoli:
  // console.log(typeof Grandma);
}());

// Sample #6 | Rozbrajanie obiektów i tablic
(function destructuring(){
  console.log('#6 ---- destructuring() :');

  const inDoorAPI = {
    fridge: {
      manufacturer: 'Samsung',
      model: 'Cooler 291263',
      doors: 3,
      deFrost: true,
      content: ['eggs', 'ham', 'cheese', 'orange juice']
    }
  };

  //
  //
  //
  // kilkanaście lini kodziku niżej (lub pop prostu zakładając że inDoorAPI jest z innego modułu
  // .....

  // pokaż mi producenta lodówki
  const { manufacturer } = inDoorAPI.fridge;
  console.log('manufacturer:', manufacturer);

  // pokaż mi ilość drzwi w lodówce:
  const { fridge: {doors} } = inDoorAPI;
  console.log('doors:',doors);

  // wyjmij ser z lodówki:
  const { content } = inDoorAPI.fridge;
  const [,,yourCheese] = content;
  console.log('Here you are, it is your:', yourCheese);

  // #! Co zrobić jeśli mamy kolizję nazw z innym API?

}());

// Sample #7 | pomocnicy wrzucania i wyciągania argumentów oraz manipulacji tablicami
(function spreadAndRestOperators(){
  console.log('#7 ---- spreadAndRestOperators() :');

  const fruits = ['apple', 'banana', 'pear'];
  const vegetables = ['carrot', 'onion'];

  // połącz owoce i warzywa:
  const combineWithSpread = [...fruits, ...vegetables];
  console.log(combineWithSpread);

  let no = 1;
  function consoleCounter(msg, ...rest) {
    // najpierw rest potem spread
    console.log(`no.${no++}`, msg, ...rest);
  }

  consoleCounter('First message', 'Hello World');
  consoleCounter('Second message');
  consoleCounter('Third message', 'Greetings !');
}());

// Sample #8 | Interpolacja tekstu i wartości "string-multiline"
(function templateString(){
  console.log('#8 ---- templateString() :');

  const interpolate = 'official suit';
  console.log(`
  
  My
  multi-lined 
  
  😁   !
  
  console.log is wearing an ${interpolate} !
  
  `)
}());

// Sample #9 | Generatory
(function generators(){
  console.log('#9 ---- generators() :');

  function* giveMeNumber() {
    for(let x = 0; x <= 10; x++) {
      yield x;
    }
  }

  const iterator = giveMeNumber();
  console.log('Generuje...', iterator.next().value);
  console.log('Generuje...', iterator.next().value);
  console.log('Generuje...', iterator.next().value);

}());

// Sample #10 | a ES7 i ES8 ?
((gimme = 'More !') => {
  // Ciąg dalszy w innym pliku....
})();
