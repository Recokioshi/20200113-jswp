const numbers = [1, 2, 3, 4];
const numbers2 = [90, 12, 23, 112];

// const result = numbers.concat(numbers2);
const result = [...numbers, ...numbers2];

console.log(result);

console.log([ ...[1,2,3], 4, 5, 6 ])

const personDetails = ['Michał', 'Kowalski'];

function introduce(name, lastName) {
    console.log('Hello I am', name, lastName);
}

// introduce(personDetails[0], personDetails[1])
introduce(...personDetails)


// Można również z obiektami
const user = {name: 'Michał' };
const adminUser = { isAdmin: true };

const superUser = {
    ...user,
    ...adminUser
};
// superUser = {name: 'Michał', isAdmin: true}

console.log(superUser)

// REST OPERATOR:
function hello(...friends) {
    for(let friend of friends){
        console.log('Hello', friend);
    }
}

hello('Michał', 'Agata', 'Jacek', 'Kacper')