function area() {
    const altura = document.getElementById("altura").value;
    const base = document.getElementById("base").value;

    const area = (altura * base) / 2;
    alert(`A área é: ${area}`);
}