const assert = require('chai').assert;
global.window = global;
require('../src/js/data');

describe('Calcular Tarifa',() => {
  describe('calculate',() => {
    it ('Deberia ser una funcion',()=>{
      assert.isFunction(calculate);
    });
    it ('Deberia retornar 40 para saldo inicial 800 con tarifa alta 760',()=>{
      assert.equal(calculate(800 - 760 === 40), true);
    });
  });
});

describe('Validar Bip!', () => {
  describe('Deberia verificar la cantidad de numeros de tarjeta Bip!', () => {
    it ('Deberia ser una funcion',()=>{
      assert.isFunction(validateTarjet);
    });
    it('Deberian ser solo 8 numeros de tarjeta Bip!', () => {
      assert.equal(validateTarjet(12345678), true);
      assert.equal(validateTarjet(123456), true);
    });
    it('Deberian ser solo numeros en la tarjeta Bip!', () => {
      assert.equal(validateTarjet(12345678), true);
      assert.equal(validateTarjet('abhyedrs'), false);
      assert.equal(validateTarjet('hdhsdgahd35'), false);
      assert.equal(validateTarjet('&&%("(/#'), false);
    });
  });
});