function makeElement(tagName = 'div', domElements = [], className = '') {
    const shoppingList = document.createElement(tagName);
    shoppingList.className = className;
    for(let element of domElements) {
        shoppingList.appendChild(element);
    }
    return shoppingList;
}

// domElements.forEach(element => shoppingList.appendChild(element))

export function txt(text) {
    return document.createTextNode(text);
}

export function div(elements = [], className = '') {
    return makeElement('div', elements, className);
}

export function ul(elements = [], className = 'list-group') {
    return makeElement('ul', elements, className);
}

export function li(elements = [], className = 'list-group-item') {
    return makeElement('li', elements, className);
}

export function h3(text) {
    return makeElement('h3', [txt(text)]);
}

export function makeDivElement(text, className = 'bg-warning') {
    // const myTextElement = document.createTextNode(text);
    return makeElement('div', [ txt(text) ], className);
}



// ?? new HTMLDivElement()
/*
// LEGACY CODE: (najdawniejszy sposób - już zrefaktoryzowany)

export function makeDivElement(text, className = 'bg-warning') {
    const shoppingList = document.createElement('div');
    shoppingList.innerText = text;
    /!*
    if(!className) {
        className = 'bg-warning'
    }
    *!/
    // shoppingList.className = className || 0 || false || 'bg-warning' || 'bg-danger';

    // shoppingList.className = className || 'bg-warning';
    shoppingList.className = className;
    return shoppingList;
}
*/

