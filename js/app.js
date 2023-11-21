function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    switch(tipo) {
        case 'pista':
            comprarIngresso(tipo, qtdPista);
            break;
        case 'superior':
            comprarIngresso(tipo, qtdSuperior);
            break;
        case 'inferior':
            comprarIngresso(tipo, qtdInferior);
            break;
    }
}

function comprarIngresso(id, qtdLocal) {
    let qtd = parseInt(document.getElementById('qtd').value);

    if(qtdLocal >= qtd) {
        qtdLocal -= qtd
        document.getElementById(`qtd-${id}`).textContent = qtdLocal;

        alert('Compra realizada com sucesso');
    } else {
        alert(`Quantidade indisponível para o tipo ${id}`);
    }
}