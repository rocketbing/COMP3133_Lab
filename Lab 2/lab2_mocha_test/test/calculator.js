const chai = require('chai');
const expect = chai.expect;
const calculator = require('../calculator');

describe('Calculator Tests', function () {
    it('add(5, 2) should return 7 (PASS)', function () {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    it('add(5, 2) should return 8 (FAIL)', function () {
        expect(calculator.add(5, 2)).to.equal(8);
    });

    it('sub(5, 2) should return 3 (PASS)', function () {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('sub(5, 2) should return 5 (FAIL)', function () {
        expect(calculator.sub(5, 2)).to.equal(5);
    });

    it('mul(5, 2) should return 10 (PASS)', function () {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('mul(5, 2) should return 12 (FAIL)', function () {
        expect(calculator.mul(5, 2)).to.equal(12);
    });

    it('div(10, 2) should return 5 (PASS)', function () {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    it('div(10, 2) should return 2 (FAIL)', function () {
        expect(calculator.div(10, 2)).to.equal(2);
    });
});




