//3.1
"9" - "5"; // 4

"19" - "13" + "17"; //617

"19" - "13" + 17; //23

"123" < 57; //false

5 + 6 + "4" + 9 - 4 - 2; //1143

//3.2
// let numNeighbours = prompt(
//   "How many neighbor countries does your country have?"
// );
let numNeighbours = 1;
console.log(typeof numNeighbours);
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
// == đổi numNeighbors từ string thành number rồi mới so sánh --> True
// === so sánh tuyệt đối giá trị của numNeighbours -->False
// Khi dùng === cần chuyển đổi kiểu vì datatype khi nhập là string còn giá trị 1 là number --> không thể so sánh được nên cần chuyển datatype từ string --> number

//3.3
let language = prompt("Language?");
let population = prompt("Polulation?");
let isIsland = prompt("Is this an Island country? (yes/no)");
if ((language = "english" && population < 50 && isIsland === "no")) {
  console.log("You should live in Portugal :)");
} else {
  console.log("Portugal does not meet your criteria :(");
}

//3.4
let ngonNgu = "spanish";
switch (ngonNgu) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

//3.5
console.log(
  population > 33
    ? "Portugal's population is above average"
    : "Portugal's population is below average"
);
