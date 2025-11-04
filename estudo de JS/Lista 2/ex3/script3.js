function calcular() {
    var distancia = parseFloat(document.getElementById("distancia").value);
    var velo_med = parseFloat(document.getElementById("velo_med").value);

    var resultado = distancia / velo_med;

    alert(`Resultado é ${resultado}`)
}