function calcularRendimentoCarro() {
    const distanciaKm = parseFloat(document.getElementById("distanciaKm").value);
    const combustivelGastoL = parseFloat(document.getElementById("combustivelGastoL").value);

    if (isNaN(distanciaKm) || isNaN(combustivelGastoL) || distanciaKm < 0 || combustivelGastoL <= 0) {
        alert("Por favor, insira valores válidos e positivos para distância e combustível gasto.");
        return;
    }

    const consumoMedioKmL = distanciaKm / combustivelGastoL;

    alert(`O consumo médio do carro é: ${consumoMedioKmL.toFixed(2)} km/l`);
}
