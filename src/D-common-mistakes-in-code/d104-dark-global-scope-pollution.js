/**

 # Zadanie:
 1. Sprawdź obiekt global w Node
 2. Sprawdź obiekt window np. w Chrome (F12 - narzędzia developerskie, konsola)

 #Cel:
 Zrozumienie iż pomimo stosowania modułów i wszystkich związanych z tym dobroci,
 Nadal musimy mieć świadomość żeby nie dodawać wartości do obiektów
 w Browser:
  window
 oraz w Node:
  global

 */

// Symulacja przeglądarki (obiekt MOCK dla window)
const window = {};

// przestrzeń globalna przeglądarki:
// window.$ = 'fakeJQuery';

// global.hereYouAre = 'global help!';
// console.log(global.hereYouAre);
