function trocarProduto() {
  const imagem = document.getElementById("imagemCoffee");

  const caminhoAtual = imagem.getAttribute("src");

  if (caminhoAtual === "sorces/coffee.jpg") {
    imagem.setAttribute("src", "sorces/Tea.png");
    imagem.setAttribute(
      "alt",
      "Imagem do produto tea da lista de produtos disponiveis na loja",
    );
  } else {
    imagem.setAttribute("src", "sorces/coffee.jpg");
    imagem.setAttribute(
      "alt",
      "Imagem do produto coffee da lista de produtos disponiveis na loja",
    );
  }
}
