'use strict'; // can help with debugging and more. as i can understand use it always! lots of words are reserved for future use. like interface & private (you cannot use the name function !)
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");



function logger() {
    console.log("My name is Jonas");
}
// calling - running - invoking the function
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apple(s) 🍎 & ${oranges} orange(s) 🍊.`;
    return juice;
}

const mixedFruitJuice = fruitProcessor(2, 9);
console.log(mixedFruitJuice);

const appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice); // D.R.Y. - Don't Repeat Yourself - That's why functions are great!

//function decleration      -- you can call them defore declaring them!! That's cool!!
console.log(calcAge1(1994));

function calcAge1(birthYear) {
    return 2024 - birthYear;
}


//function expression
const calcAge2 = function (birthYear) { //Aninymus function
    return 2025 - birthYear;
}

console.log(calcAge2(1994));

const calcAge2 = function (birthYear) { //Aninymus function
    return 2025 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;  //one line  function
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirment(1994, "Anastasios"));
console.log(yearsUntilRetirment(1973, "Afroditi"));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    //console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple 🍎 & ${orangePieces} pieces of orange 🍊.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const yearsUntilRetirment = function (birthYear, firstName) {
    //const age = 2024 - birthYear;
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired! 🙌🙌🙌`)
        return -1;
    }

    return retirement;
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirment(1991, "Anastasios"));
console.log(yearsUntilRetirment(1940, "Katerina"));

//      -- Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins}) vs. the Koalas (${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs. the Dolphins (${avgDolphins})`);
    } else {
        console.log("None has won yet.")
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(100, 50);
*/

