//inseri caractere no entry
function inserirCaractere(caractere, entryId){
    var entry = document.querySelector(entryId);

    entry.value = entry.value+caractere;
}

//deleta um caractere
function deletarCaractere(entryId){
    var entry = document.querySelector(entryId);

    entry.value = entry.value.slice(0,-1);
}

//deleta tudo
function deletarTodosCaractere(entryId){
    var entry = document.querySelector(entryId);

    entry.value = '';
}

//operações de soma, subtração, multiplicação, divisão e potencia
function operacaoBasica(entryId){
    var entry = document.querySelector(entryId);
    var operacao = document.querySelector(entryId).value;

    //calcula a operação
    resultado = eval(operacao);
    entry.value = resultado;
}

function porcentagem(tipo, valor1Id, valor2Id, resultadoId){
    var valor1 = document.querySelector(valor1Id).value;
    var valor2 = document.querySelector(valor2Id).value;
    var textoResultado = document.querySelector(resultadoId);

    //calcula a porção de um total
    if(tipo=='porcao'){
        var resultado = valor2*(valor1/100);
    }
    //calcular a porcentagem de uma porção em relação a um total
    if(tipo=='porcentagem'){
        var resultado = valor1/(valor2)*100+"%";
    }
    //aumenta x% de um total
    if(tipo=='aumento'){
        var resultado = parseInt(valor2)+(valor2*(valor1/100));
    }
    //desconta x% de um total
    if(tipo=='desconto'){
        var resultado = parseInt(valor2)-(valor2*(valor1/100));
    }
    textoResultado.innerHTML = resultado;
}

function mmc_mdc(tipo, valoresId, textoResultadoId){
    var textoResultado = document.querySelector(textoResultadoId)
    const valores = document.querySelector(valoresId).value .split(',');
    //resultado é 1, pois vai ser múltiplicado
    var resultado =  1;
    const listaMultiplos = [];

    //valor começa com 2 e aumenta + 1 se não for divisível por ninguém
    var multiplo = 2;
    var qtdValores = valores.length;
    //somaValores é a soma de todos os valores, quando todos os valores forem 1 a soma deles vai ser == a quantidade de valores
    var somaValores = 0;
    //caso o múltiplo não for divisível por nenhum valor ele é somado +1
    var somarMultiplo=true;
    //evita a repetição do mesmo múltiplo caso ele seja divisível por mais de um valor(apenas para mmc)
    var multiploNaoFoiAdicionado = true;
    //conta quantas vezes um multiplo dividiu, se for mútiplo de todos os valores ele é salvo(apenas para mdc)
    var vezesMultiplicado = 0;

    while(true){   
        vezesMultiplicado=0;
        somarMultiplo=true;
        somaValores=0;
        multiploNaoFoiAdicionado = true;
        for(let i=0;i<qtdValores;i++){
            valor = parseInt(valores[i])
            somaValores += valor;
            console.log(valor);
            console.log(multiplo);
            if(valor%multiplo==0){
                console.log('é divisivel');
                if(multiploNaoFoiAdicionado && tipo=='mmc'){
                    listaMultiplos.push(multiplo);
                    multiploNaoFoiAdicionado=false;
                }
                else if(tipo=='mdc'){
                    vezesMultiplicado++;
                }
                valores[i] = valor/multiplo;
                somarMultiplo = false;
                console.log(valores[i]);
            }
            if(vezesMultiplicado==qtdValores){
                listaMultiplos.push(multiplo);
            }
        }
        if(somarMultiplo){
            multiplo++;
        }
        if(somaValores==qtdValores){
            break;
        }
    }
    console.log(listaMultiplos);

    //multiplica os múltiplos
    for(const valor of listaMultiplos){
        resultado = resultado*valor;
    }

    textoResultado.innerHTML = resultado;
}

function equacao(aId, bId, cId, textoResultadoX1Id){
    var a = parseInt(document.querySelector(aId).value);   
    var b = parseInt(document.querySelector(bId).value);   
    var c = parseInt(document.querySelector(cId).value);   
    var textoResultadoX1 = document.querySelector(textoResultadoX1Id);
    
    var raizDelta = Math.sqrt(b**2-4*a*c);
    var x1 = ((0-b)+raizDelta)/(2*a);
    var x2 = ((0-b)-raizDelta)/(2*a);
    
    textoResultadoX1.innerHTML = "x1="+x1+" e x2="+x2;
}