const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 1.2, 3.8)).to.equal(5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the result of subtracting rounded b from a', function () {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 10.7, 3.2)).to.equal(8);
    });
  });

  describe('DIVIDE', function () {
    it('should return the result of dividing rounded a by rounded b', function () {
      expect(calculateNumber('DIVIDE', 6.4, 2)).to.equal(3);
      expect(calculateNumber('DIVIDE', 9.6, 1.5)).to.equal(6.4);
    });

    it('should handle division by zero and return "Error"', function () {
      expect(calculateNumber('DIVIDE', 8.2, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid type', function () {
      expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(
        'Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.'
      );
    });
  });
});