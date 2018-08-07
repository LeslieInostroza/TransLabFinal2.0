const assert = require('chai').assert;
global.window = global;
require('../src/js/profile');

describe('Validar Bip!', () => {
  describe('Deberia verificar la cantidad de numeros de tarjeta Bip!', () => {
    it('Deberian ser solo 8 numeros de tarjeta Bip!', () => {
      assert.equal(validateTarjet(12345678), true);
      assert.equal(validateTarjet(123456), false);
      assert.equal(validateTarjet(123456789), false);
    });
    it('Deberian ser solo numeros en la tarjeta Bip!', () => {
      assert.equal(validateTarjet(12345678), true);
      assert.equal(validateTarjet('abhyedrs'), false);
      assert.equal(validateTarjet('hdhsdgahd35'), false);
      assert.equal(validateTarjet('&&%("(/#'), false);
    });
  });
});