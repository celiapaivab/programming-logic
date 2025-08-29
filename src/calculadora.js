function somarDoisNumeros(valor1, valor2) {
  return valor1 + valor2;
};

function mediaDoisNumeros(valor1, valor2) {
  const soma = somarDoisNumeros(valor1, valor2)
  return soma / 2;
};

function realizarSomaTela() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");

  if (input1 == 0 && input2 == 0) {
    alert("Os valores não podem ser zero");
  };

  return somarDoisNumeros(Number(input1.value), Number(input2.value));
};

module.exports = {
  somarDoisNumeros
};