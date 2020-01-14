/**
 * Wzorzec: Fabryka / metoda-wytwórcza | Factory
 *
 * @_Zasada-działania:
 * Przygotowujemy funkcje, która przyjmując określone dane wejściowe
 * Dostarcza nam gotowy do użycia - nowy obiekt.
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie musimy upewnić się iż nasz obiekt zostanie utworzony
 * na podstawie określonych warunków wejściowych.
 * Możemy również użyc fabryki tam - gdzie przygotowanie nowego obiektu
 * jest skomplikowane - wymaga dużo kodowania.
 *
 * */

function carFactory (manufacturer, model, isVip = false) {

	const makeCar = {
		manufacturer,
		model,
		type: 'standard',
	};

	if(isVip) {
		makeCar.type = 'limo'
	}

	return makeCar;
}

// 3 samochody w tym jeden zrobiony dla VIPa i pokaż na konsoli
const carAudi = carFactory('Audi', 'A8');
const carAudi2 = carAudi;
const carMercedes = carFactory('Mercedes', 'E202');
console.log(carAudi)
console.log(carMercedes)
console.log(carFactory('Maybach', 'X', true))

console.log(carAudi === carMercedes);
console.log(carAudi === carAudi2);

