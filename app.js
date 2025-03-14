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

function mmc_mdc(tipo, valoresId, textoResultadoId){
    var textoResultado = document.querySelector(textoResultadoId)
    const valores = document.querySelector(valoresId).value .split(',');
    var resultado =  1;
    const listaMultiplos = [];
    
    if(tipo=='mmc'){
        var multiplo = 2;
        var qtdValores = valores.length;
        var somaValores = 0;
        var somarMultiplo=true;
        var multiploNaoFoiAdicionado = true;
        while(true){   
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
                    if(multiploNaoFoiAdicionado){
                        listaMultiplos.push(multiplo);
                        multiploNaoFoiAdicionado=false;
                    }
                    valores[i] = valor/multiplo;
                    somarMultiplo = false;
                    console.log(valores[i]);
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
    }
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