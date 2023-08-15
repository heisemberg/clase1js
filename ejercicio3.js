
let limite = 578934
let pares = 0
let impares = 0
let i = 0
while ( i <= limite){
    if (i % 2 == 0){
        pares += i
    }
    else if (i % 2 != 0){
        impares+= i
    }
    i += 1
}
console.log("la suma de impares es " + impares)
console.log("La suma de pares es "+ pares)