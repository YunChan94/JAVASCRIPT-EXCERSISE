"use strict";
let nhietKe = [17, 21, 23];
function printForecast() {
  for (let i = 0; i < nhietKe.length; i++) {
    if (i === 0) {
      console.log(`...${nhietKe[i]}ºC in ${i + 1} day`);
    } else {
      console.log(`...${nhietKe[i]}ºC in ${i + 1} days`);
    }
  }
}
printForecast();
nhietKe = [12, 5, -5, 0, 4];
printForecast();
