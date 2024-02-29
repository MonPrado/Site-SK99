//Captura todos os clientes que fizeram encomendas 
var clientes = document.querySelectorAll(".linhas");

//Passa por cada encomenda calculando o valor total 
for (var count = 0; count < clientes.length; count++) {

    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtde").textContent;
    //Captura o valor unitário do produto 
    var unitario = clientes[count].querySelector(".info-valor").textContent;

    //Valida a quantidade 
    if (qtde < 1 || isNaN(qtde)) {
        // Quando NOK, avisa o usuário
        clientes[count].querySelector(".info-qtde").textContent = "Quantidade Inválida";
        clientes[count].querySelector(".info-qtde").style.color = "red";
    } else {
        if (isNaN(unitario)) {
            // Quando NOK, avisa o usuário
            clientes[count].querySelector(".info-valor").textContent = "Valor Inválido";
            clientes[count].style.backgroundColor = "red";

        } else {
            //Quantidade ok, prossegue
            //Calcula o valor total da encomenda 
            clientes[count].querySelector(".info-valor-total").textContent = "R$ " + calculoTotal(qtde,unitario);
           
        }
    }


}

//Função para calcular o valor total de encomendas 
function calculoTotal(qtde, unitario) {
    var total = 0;
    total = qtde * unitario;

    return total;
} 