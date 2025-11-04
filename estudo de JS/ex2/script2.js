function calculo() {
    // Captura o valor do campo de entrada
    const temp = document.getElementById("temp").value;
    const Fahrenheit = (9 / 5) * temp + 32;

    // Exibe o resultado
    alert(`A temperatura em Fahrenheit é: ${Fahrenheit}°F`);
}