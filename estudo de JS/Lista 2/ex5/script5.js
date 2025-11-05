function calcularJurosSimples() {
    const capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
    const taxaJuros = parseFloat(document.getElementById("taxaJuros").value) / 100; // Convertendo para decimal
    const tempoMeses = parseFloat(document.getElementById("tempoMeses").value);

    if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoMeses) || capitalInicial < 0 || taxaJuros < 0 || tempoMeses < 0) {
        alert("Por favor, insira valores válidos e não negativos.");
        return;
    }

    // Fórmula: Montante = Capital * (1 + (Taxa * Tempo))
    const montante = capitalInicial * (1 + (taxaJuros * tempoMeses));

    alert(`O montante final é: R$ ${montante.toFixed(2)}`);
}
