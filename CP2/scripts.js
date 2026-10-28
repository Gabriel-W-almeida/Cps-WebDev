let pontuacao = 0;

function adcPonto() {
  pontuacao++;
  document.getElementById("pontuacao").innerText = pontuacao;
}

function subPonto() {
  if (pontuacao === 0) {
    return;
  }
  pontuacao--;
  document.getElementById("pontuacao").innerText = pontuacao;
}
