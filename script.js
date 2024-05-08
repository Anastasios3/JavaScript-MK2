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


const friends = ['Anastasios', 'Georgia', 'Antonis'];
console.log(friends);

const years = new Array(1, 2, 3, 4, 5);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'George';
console.log(friends);

const anastasios1 = ['Anastasios', 'Tatarakis', "Larentzos", 2, 9, 1994];
console.log(anastasios1);
console.log(anastasios1.length);

//exercise

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const year = [1990, 1991, 1992, 1993, 1994];

console.log(calcAge(year));


const friends = ['Anastasios', 'Georgia', 'Antonis'];
const newLength = friends.push('George'); //  push ==> it is basically a function that it can push arguments into functions.
console.log(friends);
console.log(newLength);

friends.unshift('John'); // puts it in the front
console.log(friends);

friends.pop(); // removes the last elemnt of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first only
console.log(friends);

console.log(friends.indexOf('Anastasios')); // tells us where that is ...
console.log(friends.indexOf('George')); // you get a -1 if it doesnt exist

console.log(friends.includes('Anastasios')); // strict true or false equality ... does it exist? yer / no
console.log(friends.includes('George'));

if (friends.includes("Georgia")) {
    console.log("You have a friend called Georgia / or a girlfriend 👧👧");
}


// -------  Coding Challenge #2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;  // different way of saying the same thing

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(totals);


const anastasiosArray = [
    "Anastasios",
    "Tatarakis",
    "Larentzos",
    2024 - 1994,
    ["Georgia", "George", "Antonis", "Stavros"]
];

const anastasios = {
    firstName: "Tatarakis",
    lastName: "Larentzos",
    age: 2024 - 1994,
    occupation: "Front-End Developer",
    friends: ["Georgia", "George", "Antonis", "Stavros"]
};


const anastasios = {
    firstName: "Tatarakis",
    lastName: "Larentzos",
    age: 2024 - 1994,
    occupation: "Front-End Developer",
    friends: ["Georgia", "George", "Antonis", "Stavros"]
};

console.log(anastasios);

console.log(anastasios.lastName);
console.log(anastasios['lastName']);

const nameKey = "Name";
console.log(anastasios["first" + nameKey]);
console.log(anastasios["last" + nameKey]);

const intrestedIN = prompt("What do you want to know about me? Choose between firstName, latName, age, occupation & friends!")

if (anastasios[intrestedIN]) {
    console.log(anastasios[intrestedIN]);
} else {
    console.log("Wrong request!")
}

anastasios.location = "Greece";
anastasios['GitHub'] = "Anastasios3";
console.log(anastasios);

console.log(`${anastasios.firstName} has ${anastasios.friends.length} friends, and his best friend is called ${anastasios.friends[0]}.`);
*/
/*
const anastasios3 = {
    firstName: "Anastasios",
    middleName: "Tatarakis",
    lastName: "Larentzos",
    birthYear: 1994,
    occupation: "Front-End Developer",
    friends: ["Georgia", "George", "Antonis", "Stavros"],
    hasDriversLicense: false,

        calcAge: function (birthYear) {
            return 2024 - birthYear;
        }

    calcAge: function () {
        //console.log(this);
        return 2024 - this.birthYear;   // this helps you call an information from inside the array in order to make a funktion work
    }
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return 2024 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${anastasios3.occupation}, and has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};
*/
/*
const calcAge = function (birthYear) {
    return 2024 - birthYear;
};
*//*
console.log(anastasios3.calcAge());
console.log(anastasios3.calcAge());
console.log(anastasios3.calcAge());


//console.log(anastasios3["calcAge"](1994)); // that is how you get the function from inside of the first array
/*
// My Method
function describePerson(person) {
    const licenseStatement = person.hasDriversLicense ? "and he has a driver's license" : "and he does not have a driver's license";
    console.log(`${anastasios3.firstName} is a ${anastasios3.age}-year old ${anastasios3.occupation}, ${licenseStatement}.`);
}

console.log(describePerson(anastasios3));
console.log(anastasios3.getSummary())
*/
/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi} is higher than ${mark.fullName}'s BMI (${mark.bmi}) )`)
} else {
    console.log("Unbelievable! They have the exact same BMI 😲😲😲")
}
*/

//for (let rep = 1; rep < 1100; /* OR rep <= 10 */rep++) {
//    console.log(`Lifting weights repetition ${rep} 💪💪💪`)
//}
/*
const anastasiosArray = [
    "Anastasios",
    "Tatarakis",
    "Larentzos",
    2024 - 1994,
    ["Georgia", "George", "Antonis", "Stavros"],
    true
];

const types = [];

for (let i = 0; i < anastasiosArray.length; i++) { //------------------------------------>>>>>>>>>>> length!!
    // Reading from array
    console.log(anastasiosArray[i], ", ", typeof anastasiosArray[i])

    //types[i] = typeof anastasiosArray[i];
    types.push(typeof anastasiosArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < anastasiosArray.length; i++) {
    if (typeof anastasiosArray[i] !== "string") continue;
    console.log(anastasiosArray[i], typeof anastasiosArray[i]);
}

console.log(anastasiosArray);
console.log(ages);
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage([totals]));
console.log(calcAverage([tips]));

