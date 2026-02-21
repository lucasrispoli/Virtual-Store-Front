function filtrar(categoria) {

  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(produto => {

    if (categoria === "todos") {
      produto.style.display = "block";
    } 
    else if (produto.dataset.categoria === categoria) {
      produto.style.display = "block";
    } 
    else {
      produto.style.display = "none";
    }

  });

}