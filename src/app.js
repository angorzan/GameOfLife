//import Life from './Life.js';

const Life = require('./Life.js');

let board = [
    [new Life(true), new Life(false), new Life(false), new Life(true)],
    [new Life(true), new Life(false), new Life(false), new Life(true)],
    [new Life(false), new Life(false), new Life(true), new Life(true)],
    [new Life(true), new Life(false), new Life(true), new Life(true)],
];
console.log(board);