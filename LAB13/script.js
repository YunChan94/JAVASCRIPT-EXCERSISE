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

// Lab 13.2: Sử dụng ES6 Class

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  // Getter Đổi từ speed = km/h -> mile/h
  get speedUS() {
    return this.speed / 1.6;
  }
  // Setter đổi từ speed = mile/h -> km/h
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }
}
const bmw = new CarCl("BMW", 120);
const mescedes = new CarCl("Mescedes", 95);

// Test getter - setter
bmw.accelerate();
bmw.brake();
mescedes.accelerate();
mescedes.brake();
console.log(bmw);
console.log(bmw.speedUS); // Getter: dùng như một property của obj để gọi giá trị
bmw.speedUS = 30; // mile/h - Setter: gán giá trị cho property đó
console.log(bmw);

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

// Lab 13.4: Tính kế thừa sử dụng ES6
class EVCal extends CarCl {
  constructor(made, speed, charge) {
    // Lúc nào cũng phải xảy ra trc
    super(made, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    return (this.charge = chargeTo);
  }
}
const rivian = new EVCal("Rivian", 120, 23);
console.log(rivian);
rivian.accelerate();
rivian.chargeBattery(90);
console.log(rivian);
