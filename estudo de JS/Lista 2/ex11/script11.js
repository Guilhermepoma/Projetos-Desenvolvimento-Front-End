function calcularDescontoProgressivo() {
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    let desconto = 0;

    if (isNaN(valorCompra) || valorCompra < 0) {
        alert("Por favor, insira um valor de compra válido e não negativo.");
        return;
    }

    if (valorCompra <= 100) {
        desconto = 0.05; // 5%
    } else if (valorCompra <= 500) {
        desconto = 0.10; // 10%
    } else {
        desconto = 0.15; // 15%
    }

    const valorDesconto = valorCompra * desconto;
    const valorFinal = valorCompra - valorDesconto;

    alert(`Valor da compra: R$ ${valorCompra.toFixed(2)}\nDesconto aplicado: ${desconto * 100}%\nValor do desconto: R$ ${valorDesconto.toFixed(2)}\nValor final: R$ ${valorFinal.toFixed(2)}`);
}
