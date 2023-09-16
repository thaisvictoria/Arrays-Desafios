let frutas = ["goiaba", "laranja", "manga", "melancia", "abacate"];

function exibirLista() {
  const lista = frutas.join(", "); // Transforma o array em uma string separada por vírgulas e espaços
  alert("Lista de Compras: " + lista);
}

exibirLista();

function escolherRemover() {
  let remover = prompt("Qual fruta quer remover?");
  return remover; // Retorna a fruta a ser removida
}

function verificarItem() {
  let frutaRemover;

  while (true) {
    frutaRemover = escolherRemover();

    if (frutas.includes(frutaRemover)) {
      const iRemover = frutas.indexOf(frutaRemover);
      if (iRemover !== -1) {
        frutas.splice(iRemover, 1);
        alert("Fruta foi retirada da lista.");
        break; // sai do loop
      }
    } else {
      alert("Essa fruta não está na lista. Escolha outra fruta.");
    }
  }
}
verificarItem();
