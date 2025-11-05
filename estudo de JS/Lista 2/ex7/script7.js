function verificarMaioridade() {
    const idade = parseInt(document.getElementById("idade").value);

    if (isNaN(idade) || idade < 0) {
        alert("Por favor, insira uma idade válida e não negativa.");
        return;
    }

    if (idade >= 18) {
        alert("A pessoa é maior de idade.");
    } else {
        alert("A pessoa é menor de idade.");
    }
}
