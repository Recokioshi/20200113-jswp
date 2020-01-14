/**
 * Wzorzec: Singleton
 *
 * @_Zasada-działania:
 * Wywołanie konstruktora ze słowem "new" dla obiektu
 * Zawsze bedzie zwracało nam tę samą instancję obiektu
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie chcemy mieć pewność iż pracujemy na tym samym obiekcie
 * Możemy tak np. utrzymywać jakiś "stan" aplikacji
 * Należy jednak uważać ponieważ nadużywany Singleton - może stać się
 * antywzorcem (istnieją lepsze rozwiązania)
 *
 * @_Ciekawostki-JavaScript:
 * Moduły działają na zasadzie singletonu, jeśli je require'ujemy
 * To możemy w ich wnętrzu utrzymywać jakiś stan aplikacji
 * Przez co każdy inny pod-moduł importujący ten ze stanem - ma
 * dostęp do tego co w nim zapisaliśmy
 *
 * */

class IceTruckService {

	constructor (name) {
		if(IceTruckService.instance) {
			return IceTruckService.instance;
		}
		this.name = name;
		IceTruckService.instance = this;
	}

	getName() {
		return this.name;
	}

	static getInstance() {
		return IceTruckService.instance;
	}
}

const iceTruck1 = new IceTruckService('Lodziarnia');
const iceTruck2 = new IceTruckService('Lodziarnia na kółkach');

// Lepsze podejscie:
const iceTruck3 = IceTruckService.getInstance();

console.log(iceTruck1 === iceTruck2)
console.log(iceTruck1.getName())
console.log(iceTruck2.getName())