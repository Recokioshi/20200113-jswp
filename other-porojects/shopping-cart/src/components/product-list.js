import {div, txt, ul, li, h3} from "../dom/dom-crators";

export function makeProductList(listTitle, products = []) {

    const liElements = products.map((product) => li([txt(product)]));

    return div([
        h3(listTitle),
        ul(liElements)
    ])

    /*return ul([
        li([txt('Pomidor')]),
        li([txt('Truskawki')]),
    ]);*/
}
/*
<div>
    <h3>Lista Produktów</h3>
    <ul class="list-group">
        <li class="list-group-item">Pomidor</li>
        <li class="list-group-item">Truskawki</li>
    </ul>
</div>

*/
