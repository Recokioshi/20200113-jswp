/**
 * Wzorzec: Adapter
 *
 * @_Zasada-działania:
 * Dla konkretnego obiektu / zestawu funkcji - przygotowujemy
 * "Wrapper" w postaci innego obiektu - zestawu funkcji
 * i zaczynamy z nich korzystać zamiast
 * korzystać z dotychczasowej implementacji
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie chcemy uprościć wywołania np. metod
 * danego obiektu - ponieważ jego aktualny interfejs jest
 * np. zbyt skomplikowany do używania
 *
 * */

class Snake {

	rotate(deg){
		// rotate snake with angle
	}
	start(){
		// start movement
	}
	stop(){
		// stop movement
	}
}

class SimpleSnake {
	constructor () {
		this.snake = new Snake();
	}

	turnLeft() {
		this.snake.stop();
		this.snake.rotate(-90);
		this.snake.start();
	}
	turnRight() {
		this.snake.stop();
		this.snake.rotate(90);
		this.snake.start();
	}
}

