let currentPlayer = 'X';
let gameBoard = [];
let isGameOver = false;
let boardSize = 3;
let aiDifficulty = 'easy'; // Oletuksena "helppo"
let isPlayerTurn = true;

const board = document.getElementById('board');
const status = document.getElementById('status');
const restartButton = document.getElementById('restart');
const settingsButton = document.getElementById('settings-button');
const settingsPanel = document.getElementById('settings-panel');
const closeSettingsButton = document.getElementById('close-settings');
const boardSizeSelect = document.getElementById('board-size');
const themeSelect = document.getElementById('theme');
const aiDifficultySelect = document.getElementById('ai-difficulty');

// Päivitä pelilauta
function updateBoard() {
    board.innerHTML = '';
    gameBoard = new Array(boardSize * boardSize).fill('');
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

// Käsittele ruudun klikkaus
function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (gameBoard[index] || isGameOver || !isPlayerTurn) return;

    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    // Tarkista voittaja
    if (checkWinner()) {
        status.textContent = `${currentPlayer} voitti!`;
        isGameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        isPlayerTurn = !isPlayerTurn;
        status.textContent = `Vuoro: ${currentPlayer}`;
        if (currentPlayer === 'O') aiMove();
    }
}

// Tekoälyn siirto
function aiMove() {
    const emptyCells = gameBoard
        .map((cell, index) => cell === '' ? index : null)
        .filter(index => index !== null);

    if (emptyCells.length === 0 || isGameOver) return;

    let move;
    if (aiDifficulty === 'easy') {
        move = easyAI(emptyCells);
    } else if (aiDifficulty === 'medium') {
        move = mediumAI(emptyCells);
    } else {
        move = hardAI(emptyCells);
    }

    gameBoard[move] = 'O';
    const cell = board.querySelector(`[data-index="${move}"]`);
    cell.textContent = 'O';

    if (checkWinner()) {
        status.textContent = `${currentPlayer} voitti!`;
        isGameOver = true;
    } else {
        currentPlayer = 'X';
        isPlayerTurn = !isPlayerTurn;
        status.textContent = `Vuoro: ${currentPlayer}`;
    }
}

// Helppo AI - valitsee satunnaisen vapaan ruudun
function easyAI(emptyCells) {
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

// Keskitaso AI - yrittää estää pelaajaa voittamasta, mutta tekee satunnaisia siirtoja
function mediumAI(emptyCells) {
    // Yksinkertainen strategia estää pelaajaa voittamasta
    for (let i = 0; i < emptyCells.length; i++) {
        let testBoard = [...gameBoard];
        testBoard[emptyCells[i]] = 'O';
        if (checkWinner(testBoard)) return emptyCells[i];
    }
    return easyAI(emptyCells);
}

// Vaikea AI - käyttää algoritmia voittaakseen
function hardAI(emptyCells) {
    // Esimerkki yksinkertaisesta tekoälyn strategian parantamisesta
    return emptyCells[Math.floor(Math.random() * emptyCells.length)]; // Tähän voisi lisätä minmax-algoritmin
}

// Tarkista voittaja
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

// Käynnistä uusi peli
restartButton.addEventListener('click', () => {
    isGameOver = false;
    currentPlayer = 'X';
    isPlayerTurn = true;
    status.textContent = `Vuoro: ${currentPlayer}`;
    updateBoard();
});

// Asetusten näyttäminen/piilottaminen
settingsButton.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
});

closeSettingsButton.addEventListener('click', () => {
    settingsPanel.classList.add('hidden');
});

// Asetusten muuttaminen
boardSizeSelect.addEventListener('change', () => {
    boardSize = parseInt(boardSizeSelect.value);
    updateBoard();
});

themeSelect.addEventListener('change', () => {
    const theme = themeSelect.value;
    if (theme === 'dark') {
        document.body.classList.add('dark');
        board.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        board.classList.remove('dark');
    }
});

aiDifficultySelect.addEventListener('change', () => {
    aiDifficulty = aiDifficultySelect.value;
});

// Alusta peli
updateBoard();
