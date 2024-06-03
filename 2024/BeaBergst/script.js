const wordList = ['apple', 'grape', 'mango', 'berry', 'peach', 'lemon', 'cherry', 'melon', 'plum', 'pear'];
const word = wordList[Math.floor(Math.random() * wordList.length)];
const maxAttempts = 6;
let attempts = 0;

function createBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < maxAttempts; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (guess.length !== 5) {
        document.getElementById('message').textContent = 'Please enter a 5-letter word.';
        return;
    }

    if (attempts >= maxAttempts) {
        document.getElementById('message').textContent = `Sorry, you've run out of attempts. The word was: ${word}`;
        return;
    }

    const row = document.querySelectorAll('.row')[attempts];
    const cells = row.querySelectorAll('.cell');

    for (let i = 0; i < 5; i++) {
        cells[i].textContent = guess[i];
        if (guess[i] === word[i]) {
            cells[i].classList.add('correct');
        } else if (word.includes(guess[i])) {
            cells[i].classList.add('present');
        } else {
            cells[i].classList.add('absent');
        }
    }

    if (guess === word) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the word correctly!';
        return;
    }

    attempts++;
    if (attempts === maxAttempts) {
        document.getElementById('message').textContent = `Sorry, you've run out of attempts. The word was: ${word}`;
    }
}

createBoard();
