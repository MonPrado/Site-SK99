var titulo = document.querySelector(".titulo_secao");
titulo.textContent = "Lista de Encomendas";

var linhasTabela = document.querySelectorAll(".linhas");

for (var i = 0; i < linhasTabela.length; i++) {
    var qtde = linhasTabela[i].querySelector(".info-qtd").textContent;
    var valor = linhasTabela[i].querySelector(".info-valor-unit").textContent;
    var calculoTotal = qtde * valor;

    linhasTabela[i].querySelector(".info-valor-total").textContent = "R$ " + calculoTotal.toFixed(2);
}