// Função para adicionar uma nova linha na tabela
document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura dos valores do formulário
    var nome = document.getElementById("nome").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var produto = document.getElementById("produto").value;
    var valor = parseFloat(document.getElementById("valor").value);

    // Verificação se todos os campos estão preenchidos
    if (!nome || !produto) {
        alert("Por favor, preencha todos os campos.");
        return; // Para a execução da função se algum campo estiver vazio
    }

    // Criação de uma nova linha na tabela
    var table = document.querySelector(".tabela_principal tbody");
    var newRow = table.insertRow();

    // Criação das células da nova linha
    var cellNome = newRow.insertCell(0);
    var cellProduto = newRow.insertCell(1);
    var cellQuantidade = newRow.insertCell(2);
    var cellValorUnitario = newRow.insertCell(3);
    var cellValorTotal = newRow.insertCell(4);

    // Definição do conteúdo das células
    cellNome.textContent = nome;
    cellProduto.textContent = produto;

    // Verificação da validade da quantidade
    if (quantidade <= 0 || isNaN(quantidade)) {
        cellQuantidade.textContent = "Quantidade Inválida";
        cellQuantidade.style.color = "red"; // Estilo para indicar que é inválido
        cellValorTotal.textContent = ""; // Limpa o valor total
    } else {
        cellQuantidade.textContent = quantidade;
    }

    // Verificação da validade do valor
    if (valor <= 0 || isNaN(valor)) {
        cellValorUnitario.textContent = "Valor Inválido";
        newRow.style.backgroundColor = "red";
        cellNome.style.color = "white";
        cellProduto.style.color = "white";
        cellQuantidade.style.color = "white";
        cellValorUnitario.style.color = "white";
        cellValorTotal.textContent = ""; // Limpa o valor total
    } else {
        cellValorUnitario.textContent = formatarValorMonetario(valor);
        cellValorTotal.textContent = formatarValorMonetario(calculoTotal(quantidade, valor));
    }

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("produto").selectedIndex = 0;
    document.getElementById("valor").value = "";
});
