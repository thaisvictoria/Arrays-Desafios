const estudantes = [];

while (true) {
    const nomeEstudante = prompt("Digite o nome do estudante para cadastrar. Quando acabar digite 'PARE'.");
    
    if (nomeEstudante === "PARE" || nomeEstudante === "Pare" || nomeEstudante === "pare") {
        break;
    }
    
    estudantes.push(nomeEstudante);
}

function exibirEstudantes(estudantes) {
    if (estudantes.length > 0) {
        console.log("Lista de estudantes cadastrados:");
        estudantes.forEach(function(estudante, indice) {
            console.log((indice + 1) + ". " + estudante);
        });
    } else {
        console.log("Nenhum estudante cadastrado.");
    }
}


exibirEstudantes(estudantes);
