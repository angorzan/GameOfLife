//import Life from './Life.js';

const Life = require('./Life.js');
const Game = require('./Game.js');

let board = [
    [new Life(true), new Life(false), new Life(false), new Life(true)],
    [new Life(true), new Life(false), new Life(false), new Life(true)],
    [new Life(false), new Life(false), new Life(true), new Life(true)],
    [new Life(true), new Life(false), new Life(true), new Life(true)],
];
let game = new Game(board, 4, 4);
console.log(board);
console.log(game.numberOfAliveNeighbours(2, 2));