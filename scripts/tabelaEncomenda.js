var titulo = document.querySelector(".titulo_secao");
titulo.textContent = "LISTA DE ENCOMENDAS";

var linhasTabela = document.querySelectorAll(".linhas");

for (var i = 0; i < linhasTabela.length; i++) {

    var quantidade = parseInt(linhasTabela[i].querySelector(".info_qtde").textContent);
    var valoruni = parseFloat(linhasTabela[i].querySelector(".info_valor").textContent);

    if (quantidade <= 0 || isNaN(quantidade)) {
        linhasTabela[i].querySelector(".info_qtde").textContent = "QUANTIDADE INVÁLIDA!";
        linhasTabela[i].querySelector(".info_qtde").style.color = "#B60005";

        linhasTabela[i].querySelector(".info_valor").textContent = formValorMonetario(valoruni);

    } else {
        if (valoruni <= 0 || isNaN(valoruni)) {
            linhasTabela[i].querySelector(".info_valor").textContent = "VALOR INVÁLIDO!";
            linhasTabela[i].style.backgroundColor = "#B60005";
            linhasTabela[i].style.color = "white";
        } else {
            linhasTabela[i].querySelector(".info_valor").textContent = formValorMonetario(valoruni);
            linhasTabela[i].querySelector(".info_total").textContent = formValorMonetario(calcularTotal(quantidade, valoruni));
        }
    }
}

function formValorMonetario(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcularTotal(quantidade, valoruni) {
    var total = 0;
    total = quantidade * valoruni;;

    return total;
}
