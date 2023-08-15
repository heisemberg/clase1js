//Funcion que no retorna
function mensaje(){
    console.log("Soy un mensaje")
}

//Funcion que retorna
function retorno(){
    return "hola mundo"
}
retorno()
mensaje ="hola mundo"
console.log(typeof retorno())
console.log(retorno())

//Funcion que no retorna pero recibe datos
function areaRectangulo(b, h){
    resultado = b*h
    console.log(resultado)
}
areaRectangulo(4, 5)

//Funcion  que retorna y recibe parametros
function concatenacion(a,b){
    resultado= a+b
    return resultado
    }

concatenacion("CAMPUS", "LAND")
console.log(concatenacion("CAMPUS", "LAND"))
console.log(resultado)