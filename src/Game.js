class Game {
    constructor(board, width, height){
        this.board = board;
        this.width = width;
        this.height = height;
    }
    numberOfAliveNeighbours(x, y) {
        let counter = 0;
        for (let i = -1; i <= 1; i++){
            for (let j = -1; j <= 1; j++){

                if(!i && !j)
                    continue;

                let xTmp = x + i,
                    yTmp = y + j;
                if (xTmp >= 0 && xTmp < this.width
                    && yTmp >= 0 && yTmp < this.height){
                    counter += this.board[xTmp][yTmp].getAlive();
                }
            }
        }
        return counter;
    }
};

module.exports = Game;