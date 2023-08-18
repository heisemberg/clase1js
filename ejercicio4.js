function aleatorio(){
    let resultado 
    resultado = parseInt(Math.random()*10000)
    return resultado
}

function rellenar(){
    let lista = []
    for(i=1; i<=10; i++){
        lista.push(aleatorio())
    }
    return lista
}

function mostrar(lista){
    for (j=1; j<=10; j++){
        console.log(j, "." ,lista[j-1])
    } 
}

mostrar(rellenar())