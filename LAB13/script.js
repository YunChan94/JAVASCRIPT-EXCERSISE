"use strict";
// Lab 13.1: Tạo Object
const Car = function (made, speed) {
  this.made = made;
  this.speed = speed;
};
const carBMW = new Car("BMW", 120);
const carMes = new Car("Mescedes", 95);
console.log(carBMW, carMes);
Car.prototype.accelerate = function (speedUp) {
  return this.speed + speedUp;
};
Car.prototype.brake = function (speedDown) {
  return this.speed - speedDown;
};

console.log(carBMW.accelerate(10));
console.log(carBMW.brake(5));
console.log(carMes.accelerate(10));
console.log(carMes.brake(5));

// Lab 13.3: Tính kế thừa
const EV = function (made, speed, charge) {
  Car.call(this, made, speed);
  this.charge = charge;
};
// Linking prototypes (Phải link trc thì mới tạo method cho EV đc)
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};
// EV.prototype.constructor = EV;
const car1 = new EV("Tesla", 120, 23);
console.log(
  `${car1.made} going at ${car1.accelerate(
    20
  )} km/h, with a charge of ${car1.chargeBattery(22)} `
);

const electricCar = new EV(
  "Electric Car",
  car1.brake(5),
  car1.chargeBattery(90)
);
console.log(electricCar);

//Lab 13.2: Sử dụng ES6 Class
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   set speedUS(speed) {
//     this.speedUS = speed * 1.6;
//   }
//   get speedUS() {
//     return this.speedUS;
//   }
//   accelerate() {
//     console.log(this.speed + 10);
//   }
//   brake() {
//     console.log(this.speed - 5);
//   }
// }
// const bmw = new CarCl("BMW", 120);
// const mescedes = new CarCl("Mescedes", 95);

// Test getter - setter
