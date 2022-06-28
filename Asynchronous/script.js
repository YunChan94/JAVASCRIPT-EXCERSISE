'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////// AJAX CALL ////////////////////
const renderCountry = function (data, classname = '') {
  const html = `
    <article class="country ${classname}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)} millions people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderErr = function (mess) {
  countriesContainer.insertAdjacentText('beforeend', mess);
  countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = 'Somerthing went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
// const getCountryDataAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render country
//     renderCountry(data);
//     console.log(data);
//     // Get neighbor data
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       // Render country
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// // getCountryDataAndNeighbor('portugal');
// getCountryDataAndNeighbor('vietnam');

/////////////////// PROMISE ////////////////////
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       if (!neighbour) throw new Error('No neighbour found!');
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => renderErr(`Something went wrong!💥${err.message}.Try again!`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win 💰');
    } else {
      reject(new Error('You lost your money 😭'));
    }
  }, 2000);
});

// Promisifying setTimeout
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds);
  });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country) {
  try {
    // 🔴Geo location
    const pos = await getPosition();
    console.log(pos);
    const { latitude: lat, longitude: lng } = pos.coords;
    console.log(lat, lng);

    // 🔴Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`); // reponse
    if (!resGeo) throw new Error(`Can't get location data!💥`);
    console.log(resGeo);
    const dataGeo = await resGeo.json(); // data from reponse body
    console.log(dataGeo);

    // 🔴Fetch country data
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res) throw new Error(`Country can't found 💥`);
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}`);
    renderErr(`Something went wrong!💥${err.message}.`);
  }
};
whereAmI();
