'use strict'
// 4.1
function describeCountry(country, population, captalCity) {
    const describe = `${country} has ${population} million people and its capital city is ${captalCity}.`;
    return describe;
}
const describeVN = describeCountry('Vietnam', 97, 'Hanoi');
const describeJP = describeCountry('Japan', 100, 'Tokyo');
const describeUSA = describeCountry('America', 300, 'Washington DC');
console.log(describeVN);
console.log(describeJP);
console.log(describeUSA);

//4.2
function percentageOfWorld1(population) {
    const percent = (population / 7900) * 100;
    return percent;
}
let percentVN = percentageOfWorld1(97);
let percentJP = percentageOfWorld1(100);
let percentUSA = percentageOfWorld1(300);
console.log(percentVN);
console.log(percentJP);
console.log(percentUSA);

const percentageOfWorld2 = function (population) {
    const percent = (population / 7900) * 100;
    return percent;
}
console.log(percentageOfWorld2(97));
console.log(percentageOfWorld2(100));
console.log(percentageOfWorld2(300));

//4.3
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(97));
console.log(percentageOfWorld3(100));
console.log(percentageOfWorld3(300));

//4.4
function describePopulation(country, population) {
    const percent = percentageOfWorld1(population);
    const describePop = `${country} has ${population} million people, which is about ${percent}% of the world.`;
    return describePop;
}
console.log(describePopulation('Vietnam', 97));
console.log(describePopulation('Japan', 100));
console.log(describePopulation('America', 300));

//4.5
const populations = [97, 100, 300, 30];
console.log(populations);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

//4.6
const neighbours = ['China', 'Lao', 'Cambodia'];
const pushNeighbour = neighbours.push('Utopia');
const popNeighbour = neighbours.pop('Utopia');
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
const index = neighbours.indexOf('China');
neighbours[index] = 'CHND Trung Hoa';
console.log(neighbours);

//4.7.1
const calAverage = (diem1, diem2, diem3) => (diem1 + diem2 + diem3) / 3;
let averageDol = calAverage(44, 23, 71);
let averageKo = calAverage(65, 54, 49);
function checkWinner(averageDol, averageKo) {
    let winner;
    if (averageDol > averageKo && (averageDol / averageKo) >= 2) {
        winner = `Dolphins win (${averageDol} vs ${averageKo})`;
    } else if (averageKo > averageDol && (averageKo / averageDol) >= 2) {
        winner = `Koalas win (${averageKo} vs ${averageDol})`;
    } else {
        winner = 'No one win';
    }
    return winner;
}
console.log(checkWinner(averageDol, averageKo));

averageDol = calAverage(85, 54, 41);
averageKo = calAverage(23, 34, 27);
console.log(checkWinner(averageDol, averageKo));

//4.7.2
function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}
console.log(calcTip(100));
let bill = [125, 555, 44];
let tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
let total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(tips);
console.log(total);



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    job: 'Teacher',
    location: 'Portulgal',
    friend: ['Micheal', 'Peter', 'Steven'],
}
console.log(`${jonas.firstName} has ${jonas.friend.length} friends, and his best friend is ${jonas.friend[0]}.`)