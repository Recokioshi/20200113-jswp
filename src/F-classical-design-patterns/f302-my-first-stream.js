const { Observable } = require('rxjs');

// Single Source of Truth:
// PROVIDER:
const number$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    // COLD STREAM
    subscriber.complete();
    // subscriber.error(new Error('Wrong!'))
});


// CONSUMER:

// 1 Subcription:
number$.subscribe((num) => {
    console.log(`First ${num}`);
})
// 2 Subcription:
const mySubscription = number$.subscribe((num) => {
    console.log(`Second ${num}`);
})
// mySubscription.unsubscribe();
setTimeout(() => {
    number$.subscribe((num) => {
        console.log(`Third ${num}`);
    })
}, 1000)
