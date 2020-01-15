/**
 * Architektura: Flux, 
 * implementacja: Redux
 *
 * Jednokierunkowy przepływ danych.
 * 
 * Zaimplementowany wzorzec CQRS:
 * Zainteresowani zmianą danych - muszą wywołać akcję dla danego reducera
 * 
 * Zainteresowania odczytem muszą zasubskrybować się do stora
 *
 * */

const {createStore} = require('redux');

const increment = {type: 'INCREMENT_COUNTER'};
const decrement = {type: 'DECREMENT_COUNTER'};
const decrementBy10 = {type: 'DECREMENT_BY_10'};
const incrementBy = (value) => ({type: 'INCREMENT_BY', value});

// Zrób akcje, która zwiększy o 10 counter i zaimplementuj
// * Zaimplementuj akcje która zwiększy o dowolną zadaną wartość counter

function counterReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        case 'DECREMENT_BY_10':
            return state - 10;
        case 'INCREMENT_BY':
            return state - action.value;
        default:
            return state;
    }
}

//const initialState = counterReducer(undefined, {type: 'SZLACZKI'});
//const nextState = counterReducer(initialState, {type: 'INCREMENT_COUNTER'})
//initialState //?
//nextState //?

const store = createStore(counterReducer);

store.getState() //?

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment)
store.dispatch(increment)
store.dispatch(increment)
store.dispatch(increment)
store.dispatch(increment)
store.dispatch(decrement)
store.dispatch(decrementBy10)

store.dispatch(incrementBy(100))
store.dispatch(incrementBy(1))
store.dispatch(incrementBy(1287))
