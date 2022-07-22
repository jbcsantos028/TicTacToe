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
let curr_move = [];

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
const spacer = document.getElementById('spacer');

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

function checkVertical() {
  for(let i = 0; i < 1; i++) {
    for(let j = 0; j <= 2; j++) {
      if (board[i][j] === 'X' && board[i+1][j] === 'X' && board[i+2][j] === 'X') {
        console.log('X wins!');
        select.innerHTML = "X wins!";
        winner = true;
      }
      else if (board[i][j] === 'O' && board[i+1][j] === 'O' && board[i+2][j] === 'O') {
        console.log('O wins!');
        select.innerHTML = "O wins!";
        winner = true;
      }
    }
  }
}

function checkHorizontal() {
  for(let i = 0; i <= 2; i++) {
    for(let j = 0; j < 1; j++) {
      if (board[i][j] === 'X' && board[i][j+1] === 'X' && board[i][j+2] === 'X') {
        console.log('X wins!');
        select.innerHTML = "X wins!";
        winner = true;
      }
      else if (board[i][j] === 'O' && board[i][j+1] === 'O' && board[i][j+2] === 'O') {
        console.log('O wins!');
        select.innerHTML = "O wins!";
        winner = true;
      }
    }
  }
}

function checkDiagonalX() {
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    console.log('X wins!');
    select.innerHTML = "X wins!";
    winner = true;
  }
  else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    console.log('X wins!');
    select.innerHTML = "X wins!";
    winner = true;
  }
}

function checkDiagonalO() {
  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
    console.log('O wins!');
    select.innerHTML = "O wins!";
    winner = true;
  }
  else if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
    console.log('O wins!');
    select.innerHTML = "O wins!";
    winner = true;
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

function displayPrevNextButtons() {
  disableAllButtons();
  prev.style.display = 'inline-block';
  next.style.display = 'inline-block';
  spacer.style.display = 'inline-block';
  next.disabled = true;
}

function checkWinner() {
    for (let i = 0; i < 1; i++) {
      checkVertical();
        if (winner === true) {
          displayPrevNextButtons();
          break;
        }
      checkHorizontal();
        if (winner === true) {
          displayPrevNextButtons();
          break;
        }
      checkDiagonalX();
        if(winner === true) {
          displayPrevNextButtons();
          break;
        }
      checkDiagonalO();
        if(winner === true) {
          displayPrevNextButtons();
          break;
        }
      }
    if (movesCounter === 9 &&  winner === null) {
      console.log("DRAW!");
      select.innerHTML = "Draw!";
      prev.style.display = 'inline-block';
      next.style.display = 'inline-block';
      spacer.style.display = 'inline-block';
      next.disabled = true;
    }
}

function noOptionSelected() {
  select.innerHTML = "X plays first";
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
}

optionOne.addEventListener("click", function() {
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
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[0][0] = strFirstMove;
    box1.innerHTML = strFirstMove;
    box1.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[0][0] = prevMove;
    box1.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box1.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box2.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[0][1] = strFirstMove;
    box2.innerHTML = strFirstMove;
    box2.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[0][1] = prevMove;
    box2.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box2.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box3.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[0][2] = strFirstMove;
    box3.innerHTML = strFirstMove;
    box3.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[0][2] = prevMove;
    box3.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box3.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box4.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[1][0] = strFirstMove;
    box4.innerHTML = strFirstMove;
    box4.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[1][0] = prevMove;
    box4.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box4.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box5.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[1][1] = strFirstMove;
    box5.innerHTML = strFirstMove;
    box5.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[1][1] = prevMove;
    box5.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box5.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box6.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[1][2] = strFirstMove;
    box6.innerHTML = strFirstMove;
    box6.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[1][2] = prevMove;
    box6.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box6.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box7.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[2][0] = strFirstMove;
    box7.innerHTML = strFirstMove;
    box7.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[2][0] = prevMove;
    box7.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box7.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box8.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[2][1] = strFirstMove;
    box8.innerHTML = strFirstMove;
    box8.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[2][1] = prevMove;
    box8.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box8.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

box9.addEventListener("click", function() {
  if (prevMove === null) {
    if(firstMove === true) {
      noOptionSelected();
    }
    checkFirstMove();
    select.innerHTML = prevMove + " is playing";
    board[2][2] = strFirstMove;
    box9.innerHTML = strFirstMove;
    box9.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
  }
  else if (prevMove !== null) {
    board[2][2] = prevMove;
    box9.innerHTML = prevMove;
    togglePrevMove();
    select.innerHTML = prevMove + " is playing";
    box9.disabled = true;
    movesCounter += 1;
    moves.push(JSON.parse(JSON.stringify(board)));
    if (movesCounter >= 5) {
      checkWinner();
    }
  }
});

function setBoxes() {
  box1.innerHTML = curr_move[0][0];
  box2.innerHTML = curr_move[0][1];
  box3.innerHTML = curr_move[0][2];
  box4.innerHTML = curr_move[1][0];
  box5.innerHTML = curr_move[1][1];
  box6.innerHTML = curr_move[1][2];
  box7.innerHTML = curr_move[2][0];
  box8.innerHTML = curr_move[2][1];
  box9.innerHTML = curr_move[2][2];
}

prev.addEventListener("click", function() {
  
  movesCounter -= 1;
  
  curr_move = moves[movesCounter-1];
  setBoxes();

  if (movesCounter === 1) {
    prev.disabled = true;
  }
  else if (movesCounter > 1) {
    prev.disabled = false;
    if (movesCounter <= moves.length - 1) {
      next.disabled = false;
    }
  }
  
});

next.addEventListener("click", function() {
  
  curr_move = moves[movesCounter];
  setBoxes();
  
  if (movesCounter === moves.length - 1) {
    next.disabled = true;
  }
  else if (movesCounter < moves.length - 1) {
    next.disabled = false;
    if (movesCounter > 1) {
      prev.disabled = false;
    }
  }
  movesCounter += 1;
  
});