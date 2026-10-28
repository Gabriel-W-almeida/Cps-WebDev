function calcular() {
  let preco = Number(document.getElementById("preco").value);
  let quantidade = Number(document.getElementById("quantidade").value);
  let resultado = preco * quantidade;
  document.getElementById("resultado").innerText = "Total é " + resultado;
}
