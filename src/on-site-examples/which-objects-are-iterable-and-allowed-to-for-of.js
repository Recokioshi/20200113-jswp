for(let x of [1, 2, 3, 4]) {
    console.log(x);
}

for(let x of new Set([1,2,3,3,3,3,3,3,3])) {
    console.log(x);
}

for(let x of new Map([[3, 2]])) {
    console.log(x);
}

for(let x of 'Hello World') {
    console.log(x);
}
