let i = 0
let lista = []

function aleatorio(){
    let resultado 
    resultado = parseInt(Math.random()*100000)
    return resultado
}

while (i < 10){
    lista.push(aleatorio())
    i+=1
}
console.log(lista)