const assert = require('chai').assert;
global.window = global;
require('../src/js/login');

describe('Validar password', () => {
  describe('Deberia verificar la cantidad de numeros en password', () => {
    it('Deberia tener maximo 8 numeros el password', () => {
      assert.equal(validatePassword(12345678), true);
      assert.equal(validatePassword(123456), true);
      assert.equal(validatePassword(123456789), false);
    });
    it('Deberia ser solo numeros', () => {
      assert.equal(validatePassword(12345678), true);
      assert.equal(validatePassword('abhyedrs'), false);
      assert.equal(validatePassword('hdhsdgahd35'), false);
      assert.equal(validatePassword('&&%("(/#'), false);
    });
  });
});