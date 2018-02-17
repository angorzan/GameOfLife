class Life {
    constructor(alive){
        this.alive = alive;
    }
    getAlive (){
        return this.alive;
    }
    setAlive(alive){
        this.alive = alive;
    }
    isAlive(){
        this.getAlive();
    }
};

module.exports = Life;