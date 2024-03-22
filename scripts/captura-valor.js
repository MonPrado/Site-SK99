var titulo = document.querySelector(".titulo_secao");
titulo.textContent = "Lista de Encomendas";

//Captura todos os clientes que fizeram encomendas 
var clientes = document.querySelectorAll(".linhas");

//Passa por cada encomenda calculando o valor total 
for (var count = 0; count < clientes.length; count++) {

    //Captura a quantidade encomendada
    var qtde = parseInt(clientes[count].querySelector(".info-qtde").textContent);
    //Captura o valor unitário do produto 
    var unitario = parseFloat(clientes[count].querySelector(".info-valor").textContent);

    //Valida a quantidade 
    if (qtde <= 0 || isNaN(qtde)) {
        // Quando NOK, avisa o usuário
        clientes[count].querySelector(".info-qtde").textContent = "Quantidade Inválida";
        clientes[count].querySelector(".info-qtde").style.color = "red";
        clientes[count].querySelector(".info-valor").textContent = formatarValorMonetario(unitario);
    } else {
        //Quantidade OK --- Prosseguir
        if (unitario <= 0 || isNaN(unitario)) {
            // Quando NOK, avisa o usuário
            clientes[count].querySelector(".info-valor").textContent = "Valor Inválido";
            clientes[count].style.backgroundColor = "red";
            clientes[count].querySelector(".info-nome").style.color = "white";
            clientes[count].querySelector(".info-produto").style.color = "white";
            clientes[count].querySelector(".info-qtde").style.color = "white";
            clientes[count].querySelector(".info-valor").style.color = "white";
            clientes[count].querySelector(".info-valor-total").style.color = "white";

        } else {
            //Quantidade ok, prossegue
            //Calcula o valor total da encomenda 
            clientes[count].querySelector(".info-valor").textContent = formatarValorMonetario(unitario);
            clientes[count].querySelector(".info-valor-total").textContent = formatarValorMonetario(calculoTotal(qtde, unitario));
        }
    }
}

function calculoTotal(qtde, unitario) {
    
    var total = 0;
    total = qtde * unitario;

    return total;
}

//Função para calcular o valor total de encomendas 
function formatarValorMonetario(valor) {
    var formReal = 0;
    formReal = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formReal;
}