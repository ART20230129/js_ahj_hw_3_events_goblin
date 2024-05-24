export default class Controller {
  constructor() {
    this.miss = 0;
    this.hit = 0;
    this.board = document.querySelector('.container');
    this.clickGoblin = this.clickGoblin.bind(this);
    this.board.addEventListener('click', this.clickGoblin);
    this.hitScore = document.querySelector('.hit');
    this.missScore = document.querySelector('.miss');
  }

  clickGoblin(elem) {
    elem.preventDefault();
    if (elem.target.classList.contains('goblin')) {
      this.hit++;
      this.hitScore.textContent = this.hit;
    } else {
      this.miss++;
      this.missScore.textContent = this.miss;
    }

    if (this.hit >= 5) {
      alert('Victory! 5 hits!');
      this.clearScore();
    }
    if (this.miss >= 5) {
      alert('Game over! 5 misses!');

      this.clearScore();
    }
  }

  clearScore() {
    this.miss = 0;
    this.hit = 0;
    this.hitScore.textContent = this.miss;
    this.missScore.textContent = this.hit;
  }
}
