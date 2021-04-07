const Gameboard = () => {
  let board = ['', '', '', '', '', '', '', '', ''];
  let playerMarker;
  let markerCount = 0;
  let gameplay = false;
  const headerEl = document.querySelector('header');
  const newGameMsg = headerEl.children[1];
  const boardEl = document.querySelector('#gameboard');
  const pos0 = boardEl.children[2].children[0];
  const pos1 = boardEl.children[2].children[1];
  const pos2 = boardEl.children[2].children[2];
  const pos3 = boardEl.children[1].children[0];
  const pos4 = boardEl.children[1].children[1];
  const pos5 = boardEl.children[1].children[2];
  const pos6 = boardEl.children[0].children[0];
  const pos7 = boardEl.children[0].children[1];
  const pos8 = boardEl.children[0].children[2];
  const gameMesEL = document.querySelector('#gameMessage');
  const newGameBtn = document.querySelector('#newGame button');

  const PlayerMarkerUpdate = () => {
    if (
      markerCount === 1 ||
      markerCount === 3 ||
      markerCount === 5 ||
      markerCount === 7
    ) {
      return (playerMarker = 'O');
    } else if (
      markerCount === 0 ||
      markerCount === 2 ||
      markerCount === 4 ||
      markerCount === 6 ||
      markerCount === 8
    );
    {
      return (playerMarker = 'X');
    }
  };

  const winnerMsg = () => {
    if (playerMarker === 'X') {
      gameMesEL.children[0].textContent = 'X is the WINNER!';
      gameMesEL.children[1].textContent = 'Press New Game to restart';
    } else {
      gameMesEL.children[0].textContent = 'O is the WINNER!';
      gameMesEL.children[1].textContent = 'Press New Game to restart';
    }
  };

  const checkWinner = (board) => {
    if (
      (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
      (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
      (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
      (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
      (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') ||
      (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
      (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
      (board[6] === 'X' && board[7] === 'X' && board[8] === 'X')
    ) {
      winnerMsg();
      return (gameplay = false);
    } else if (
      (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
      (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
      (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
      (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
      (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') ||
      (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
      (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
      (board[6] === 'O' && board[7] === 'O' && board[8] === 'O')
    ) {
      winnerMsg();
      return (gameplay = false);
    } else if (markerCount === 9 && gameplay != false) {
      gameMesEL.firstElementChild.textContent = 'Game is TIED';
      gameMesEL.children[1].textContent = 'Press New Game to restart';
    }
  };

  const addGameMarker0 = () => {
    if (pos0.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos0.textContent = playerMarker;
      board[0] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };
  const addGameMarker1 = () => {
    if (pos1.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos1.textContent = playerMarker;
      board[1] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };
  const addGameMarker2 = () => {
    if (pos2.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos2.textContent = playerMarker;
      board[2] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };
  const addGameMarker3 = () => {
    if (pos3.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos3.textContent = playerMarker;
      board[3] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };

  const addGameMarker4 = () => {
    if (pos4.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos4.textContent = playerMarker;
      board[4] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };
  const addGameMarker5 = () => {
    if (pos5.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos5.textContent = playerMarker;
      board[5] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };
  const addGameMarker6 = () => {
    if (pos6.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos6.textContent = playerMarker;
      board[6] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };
  const addGameMarker7 = () => {
    if (pos7.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos7.textContent = playerMarker;
      board[7] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };
  const addGameMarker8 = () => {
    if (pos8.textContent != '' || markerCount > 8 || gameplay != true) {
      return;
    }
    {
      PlayerMarkerUpdate();
      pos8.textContent = playerMarker;
      board[8] = playerMarker;
      markerCount++;
      checkWinner(board);
    }
  };

  const newGame = () => {
    gameplay = true;
    markerCount = 0;
    newGameMsg.textContent = '';
    board = ['', '', '', '', '', '', '', '', ''];
    pos0.textContent = '';
    pos1.textContent = '';
    pos2.textContent = '';
    pos3.textContent = '';
    pos4.textContent = '';
    pos5.textContent = '';
    pos6.textContent = '';
    pos7.textContent = '';
    pos8.textContent = '';
    gameMesEL.children[0].textContent = '';
    gameMesEL.children[1].textContent = '';
  };

  pos0.addEventListener('click', addGameMarker0);
  pos1.addEventListener('click', addGameMarker1);
  pos2.addEventListener('click', addGameMarker2);
  pos3.addEventListener('click', addGameMarker3);
  pos4.addEventListener('click', addGameMarker4);
  pos5.addEventListener('click', addGameMarker5);
  pos6.addEventListener('click', addGameMarker6);
  pos7.addEventListener('click', addGameMarker7);
  pos8.addEventListener('click', addGameMarker8);

  newGameBtn.addEventListener('click', newGame);
};

let newGame = Gameboard();
