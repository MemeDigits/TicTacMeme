const squares = document.querySelectorAll('.square');
const result = document.querySelector('#result');
const resetButton = document.querySelector('#reset');

let currentPlayer = '69';
let moves = 0;
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleMove(square) {
  const index = Array.from(squares).indexOf(square);
  if (square.getAttribute('data-square') === '') {
    square.setAttribute('data-square', currentPlayer);
    square.classList.add(currentPlayer);

    if (currentPlayer === '69') {
      square.textContent = '69';
    } else {
      square.textContent = '420';
    }

    moves++;
    checkForWin();
    currentPlayer = currentPlayer === '69' ? '420' : '69';
  }
}

function checkForWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const squareA = squares[a];
    const squareB = squares[b];
    const squareC = squares[c];
    if (squareA.getAttribute('data-square') !== '' &&
        squareA.getAttribute('data-square') === squareB.getAttribute('data-square') &&
        squareA.getAttribute('data-square') === squareC.getAttribute('data-square')) {
      result.textContent = `${squareA.getAttribute('data-square')} wins!`;
      gameActive = false;
      resetButton.style.display = 'block';
      highlightWinningCombination(squareA, squareB, squareC);
      return;
    }
  }
  if (moves === 9) {
    result.textContent = "It's a tie!";
    gameActive = false;
    resetButton.style.display = 'block';
  }
}

function highlightWinningCombination(squareA, squareB, squareC) {
  squareA.classList.add('winner');
  squareB.classList.add('winner');
  squareC.classList.add('winner');
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].setAttribute('data-square', '');
    squares[i].textContent = '';
    squares[i].classList.remove('69', '420', 'winner');
  }
  result.textContent = '';
  moves = 0;
  gameActive = true;
  currentPlayer = '69';
  resetButton.style.display = 'none';
}

squares.forEach(square => {
  square.addEventListener('click', () => {
    if (gameActive) {
      handleMove(square);
    }
  });
});

resetButton.addEventListener('click', resetGame);
