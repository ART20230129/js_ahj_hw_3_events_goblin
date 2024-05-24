import Board from './Board';
import Game from './Game';
import Controller from './Controller';

const gameBoard = new Board();
gameBoard.drawBoard();
const game = new Game();
game.startGame();
const controller = new Controller();
controller.clickGoblin();
