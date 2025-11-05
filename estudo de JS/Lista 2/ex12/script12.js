function converterTempo() {
    const valorMinutos = parseInt(document.getElementById("valorMinutos").value);

    if (isNaN(valorMinutos) || valorMinutos < 0) {
        alert("Por favor, insira um valor em minutos válido e não negativo.");
        return;
    }

    const horas = Math.floor(valorMinutos / 60);
    const minutos = valorMinutos % 60;

    alert(`${valorMinutos} minutos correspondem a ${horas} horas e ${minutos} minutos.`);
}
