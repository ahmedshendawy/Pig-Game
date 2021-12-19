'use strict';
let player0score = document.querySelector('#score--0');
let player1score = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let curre0 = document.querySelector('#current--0');
let curre1 = document.querySelector('#current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let rollnumb = Math.trunc(Math.random() * 6) + 1;
let playing = true;

player0score.textContent = 0;
player1score.textContent = 0;
dice.style.display = 'none';

// ---------------------AGAIN----------------

document.querySelector('.btn--new').addEventListener('click', () => {
  curre0.textContent = 0;
  curre1.textContent = 0;
  player0score.textContent = 0;
  player1score.textContent = 0;
  dice.style.display = 'none';
  playing = true;
  document.querySelector('.name1').classList.add('hidden');
  document.querySelector('.name2').classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});

// ---------------ROLL----------------

document.querySelector('.btn--roll').addEventListener('click', () => {
  if (playing) {
    rollnumb = Math.trunc(Math.random() * 6) + 1;
    if (player0.classList.contains('player--active')) {
      switch (rollnumb) {
        case 1:
          dice.style.display = 'block';
          dice.src = 'dice-1.png';
          curre0.textContent = 0;
          player0.classList.remove('player--active');
          player1.classList.add('player--active');
          break;

        case 2:
          dice.style.display = 'block';
          dice.src = 'dice-2.png';
          curre0.textContent = 2 + Number(curre0.textContent);
          break;
        case 3:
          dice.style.display = 'block';
          dice.src = 'dice-3.png';
          curre0.textContent = 3 + Number(curre0.textContent);
          break;
        case 4:
          dice.style.display = 'block';
          dice.src = 'dice-4.png';
          curre0.textContent = 4 + Number(curre0.textContent);
          break;
        case 5:
          dice.style.display = 'block';
          dice.src = 'dice-5.png';
          curre0.textContent = 5 + Number(curre0.textContent);
          break;
        case 6:
          dice.style.display = 'block';
          dice.src = 'dice-6.png';
          curre0.textContent = 6 + Number(curre0.textContent);
          break;
      }
    } else if (player1.classList.contains('player--active')) {
      switch (rollnumb) {
        case 1:
          dice.style.display = 'block';
          dice.src = 'dice-1.png';
          curre1.textContent = 0;
          player1.classList.remove('player--active');
          player0.classList.add('player--active');
          break;

        case 2:
          dice.style.display = 'block';
          dice.src = 'dice-2.png';
          curre1.textContent = 2 + Number(curre1.textContent);
          break;
        case 3:
          dice.style.display = 'block';
          dice.src = 'dice-3.png';
          curre1.textContent = 3 + Number(curre1.textContent);
          break;
        case 4:
          dice.style.display = 'block';
          dice.src = 'dice-4.png';
          curre1.textContent = 4 + Number(curre1.textContent);
          break;
        case 5:
          dice.style.display = 'block';
          dice.src = 'dice-5.png';
          curre1.textContent = 5 + Number(curre1.textContent);
          break;
        case 6:
          dice.style.display = 'block';
          dice.src = 'dice-6.png';
          curre1.textContent = 6 + Number(curre1.textContent);
          break;
      }
    }
  }
});

// ----------- HOLD --------------

document.querySelector('.btn--hold').addEventListener('click', () => {
  if (playing) {
    rollnumb = Math.trunc(Math.random() * 6) + 1;
    if (player0.classList.contains('player--active')) {
      player0score.textContent =
        Number(curre0.textContent) + Number(player0score.textContent);
      if (player0score.textContent >= 20) {
        document.querySelector('.name1').classList.remove('hidden');
        playing = false;
      } else {
        curre0.textContent = 0;
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
      }
    } else if (player1.classList.contains('player--active')) {
      player1score.textContent =
        Number(curre1.textContent) + Number(player1score.textContent);
      if (player1score.textContent >= 20) {
        document.querySelector('.name2').classList.remove('hidden');
        playing = false;
      } else {
        curre1.textContent = 0;
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
      }
    }
  }
});
