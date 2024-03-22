document.addEventListener("DOMContentLoaded", function() {
    var botaoAdicionar = document.querySelector("#adicionar-encomenda");

    botaoAdicionar.addEventListener("click", function(event) {
        event.preventDefault();

        var nome = document.getElementById("nome").value;
        var produtoSelect = document.getElementById("produto");
        var produto = produtoSelect.options[produtoSelect.selectedIndex].text;
        var quantidade = parseInt(document.getElementById("quantidade").value);
        var valor = parseFloat(document.getElementById("valor").value.replace(',', '.')); 
        var newRow = document.createElement("tr");
        newRow.classList.add("linhas");

        // Verifica se algum campo está vazio
        if (!nome || !produto || isNaN(quantidade) || isNaN(valor)) {
            // Exibe um popup se algum campo estiver vazio
            alert("Por favor, preencha todos os campos.");
        } else {
            newRow.innerHTML += `
                <td class="info_nome">${nome}</td>
                <td class="info_produto">${produto}</td>
            `;

            // Verifica se a quantidade é válida
            if (quantidade <= 0) {
                newRow.innerHTML += `<td class="info_qtde" style="color: red;">QUANTIDADE INVÁLIDA!</td>`;
            } else {
                newRow.innerHTML += `<td class="info_qtde">${quantidade}</td>`;
            }

            // Verifica se o valor é válido
            if (valor <= 0) {
                newRow.style.backgroundColor = "#B60005";
                newRow.style.color = "white";
                newRow.innerHTML += `<td class="info_valor">VALOR INVÁLIDO</td>`;
                newRow.innerHTML += `<td class="info_total"></td>`;
            } else {
                newRow.innerHTML += `<td class="info_valor">${formValorMonetario(valor)}</td>`;
                newRow.innerHTML += `<td class="info_total">${formValorMonetario(calcularTotal(quantidade, valor))}</td>`;
            }

            // Adiciona a nova linha à tabela
            var tabela = document.querySelector(".tabela tbody");
            tabela.appendChild(newRow);
            
            // Limpa o formulário após adicionar a encomenda
            document.getElementById("formAdicionarEncomenda").reset();
        }
    });
});
