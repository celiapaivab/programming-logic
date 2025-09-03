const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', () => {
  it('A função deve ser capaz de somar dois números positivos', () => {
    // Coleta o resultado da função
    const resultadoDaSoma = somarDoisNumeros(5, 3);

    //Compara o resultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(8);
  });

  it('A função deve ser capaz de somar um número positivo e um número negativo', () => {
    // Coleta o resultado da função
    const resultadoDaSoma = somarDoisNumeros(50, -15);

    //Compara o resultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(35);
  });

  it('A função deve ser capaz de somar dois números iguais a zero', () => {
    // Coleta o resultado da função
    const resultadoDaSoma = somarDoisNumeros(0, 0);

    //Compara o resultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(0);
  });

  it('A função deve ser capaz de somar dois números negativos', () => {
    // Coleta o resultado da função
    const resultadoDaSoma = somarDoisNumeros(-15, -20);

    //Compara o resultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(-35);
  });

});