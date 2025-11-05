function converterMoeda() {
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);
    const cotacaoDolar = parseFloat(document.getElementById("cotacaoDolar").value);

    if (isNaN(valorDolar) || isNaN(cotacaoDolar) || valorDolar < 0 || cotacaoDolar <= 0) {
        alert("Por favor, insira valores válidos e positivos.");
        return;
    }

    const valorReais = valorDolar * cotacaoDolar;

    alert(`O valor em Reais é: R$ ${valorReais.toFixed(2)}`);
}
