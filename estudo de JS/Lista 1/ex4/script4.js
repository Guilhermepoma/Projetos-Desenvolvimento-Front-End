function gerenciamento() {
    const nome = document.getElementById("nome").value;
    const produto = document.getElementById("produto").value;
    const quant = parseInt(document.getElementById("quantidade").value);
    const preco = parseFloat(document.getElementById("preco").value);

    const total = quant * preco;
    alert(`Olá ${nome}, o total da compra do produto ${produto} é: R$ ${total.toFixed(2)}`);
}