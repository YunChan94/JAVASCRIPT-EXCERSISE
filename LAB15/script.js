'use strict';
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    // Thêm image vào DOM
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    // Error event khi xảy ra lỗi
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
// Dừng thực thi code
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// let currentImg;
// createImage('img/img-1.jpg') // Trả về promise
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg'); // Trả về promise
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// Lab 15.2: Dùng Async/await
const loadNPause = async function () {
  try {
    // Xử lý img1
    let img = await createImage('img/img-1.jpg');

    await wait(2); //🔴 await
    img.style.display = 'none';
    console.log('Image 1 loaded');
    // Xử lý img1
    img = await createImage('img/img-2.jpg');
    // currentImg = img2;
    await wait(2); //🔴 await
    img.style.display = 'none';
    console.log('Image 2 loaded');
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();
// const imgArr =['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg'];
const loadAll = async function (imgArr) {
  try {
    // Tải ảnh với hàm createImage
    const imgs = imgArr.map(async img => await createImage(img)); // await trả về promise
    console.log(imgs);

    const imgsEl = await Promise.all(imgs); // Lấy image element ra từ imgs array
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
