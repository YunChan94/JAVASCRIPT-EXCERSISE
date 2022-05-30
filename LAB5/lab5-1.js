'use strict'

//5.1 Giới thiệu về Object 
const mycountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: 3,
    funcDescribe: function () {
        this.describe = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`;
        return this.describe;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours === 0 ? true : false;
    }
};
//5.2
console.log(`${mycountry.country} has ${mycountry.population} million ${mycountry.language}-speaking people, ${mycountry.neighbours} neighbouring countries and a capital called ${mycountry.capital}.`);
mycountry.population = 8;
mycountry['population'] = 6;

//5.3
console.log(mycountry.funcDescribe());
console.log(mycountry.describe);

//5.4


