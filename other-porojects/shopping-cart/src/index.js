import "bootstrap/dist/css/bootstrap.min.css"
// import { makeDivElement } from './dom/dom-crators'
import { makeAlertBox } from "./components/alert-box";
import {makeProductList} from "./components/product-list";
import {productService} from "./services/product-service";

const $root = document.getElementById('root');

// Przygotuj ale w JS
// <div>Shopping list</div>

// <div class="bg-warning">Shopping list</div>
// <div class="bg-danger">Hello List</div>
// <div class="bg-success">Hello 3</div>
$root.appendChild(makeAlertBox('Uwaga !'))
$root.appendChild(makeAlertBox('Niebezpiecznie !', 'warning'))
$root.appendChild(makeAlertBox('Sukces !!!!', 'success'))

const myVegetables = productService.getVegetables();

$root.appendChild(makeProductList('Lista Warzyw', myVegetables));

const myFruits = productService.getFruits();

$root.appendChild(makeProductList('Lista Owoców', myFruits));
/*
$root.appendChild(makeDivElement('Shopping list', 'bg-warning'));
$root.appendChild(makeDivElement('Hello List', 'bg-danger'));
$root.appendChild(makeDivElement('Hello 3'));
*/
