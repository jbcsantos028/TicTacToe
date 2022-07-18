let firstMove = true;
let prevMove = null;
let strFirstMove = "";
let movesCounter = 0;
let winner = null;
const board = [
  ['','',''],
  ['','',''],
  ['','','']
];

const moves = [];
const moves2 = [];

const optionOne = document.getElementById('opt-1');
const optionTwo = document.getElementById('opt-2');
const select = document.getElementById('select');

const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');
const box7 = document.getElementById('box-7');
const box8 = document.getElementById('box-8');
const box9 = document.getElementById('box-9');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

function checkFirstMove () {
  if (firstMove === true ) {
    strFirstMove = 'X';
    prevMove = 'O';
  }
  else {
    strFirstMove = 'O';
    prevMove = 'X';
  }
};

function togglePrevMove () {
  if (prevMove === 'X') {
    prevMove = 'O';
  }
  else if (prevMove === 'O') {
    prevMove ='X';
  }
}

function checkVerticalX() {
  if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
    console.log('X wins!');
    winner = true;
  }
  else if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
    console.log('X wins!');
    winner = true;
  }
  else if ((board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X')) {
    console.log('X wins!');
    winner = true;
  }
}

function checkVerticalO() {
  if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
    console.log('O wins!');
    winner = false;
  }
  else if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
    console.log('O wins!');
    winner = false;
  }
  else if ((board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O')) {
    console.log('O wins!');
    winner = false;
  }
}

function checkHorizontalX() {
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
    console.log('X wins!');
    winner = true;
  }
  else if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
    console.log('X wins!');
    winner = true;
  }
  else if ((board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X')) {
    console.log('X wins!');
    winner = true;
  }
}

function checkHorizontalO() {
  if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
    console.log('O wins!');
    winner = false;
  }
  else if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') {
    console.log('O wins!');
    winner = false;
  }
  else if ((board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')) {
    console.log('O wins!');
    winner = false;
  }
}

function checkDiagonalX() {
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    console.log('X wins!');
    winner = true;
  }
  else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    console.log('X wins!');
    winner = true;
  }
}

function checkDiagonalO() {
  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
    console.log('O wins!');
    winner = false;
  }
  else if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
    console.log('O wins!');
    winner = false;
  }
}

function disableAllButtons() {
  box1.disabled = true;
  box2.disabled = true;
  box3.disabled = true;
  box4.disabled = true;
  box5.disabled = true;
  box6.disabled = true;
  box7.disabled = true;
  box8.disabled = true;
  box9.disabled = true;
}

function checkWinner() {
  for (let i = 0; i <= 1; i++) {
    checkVerticalX();
      if (winner === true) {
        disableAllButtons();
        prev.style.display = 'inline-block';
        next.style.display = 'inline-block';
        break;
      }
    checkVerticalO();
      if (winner === false) {
        disableAllButtons();
        prev.style.display = 'inline-block';
        next.style.display = 'inline-block';
        break;
      }
    checkHorizontalX();
      if (winner === true) {
        disableAllButtons();
        prev.style.display = 'inline-block';
        next.style.display = 'inline-block';
        break;
      }
    checkHorizontalO();
      if(winner === false) {
        disableAllButtons();
        prev.style.display = 'inline-block';
        next.style.display = 'inline-block';
        break;
      }
    checkDiagonalX();
      if(winner ===true) {
        disableAllButtons();
        prev.style.display = 'inline-block';
        next.style.display = 'inline-block';
        break;
      }
    checkDiagonalO();
      if(winner === false) {
        disableAllButtons();
        prev.style.display = 'inline-block';
        next.style.display = 'inline-block';
        break;
      }
  }
}

optionOne.addEventListener("click", function() {
  firstMove = true;
  select.innerHTML = "X plays first";
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
});

optionTwo.addEventListener("click", function() {
  firstMove = false;
  select.innerHTML = "O plays first";
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
});

box1.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[0][0] = strFirstMove;
    box1.innerHTML = strFirstMove;
    box1.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[0][0] = prevMove;
    box1.innerHTML = prevMove;
    togglePrevMove();
    box1.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box2.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[0][1] = strFirstMove;
    box2.innerHTML = strFirstMove;
    box2.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[0][1] = prevMove;
    box2.innerHTML = prevMove;
    togglePrevMove();
    box2.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box3.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[0][2] = strFirstMove;
    box3.innerHTML = strFirstMove;
    box3.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[0][2] = prevMove;
    box3.innerHTML = prevMove;
    togglePrevMove();
    box3.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box4.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[1][0] = strFirstMove;
    box4.innerHTML = strFirstMove;
    box4.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[1][0] = prevMove;
    box4.innerHTML = prevMove;
    togglePrevMove();
    box4.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box5.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[1][1] = strFirstMove;
    box5.innerHTML = strFirstMove;
    box5.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[1][1] = prevMove;
    box5.innerHTML = prevMove;
    togglePrevMove();
    box5.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box6.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[1][2] = strFirstMove;
    box6.innerHTML = strFirstMove;
    box6.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[1][2] = prevMove;
    box6.innerHTML = prevMove;
    togglePrevMove();
    box6.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box7.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[2][0] = strFirstMove;
    box7.innerHTML = strFirstMove;
    box7.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[2][0] = prevMove;
    box7.innerHTML = prevMove;
    togglePrevMove();
    box7.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box8.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[2][1] = strFirstMove;
    box8.innerHTML = strFirstMove;
    box8.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[2][1] = prevMove;
    box8.innerHTML = prevMove;
    togglePrevMove();
    box8.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box9.addEventListener("click", function() {
  if (prevMove === null) {
    checkFirstMove();
    board[2][2] = strFirstMove;
    box9.innerHTML = strFirstMove;
    box9.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
  }
  else if (prevMove !== null) {
    board[2][2] = prevMove;
    box9.innerHTML = prevMove;
    togglePrevMove();
    box9.disabled = true;
    movesCounter += 1;
    console.log(board);
    moves.push(board);
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

prev.addEventListener("click", function() {
  console.log(moves);
});




