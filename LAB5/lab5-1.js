"use strict";

//5.1 Giới thiệu về Object
const mycountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: 3,
  funcDescribe: function () {
    this.describe = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`;
    return this.describe;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours === 0 ? true : false;
  },
};
//5.2
console.log(
  `${mycountry.country} has ${mycountry.population} million ${mycountry.language}-speaking people, ${mycountry.neighbours} neighbouring countries and a capital called ${mycountry.capital}.`
);
mycountry.population = 8;
mycountry["population"] = 6;

//5.3
console.log(mycountry.funcDescribe());
console.log(mycountry.describe);

//5.4
for (let i = 0; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//5.5
const populations = [97, 100, 300, 30];
const percentages2 = [];
function percentageOfWorld1(population) {
  const percent = (population / 7900) * 100;
  return percent;
}
for (let i = 0; i < populations.length; i++) {
  percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log(percentages2);
// Dùng For loop làm gọn code hơn và k phải lặp lại nhiều lần

//5.6 Vòng lặp ngược và Vòng lặp trong vòng lặp
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}

//5.7 Vòng lặp While
const percentages3 = [];
let a = 0;
while (a < populations.length) {
  percentages3[a] = percentageOfWorld1(populations[a]);
  a++;
}
console.log(percentages3);

//5.8

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
console.log(mark.calcBMI());
console.log(john.calcBMI());
const x =
  mark.BMI > john.BMI
    ? `Mark's BMI (${mark.BMI}) is higher than Mark's (${john.BMI})!`
    : `John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!"`;
console.log(x);

//5.8 Cải thiện Tip calculator
const bill = [22, 295, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
}
for (let i = 0; i < bill.length; i++) {
  tips[i] = calcTip(bill[i]);
  totals[i] = tips[i] + bill[i];
}
let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum = sum + totals[i];
}
const calcAverage = (sum) => sum / totals.length;
console.log(calcAverage(sum));
