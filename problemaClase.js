
function aleatorio(){
    let resultado 
    resultado = parseInt(Math.random()*100)
    return resultado
}

function countPairs(proyectCost,n,target){
    let pares =0
    if (5<= n <= 10**5){
        if (1<= target< 10**9){
            if (proyectCost.length == n){
                for (i=0; i<=proyectCost.length; i++) {
                    if (0 < proyectCost[i]<=(2*10**9)){
                        for (j=i; j<=proyectCost.length; j++){
                            if (Math.abs(proyectCost[i]-proyectCost[j]) == target && proyectCost[i]!=proyectCost[j]){
                                // console.log(proyectCost[i],proyectCost[j])
                                pares+=1
                            }
                        } 
                    }
                }
                console.log(pares)
            }
        }
    }
}


function proyectCost(n){
    let proyectCost = []
    for(i=1; i<=n; i++){
        proyectCost.push(aleatorio())
    }
    return proyectCost
}


let n = 5
let target = 2
let pares = 0

// [1,5,3,4,2]
countPairs(proyectCost(n),n,target)

