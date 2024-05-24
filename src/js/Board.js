// механизм создания игрового поля
export default class Board {
  constructor() {
    this.cellsNumber = 16;
  }

  drawBoard() {
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('container');
    document.body.append(gameBoard);
    for (let i = 0; i < this.cellsNumber; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }
  }
}
