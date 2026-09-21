const catalogoProdutos = [
  [
    "Fone de ouvido over-ear",
    "Fone de Ouvido Bluetooth Over-Ear",
    "Fone de ouvido",
    349.9,
  ],
  [
    "Cafeteira Elétrica", 
    "Cafeteira Elétrica Programável", 
    "Cafeteira", 
    189.0
 ],
  [
    "Tênis Esportivo", 
    "Tênis Esportivo Running Pro", 
    "Tênis", 
    259.99
  ],
  [
    "O Poder do Hábito",
    'Livro: "O Poder do Hábito" (Capa Comum)',
    "Livro",
    49.9,
  ],
  ["Mochila Executiva", 
    "Mochila Executiva Antifurto", 
    "Mochila", 
    129.9
  ],
];

catalogoProdutos.forEach((arrayProdutos) => {
    let produtos = document.createElement("div");
    produtos.setAttribute("class", "criado");
    arrayProdutos.forEach((produtosEmSi) => {
        switch (arrayProdutos.indexOf(produtosEmSi)) {

        case 0:
            atributos = document.createElement("img");
            atributos.setAttribute("src", produtosEmSi);
            produtos.append(atributos);
            break;

        case 1:
            atributos = document.createElement("h1");
            atributos.textContent = produtosEmSi;
            produtos.append(atributos);
            break;

        case 2:
            atributos = document.createElement("h2");
            atributos.textContent = produtosEmSi;
            produtos.append(atributos);
            break;
        
        case 3:
            atributos = document.createElement("p");
            atributos.setAttribute("class", "tipo");
            atributos.textContent = produtosEmSi;
            produtos.append(atributos);
            break;

        case 4:
            atributos = document.createElement("h3");
            atributos.textContent = produtosEmSi;
            produtos.append(atributos);
            break;

        default:
            break;
    }   
    console.log(arrayProdutos.indexOf(produtosEmSi));
  });
  produtosCatalogados.append(produtos);
});
console.log(catalogoProdutos);
const filtro = document.getElementById("busca");
const tipo = document.querySelectorAll("#produtosCatalogados div");

filtro.addEventListener("input", function () {
  const busca = filtro.value.toLowerCase();

  tipo.forEach((item) => {
    const textoItem = item.textContent.toLowerCase();

    if (textoItem.includes(busca)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
