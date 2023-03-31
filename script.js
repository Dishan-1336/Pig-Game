"use strict";

const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
let playersTotalScores = [0, 0];
let playersCurrentScores = [0, 0];
let playerState = 0;

const loadCurrentScore = () => {
  document.querySelector(`#current--${playerState}`).textContent =
    playersCurrentScores[playerState];
};

const loadTotalScore = () => {
  playersTotalScores[playerState] += playersCurrentScores[playerState];

  document.querySelector(`#score--${playerState}`).textContent =
    playersTotalScores[playerState];
};

const switchPlayers = () => {
  document
    .querySelector(`.player--${playerState}`)
    .classList.remove("player--active");
  playerState = playerState ? 0 : 1;
  document
    .querySelector(`.player--${playerState}`)
    .classList.add("player--active");
};

rollDice.onclick = () => {
  let diceNumber = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".dice")
    .setAttribute("src", `./images/dice-${diceNumber}.png`);
  if (diceNumber === 1) {
    playersCurrentScores = [0, 0];

    loadCurrentScore();
    switchPlayers();
  } else {
    playersCurrentScores[playerState] += diceNumber;
  }
  loadCurrentScore();
};

holdDice.onclick = () => {
  loadTotalScore();

  playersCurrentScores = [0, 0];

  loadCurrentScore();
  switchPlayers();

  if (playersTotalScores[0] >= 50) {
    alert("Player 1 Wins!!!");
  } else if (playersTotalScores[1] >= 50) {
    alert("Player 2 wins!!!");
  }
};

newGame.onclick = () => {
  document.location.reload();
};
