"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////// FUNCTION ////////////////////
// Render country on display
const renderCountry = function (data, classname = "") {
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
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  // fetch promise
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((reponse) => {
      // promise handler -> return new promise
      if (!reponse.ok)
        throw new Error(`Have error with geocode! ${reponse.status}`); // reject error (Change error message)
      console.log(reponse);
      return reponse.json(); // get response object from web API
    })
    .then((data) => {
      // Get data  object from the reponse body
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`); // need return ✨
    })
    .then((reponse) => {
      if (!reponse.ok) throw new Error(`Country not found ${reponse.status}`);
      return reponse.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}😝`)); // reject error (Change error Tittle)
};
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// https://geocode.xyz/${lat},${lng}?geoit=xml&auth=379131035260787798174x109644

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then((pos) => console.log(pos)); // promise . then () => promise handler

const whereAmI2 = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      // fetch promise
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((reponse) => {
      // promise handler -> return new promise
      if (!reponse.ok)
        throw new Error(`Have error with geocode! ${reponse.status}`); // reject error (Change error message)
      console.log(reponse);
      return reponse.json(); // get response object from web API
    })
    .then((data) => {
      // Get data  object from the reponse body
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`); // need return ✨
    })
    .then((reponse) => {
      if (!reponse.ok) throw new Error(`Country not found ${reponse.status}`);
      return reponse.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}😝`)); // reject error (Change error Tittle)
};
btn.addEventListener("click", whereAmI2);
