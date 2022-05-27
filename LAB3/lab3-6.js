//3.6.1

let diemDol1 = 97;
let diemDol2 = 112;
let diemDol3 = 101;
let diemKo1 = 109;
let diemKo2 = 95;
let diemKo3 = 106;
let averageDol = diemDol1 + diemDol2 + diemDol3;
let averageKo = diemKo1 + diemKo2 + diemKo3;
let minDol = averageDol >= 100;
let minKo = averageKo >= 100;
if (averageDol > averageKo && minDol) {
    console.log("Dolphins is the winnner!");
} else if (averageKo > averageDol && minKo) {
    console.log("Koalas is the winnner!");
} else if (averageDol == averageKo && minDol && minKo) {
    console.log("Both team are the winner!")
} else {
    console.log("No one is the winner");
}

//3.6.2
let bill = 430;
let tip;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


