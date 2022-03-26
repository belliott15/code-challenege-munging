/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];
*/
/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    const dogs = arr.filter((pet => pet.type === 'dog'));
    return dogs;
}

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const names = arr.map((pet => pet.name));
    return names;
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const dogNames = arr
        .filter((pet => pet.type === 'dog'))
        .map((pet => pet.name));
    return dogNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const types = arr.map((pet => pet.type));
    const reversedTypes = types.reverse();
    return reversedTypes;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishArray = arr.map((pet => { 
        return { nombre: pet.name, tipo: pet.type };
    }));
    return spanishArray;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungryPets = arr.map((pet => {
        return { name: pet.name, isHungry: true, type: pet.type };
    }));
    return hungryPets;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const allCaps = arr.map((pet => {
        return { name: pet.name.toUpperCase(), type: pet.type };
    }));
    return allCaps;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const string = arr.map((pet => pet.name + pet.type));
    return string;
}

/*
findByName('jumpy', petsArray)

(hint: how do you get the first item out of an array?)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    const find = arr.filter((pet => { return pet.name === name;}));
    return find[0];
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const array = arr.map((pet => [['name', pet.name], ['type', pet.type]])
    );
    return array;
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    const cars = arr.filter((car => car.type === 'car'));
    return cars;
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    const cars = arr.filter((car => car.type === 'car' && car.make === 'chevy'));
    return cars;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    const modelString = arr
        .reduce((string, item) => {
            return string + item.model;
        }, '');
    return modelString;
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    const ages = arr.reduce((sum, car) => {
        return sum += car.age;
    }, 0);
    return ages;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return {};
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
