const estudantes = [];

while (true) {
    const nomeEstudante = prompt("Digite o nome do estudante para cadastrar. Quando acabar digite 'PARE'.");
    
    if (nomeEstudante === "PARE") {
        break;
    }
    
    estudantes.push(nomeEstudante);
}

function exibirEstudantes(estudantes) {
    if (estudantes.length > 0) {
        console.log("Lista de estudantes cadastrados:");
        for (let i = 0; i < estudantes.length; i++) {
            console.log((i + 1) + ". " + estudantes[i]);
        }
    } else {
        console.log("Nenhum estudante cadastrado.");
    }
}


exibirEstudantes(estudantes);