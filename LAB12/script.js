'use strict';
const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];

//Lab 12.1: Phân loại thú cưng
//tạo một bản sao array của Julia và xóa tuổi mèo khỏi array đã sao chép đó
const dogJuliaCopy = dogJulia.slice(1, 4);
console.log(dogJuliaCopy);

//Tạo một array với cả dữ liệu của Julia (đã sửa) và của Kate
const jk = dogJuliaCopy.concat(dogKate);
console.log(jk);

//in ra console đó là chú chó trưởng thành
function dem(years, index, jk) {
  console.log(`Dog number ${index + 1} is an adult, and is ${years} years old`);
}
jk.forEach(dem);

//12.2: Chuyển đổi tuổi thú cưng
const data = [16, 6, 10, 5, 6, 1, 4];
function calcAverageHumanAge() {
  data.forEach(function (dogAge, index, data) {
    //Tính tuổi của chó theo năm
    let humanAge;
    dogAge <= 2 ? (humanAge = 2 * dogAge) : (humanAge = 16 + dogAge * 4);
    //Loại trừ tất cả những chú chó có humanAge dưới 18
    if (humanAge < 18) data.splice(index, 1);
  });
  console.log(data);
  //Tính humanage trung bình của các chú chó trưởng thành
  const sum = data.reduce((sum, dogAge) => sum + dogAge, 0);
  const average = (sum / data.length).toFixed(2);

  console.log(average);
}
calcAverageHumanAge();
