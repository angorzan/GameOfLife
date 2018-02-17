class User {
    constructor(firstName, lastName){
        this.firstName = 'John';
        this.lastName = 'Rambo';
    }
   getName (){
        return this.firstName;
   }
};

module.exports.User = new User();