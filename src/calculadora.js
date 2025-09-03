function somarDoisNumeros(valor1, valor2) {
  return valor1 + valor2;
};

function mediaDoisNumeros(valor1, valor2) {
  const soma = somarDoisNumeros(valor1, valor2)
  return soma / 2;
};

module.exports = {
  somarDoisNumeros
};