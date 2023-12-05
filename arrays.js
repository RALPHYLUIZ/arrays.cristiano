let nomes = [
    "Marie Curie",
    "Albert Einstein",
    "Ada Lovelace",
    "Charles Darwin",
    "Margaret Hamilton",
    "Stephen Hawking",
    "Katherine Johnson",
    "Nikola Tesla",
    "Mary Jackson",
    "Isaac Newton",
    "Dorothy Vaughan",
];

//EXIBE O CONTEÚDO DO ARRAY:
console.log('EXIBE OS VALORES DOS ITENS DO ARRAY:');
console.log(nomes);

//EXIBE A QUANTIDADE DE ITENS DO ARRAY:
console.log('EXIBE A QUANTIDADE DE ITENS DO ARRAY:');
console.log(nomes.length);

//ADICIONA UM ITEM NO INICIO OU TOPO DO ARRAY:
nomes.unshift('TESTE DE ADIÇÃO NO INICIO OU TOPO');
console.log(nomes);

//ADICIONA UM ITEM NO FINAL DO ARRAY:
nomes.push('TESTE DE ADIÇÃO NO FINAL');
console.log(nomes);

//REMOVE UM ITEM DO TOPO DO ARRAY:
nomes.shift();

//REMOVE UM ITEM DO FINAL DO ARRAY:
nomes.pop();
console.log(nomes);

//CONTA A QUANTIDADE DE NOMES DO ARRAY:
function contarNomes() {
    document.querySelector('#totalNomes').innerHTML = nomes.length;
}

//LISTAGEM DOS NOMES:
function listarNomes(){
    let listaNome = '';
    for(let indice = 0; indice < nomes.length; indice++){
        listaNome += '<div>' + nomes[indice] + '<div/>';
        console.log('VALOR DO INDICE:' + indice);
        console.log(listaNome);

    }

    document.querySelector('#listaNomes').innerHTML = listaNome;
}


//REMOÇÃO DE NOMES:
function removerNomes(){

    nomes.shift();
    contarNomes();

    let elementoNomes = document.getElementById('listaNomes');

    while(elementoNomes.firstChild){
        elementoNomes.removeChild(elementoNomes.firstChild);
    }

    listarNomes();
}


