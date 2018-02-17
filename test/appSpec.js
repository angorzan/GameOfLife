const expect = require("chai").expect;
const User = require("../src/app_test.js").User;

 const Life = require("../src/Life.js");
//
// const assert = require('assert');
// describe('getName', function () {
//     describe('gives name', function () {
//         it('gives name', function () {
//             expect(User.getName()).equal('John');
//         });
//     });
// });

describe('Life', function () {
    let life = new Life(true);
    describe('gives life', function () {


        it('check life', function () {

            expect(life.getAlive()).equal(true);
        });

        it('killing', function () {
            life.setAlive(false);
            expect(life.getAlive()).equal(false);
        });
    });
});