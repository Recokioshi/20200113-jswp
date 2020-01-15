const { Subject, BehaviorSubject } = require('rxjs');

// Single Source of Truth:
// PROVIDER:
// const number$ = new Subject();
const number$ = new BehaviorSubject(0);
// HOT STREAM;

// CONSUMER:

// 1 Subcription:
number$.subscribe((num) => {
    console.log(`First ${num}`);
});
// 2 Subcription:
const mySubscription = number$.subscribe((num) => {
    console.log(`Second ${num}`);
});
// mySubscription.unsubscribe();
setTimeout(() => {
    number$.subscribe((num) => {
        console.log(`Third ${num}`);
    })
}, 1000);

///
number$.next(1);
number$.next(2);
number$.next(3);

