[0, 1, 2, 3].map(function (num) {
    return 'Chapter ' + num;
}); //?
// ten sam efekt ale skrócony zapis:
[0, 1, 2, 3].map(num => 'Chapter ' + num); //?

// ['Chapter 0', 'Chapter 1'....]

[1, 2, 3, 4, 2, 5, 2].filter((num) => num === 2); //?

// 2, 1, 2, 1, 2, 1

[2, 2, 2, 3].reduce((arr, num) => {
    console.log(num)
    arr.push(num, 1);
    return arr;
}, []); //?

[2, 2, 2, 3].reduce((a, b) => a + b) //?
