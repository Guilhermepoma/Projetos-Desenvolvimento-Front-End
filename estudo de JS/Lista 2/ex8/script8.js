function calcularMediaPonderada() {
    // Assumindo que o HTML terá campos para 3 notas e 3 pesos:
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const peso1 = parseFloat(document.getElementById("peso1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const peso2 = parseFloat(document.getElementById("peso2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const peso3 = parseFloat(document.getElementById("peso3").value);

    if (isNaN(nota1) || isNaN(peso1) || isNaN(nota2) || isNaN(peso2) || isNaN(nota3) || isNaN(peso3) || peso1 < 0 || peso2 < 0 || peso3 < 0) {
        alert("Por favor, insira notas e pesos válidos e não negativos.");
        return;
    }

    const somaProdutos = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    const somaPesos = peso1 + peso2 + peso3;

    if (somaPesos === 0) {
        alert("A soma dos pesos não pode ser zero.");
        return;
    }

    const mediaPonderada = somaProdutos / somaPesos;

    alert(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
}
