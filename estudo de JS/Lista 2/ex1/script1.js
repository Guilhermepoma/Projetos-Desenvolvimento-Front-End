function calcular() {
    const raio = document.getElementById("raio").value;
    const area = 3.14 * raio * raio;
    const diametro = 2 * raio;
    alert(`Área: ${area}\nDiâmetro: ${diametro}`);
}