export default class Game {
  constructor() {
    this.arrGameBoard = [];
  }

  startGame() {
    this.arrGameBoard = Array.from(document.querySelectorAll('.cell'));
    setInterval(() => {
      this.positionGoblin();
    }, 750);
  }

  positionGoblin() {
    const newPosition = Math.floor(Math.random() * (this.arrGameBoard.length));
    if (this.goblinPosition >= 0) { // затираем рисунок гоблина
      this.arrGameBoard[this.goblinPosition].classList.remove('goblin');
    }

    if (this.goblinPosition !== newPosition) { // включаем рисунок на новом месте
      this.goblinPosition = newPosition;
      // console.log(this.goblinPosition);
      this.arrGameBoard[this.goblinPosition].classList.add('goblin');
    }
  }
}
