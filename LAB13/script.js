"use strict";
// Lab 13.1: Tạo Object
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const carBMW = new car("BMW", 120);
const carMes = new car("Mescedes", 95);

car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};
car.prototype.brake = function () {
  console.log(this.speed - 5);
};
carBMW.accelerate();
carBMW.brake();
carMes.accelerate();
carMes.brake();

//Lab 13.2: Sử dụng ES6 Class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    
  }
  get speedUS() {
    console.log(`${this.speed / 1.6} mile/h`);
  }
  set speedUS () {
    this.speed = speed * 1.6;
  };
}
