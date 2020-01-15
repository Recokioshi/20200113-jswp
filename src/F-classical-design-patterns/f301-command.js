/**
 * Wzorzec: Command | Polecenie
 *
 * @_Zasada-działania:
 * Utworzenie metody która otrzymując parametry wejściowe
 * jest w stanie dynamicznie wywołać akcje w oparciu
 * o nasz interfejs
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie chcemy mieć możliwość odtworzenia
 * poleceń wydawanych danemu API np. z twardego zapisu
 *
 * */

const calculator = {
	add(num1,num2) {
		return num1 + num2;
	},
	subtract( num1, num2) {
		return num1 - num2;
	},
	multiply(num1, num2) {
		return num1 * num2;
	},
	divide(num1, num2) {
		return num1/num2;
	},
	calc(command)  {
		return this[command.type](command.num1, command.num2);
	}
};

class Command {
	constructor (type, num1, num2) {
		this.type = type;
		this.num1 = num1;
		this.num2 = num2;
	}
}

const jsonCommand = {"type": "divide", "num1": 100, "num2": 10};

console.log(calculator.calc(new Command('divide', 10, 2)))
console.log(calculator.calc(new Command('subtract', 10, 2)))

