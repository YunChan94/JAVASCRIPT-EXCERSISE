// LAB 2.1 - 2.5
const country = 'VietNam';
let continent = '331.690 km2';
let population = 97;
const isIsland = false;
const language = 'Vietnamese';;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
console.log(population / 2);
population += 1;
console.log(population / 2);
console.log(population > 6);
console.log(population < 33);

let description = country + ' and its ' + population + ' million people speak ' + language;
description = `${country} and its ${population} million people speak ${language}`;
// đặt population = 13
population = 13;
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}
// đặt population = 130
population = 130;
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}
population = 97;
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}


//LAB 2.6
let markMass;
let markHeight;
let johnMass;
let johnHeight;
let markBMI;
let johnBMI;
// Dữ liệu 1
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher then Mark's (${markBMI})!`);
}
// Dữ liệu 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher then Mark's (${markBMI})!`);
}