/* let a = prompt("Input password 1: ")
let b = prompt("Input password 2: ") */

/* let list1 = a.split()
let list2 = b.split() */


let a = "hola"
let b = "comoesta"

function genPass(a, b){
    let pass = ""
    if (1 < a.length <25000 && 1< b.length<25000){
        if(a.length>b.length){
            for (let i = 0; i<a.length; i++){
                if(b[i]!=undefined){
                    pass+=a[i]+b[i]
                }
                else if(b[i]==undefined){
                    pass+=a[i]
                }   
            }
        console.log(pass)
        }
        else{
            for (let i = 0; i<b.length; i++){
                if (a[i]!=undefined){
                    pass+=a[i]+b[i]
                }
                else if(a[i]==undefined){
                    pass+=b[i]
                }
            }    
        console.log(pass)
        }   
    }
}
genPass(a,b)

