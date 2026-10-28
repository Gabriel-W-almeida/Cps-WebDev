# Cps-WebDev

Repositório com os checkpoints (CPs) de **Desenvolvimento Web**, feitos como trabalho prático para consolidar o entendimento dos fundamentos de HTML, CSS e JavaScript.

Cada projeto fica em uma pasta própria e roda direto no navegador, sem instalação ou dependências.

## Projetos

| Pasta | Projeto | O que pratica |
| ----- | ------- | ------------- |
| [CP1](CP1/) | Calculadora de Compras | Inputs, leitura de valores no DOM, cálculo do total (preço × quantidade) e exibição do resultado |
| [CP2](CP2/) | Placar de Pontos | Eventos de clique, variável de estado, atualização do texto na tela e regra para não passar de zero |
| [CP3](CP3/) | Loja de Produtos | Troca de imagem e de texto alternativo (`src` / `alt`) com `getAttribute` e `setAttribute` |

## Estilo

Os três projetos usam a mesma identidade visual:

- Fundo azul escuro, container bege com faixa dourada no topo
- Conteúdo centralizado na horizontal e na vertical
- Cores definidas como variáveis CSS (`:root`), o que facilita trocar a paleta
- Botões com efeito de hover e de clique
- Layout responsivo, que se adapta a telas pequenas

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/<seu-usuario>/Cps-WebDev.git
   ```
2. Abra o `index.html` da pasta do projeto desejado no navegador.

## Estrutura

```
Cps-WebDev/
├── CP1/   index.html, Style.css, Scripts.js
├── CP2/   index.html, style.css, scripts.js
└── CP3/   index.html, style.css, scripts.js, sorces/ (imagens)
```

## Tecnologias

- HTML5
- CSS3 (Flexbox, variáveis CSS)
- JavaScript (manipulação do DOM)

## Autor

Gabriel Almeida
