/* let a = prompt("Input password 1: ")
let b = prompt("Input password 2: ") */

/* let list1 = a.split()
let list2 = b.split() */


let a = "david"
let b = "lucia"

function genPass(a, b){
    let pass = ""
    if (a.length==b.length){
        for (i = 0; i<a.length; i++){
            for (j = 0; j<b.length; j++){ 
                if (i == j){
                    pass+=a[i]+b[j]
                }
            }
        }
        console.log(pass)
    }
    else{
        console.log("Tienen tamaño diferente")
    }
}
genPass(a,b)

