function inserirCaractere(caractere, entryId){
    var entry = document.querySelector(entryId);

    entry.value = entry.value+caractere;
}
function deletarCaractere(entryId){
    var entry = document.querySelector(entryId);

    entry.value = entry.value.slice(0,-1);
}
function deletarTodosCaractere(entryId){
    var entry = document.querySelector(entryId);

    entry.value = '';
}

function operacaoBasica(entryId){
    var entry = document.querySelector(entryId);
    var operacao = document.querySelector(entryId).value;

    resultado = eval(operacao);
    entry.value = resultado;
}