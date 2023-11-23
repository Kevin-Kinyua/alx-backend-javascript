const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', function () {
  let consoleSpy;

  beforeEach(function () {
    // Create a spy for console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original console.log function
    consoleSpy.restore();
  });

  it('should log the correct string and be called once for total 100 and 20', function () {
    sendPaymentRequestToAPI(100, (total) => {
      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWithExactly(`Sending payment of ${total}`)).to.be.true;
    });
  });

  it('should log the correct string and be called once for total 10 and 10', function () {
    sendPaymentRequestToAPI(10, (total) => {
      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWithExactly(`Sending payment of ${total}`)).to.be.true;
    });
  });
});