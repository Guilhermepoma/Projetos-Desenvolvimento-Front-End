function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById("altura").value);
    const sexo = document.getElementById("sexo").value.toLowerCase();
    let pesoIdeal;

    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, insira uma altura válida e positiva.");
        return;
    }

    if (sexo === "masculino" || sexo === "m") {
        // Masculino: 72.7 * h - 58
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "feminino" || sexo === "f") {
        // Feminino: 62.1 * h - 44.7
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        alert("Por favor, insira um sexo válido (masculino/m ou feminino/f).");
        return;
    }

    alert(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
}
