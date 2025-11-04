function calculo_notas() {
    const not1 = document.getElementById("not_1").value;
    const not2 = document.getElementById("not_2").value;
    const not3 = document.getElementById("not_3").value;

    const media = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;

    // Exibe o resultado
    alert(`A média das notas é: ${media.toFixed(2)}`);
}