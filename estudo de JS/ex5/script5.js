function novo_salario() {

    const nome = document.getElementById("nome").value;
    const salario_atual = parseFloat(document.getElementById("salario").value);

    const aumento = salario_atual * 0.05;
    const novo_salario = salario_atual + aumento;

    alert(`Olá ${nome}, seu novo salário é R$ ${novo_salario.toFixed(2)}`);
}