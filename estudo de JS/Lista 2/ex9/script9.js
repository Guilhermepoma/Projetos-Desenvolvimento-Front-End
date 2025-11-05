function calcularConsumoCombustivel() {
    const distanciaKm = parseFloat(document.getElementById("distanciaKm").value);
    const consumoMedioKmL = parseFloat(document.getElementById("consumoMedioKmL").value);

    if (isNaN(distanciaKm) || isNaN(consumoMedioKmL) || distanciaKm < 0 || consumoMedioKmL <= 0) {
        alert("Por favor, insira valores válidos e positivos para distância e consumo médio.");
        return;
    }

    const litrosGastos = distanciaKm / consumoMedioKmL;

    alert(`A quantidade de litros de combustível gastos foi: ${litrosGastos.toFixed(2)} L`);
}
