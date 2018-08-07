const assert = require('chai').assert;
global.window = global;
require('../src/js/calculo');

describe('Calcular Tarifa',() => {
  describe('calculate',() => {
    it ('Deberia ser una funcion',()=>{
      assert.equal(typeof calculate, 'function');
    });
    it ('Deberia retornar 40 para saldo inicial 800 con tarifa alta 760',()=>{
      assert.equal(calculate(800, 760), 40);
    });
  });
});