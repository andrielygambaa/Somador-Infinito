let listaDeNumeros = [];

function adicionar() {
    const input = document.getElementById('numInput');
    const valor = parseFloat(input.value);

    if (!isNaN(valor)) {
        listaDeNumeros.push(valor);
        
        const textoLista = document.getElementById('listaTexto');
        textoLista.innerText = `[ ${listaDeNumeros.join(' , ')} ]`;

        input.value = '';
        input.focus();
    }
}

function gerarRelatorio() {
    let somaTotal = 0;
    let i = 0;

     while (i < listaDeNumeros.length) {
        somaTotal += listaDeNumeros[i];
        i++;
    }

    document.getElementById('resultado').innerText = somaTotal;
}

function limparTudo() {
    
    listaDeNumeros = [];
    
    document.getElementById('listaTexto').innerText = "Nenhum número adicionado";
    document.getElementById('resultado').innerText = "0";
    document.getElementById('numInput').focus();
}