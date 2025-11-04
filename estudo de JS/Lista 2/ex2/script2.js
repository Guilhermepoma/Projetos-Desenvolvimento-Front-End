function verificador() {
    const valor = document.getElementById("valor").value;

    const numero = parseFloat(valor);

    if (numero % 2 === 0) {
        alert("O número é par");
    } else {
        alert("O número é ímpar");
    }
}
