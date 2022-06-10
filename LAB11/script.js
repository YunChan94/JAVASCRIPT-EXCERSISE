'use strict';
const answerbtn = document.querySelector('.poll');
const resultsbtn = document.querySelector('.results');
const poll = {
  question: 'What is your favourite programming language? ',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  numberOfVotes: new Array(4).fill(0),
};
// const pushArr = poll.numberOfVotes;
function registerNewAnswer() {
  //Hiển thị cửa sổ prompt
  const input = Number(
    prompt(`What is your favourite programming language? 
  0: JavaScript
  1: Python
  2: Rust
  3: C++
  (Write option number)`)
  );
  // Kiểm tra kết quả nhập hợp lệ hay không?
  if (isNaN(input) || input < 0 || input > 3) {
    alert('Câu trả lời không hợp lệ');
  } else {
    // Cập nhật thuộc tính cho numberOfVotes
    let i = poll.numberOfVotes[input];
    poll.numberOfVotes.splice(input, 1, i + 1);
  }
}

answerbtn.addEventListener('click', registerNewAnswer);
resultsbtn.addEventListener('click', displayResults);
const testdata = [5, 2, 3];
//Hiển thị kết quả cuộc khảo sát
function displayResults() {
  const type = prompt('What type of results u want to see? (array or string)');
  //type có giá trị là  'array', bạn cần hiển thị array kết quả
  if (type === 'array') {
    console.log(testdata);
  } else if (type === 'string') {
    // type có giá trị là 'string', hãy hiển thị kết quả dưới dạng chuỗi
    console.log(`Poll results are ${testdata}`);
  }
}
