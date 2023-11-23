const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases
describe('calculateNumber', function () {
  it('should return the sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    assert.strictEqual(calculateNumber(1.2, 3.8), 5);
  });

  it('should handle negative numbers', function () {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.strictEqual(calculateNumber(-1.2, -3.8), -5);
  });

  it('should handle zero', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 5.5), 6);
  });
});