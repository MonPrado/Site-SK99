// Função para adicionar uma nova linha na tabela
document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura dos valores do formulário
    var nome = document.getElementById("nome").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var produto = document.getElementById("produto").value;
    var valor = parseFloat(document.getElementById("valor").value);

    // Verificação da validade da quantidade e do valor
    if (quantidade <= 0 || isNaN(quantidade)) { // Modificado <= 0
        alert("Quantidade inválida.");
        return;
    }
    
    if (valor <= 0 || isNaN(valor)) { // Modificado <= 0
        alert("Valor inválido.");
        return;
    }

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
    cellQuantidade.textContent = quantidade;
    cellValorUnitario.textContent = formatarValorMonetario(valor);

    // Verificação da validade da quantidade e do valor
    if (quantidade <= 0 || isNaN(quantidade)) { // Modificado <= 0
        cellQuantidade.textContent = "Quantidade Inválida";
        cellQuantidade.style.color = "red";
        cellValorTotal.textContent = ""; // Limpa o valor total
    } else if (valor <= 0 || isNaN(valor)) { // Modificado <= 0
        cellValorUnitario.textContent = "Valor Inválido";
        newRow.style.backgroundColor = "red";
        cellNome.style.color = "white";
        cellProduto.style.color = "white";
        cellQuantidade.style.color = "white";
        cellValorUnitario.style.color = "white";
        cellValorTotal.textContent = ""; // Limpa o valor total
    } else {
        // Quantidade e valor válidos, calcula o valor total e formata
        cellValorTotal.textContent = formatarValorMonetario(calculoTotal(quantidade, valor));
    }

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("produto").selectedIndex = 0;
    document.getElementById("valor").value = "";
});
