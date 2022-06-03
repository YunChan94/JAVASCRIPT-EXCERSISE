'use strict';
//Select element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;
//Start
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
//witch player funtion
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
init();
// Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display picture
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for roll 1
    if (dice !== 1) {
      //add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //check if player's core is >=100
    if (score[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//reset game
btnNew.addEventListener('click', init);
