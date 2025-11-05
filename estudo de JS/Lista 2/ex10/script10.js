function calcularSalarioTotal() {
    const salarioBase = parseFloat(document.getElementById("salarioBase").value);
    const numHorasExtras = parseFloat(document.getElementById("numHorasExtras").value);
    const valorHoraExtra = parseFloat(document.getElementById("valorHoraExtra").value);

    if (isNaN(salarioBase) || isNaN(numHorasExtras) || isNaN(valorHoraExtra) || salarioBase < 0 || numHorasExtras < 0 || valorHoraExtra < 0) {
        alert("Por favor, insira valores válidos e não negativos.");
        return;
    }

    const valorTotalHorasExtras = numHorasExtras * valorHoraExtra;
    const salarioTotal = salarioBase + valorTotalHorasExtras;

    alert(`O salário total, incluindo horas extras, é: R$ ${salarioTotal.toFixed(2)}`);
}
