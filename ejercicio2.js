function array(list){
    let sumas = []
    target = 10
    let i
    let j

    for (i of list){
        for (j of list){
            if (i + j  == target && i == j){
                list.shift()
            }
            else if (i + j  == target && i != j){
                sumas.push([i,j])
                list.shift()
            }        
        }
    }
    console.log(sumas)
}

let list= [5, 4 , 3, 6, 9 ,8]
array(list)