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

function porcentagem(tipo, valor1Id, valor2Id, resultadoId){
    var valor1 = document.querySelector(valor1Id).value;
    var valor2 = document.querySelector(valor2Id).value;
    var textoResultado = document.querySelector(resultadoId);

    
    if(tipo=='porcao'){
        var resultado = valor2*(valor1/100);
    }
    if(tipo=='porcentagem'){
        var resultado = valor1/(valor2)*100+"%";
    }
    if(tipo=='aumento'){
        var resultado = parseInt(valor2)+(valor2*(valor1/100));
    }
    if(tipo=='desconto'){
        var resultado = parseInt(valor2)-(valor2*(valor1/100));
    }
    textoResultado.innerHTML = resultado;
}