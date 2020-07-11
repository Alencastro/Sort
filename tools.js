function rand(vzs,arr){
    for (let c = 0; c < vzs; c++) {
    arr.push(parseInt(Math.random()*-300))
    }
}

function swap(lista,contador) {
    let atual = lista[contador+1]
    lista.splice(contador+1,1)
    lista.splice(contador,0,atual)
}

function sorting() {
    for (var c = 0; c < arr.length; c++) { 
        if (arr[c]>arr[c+1]) {
            swap(arr,c)
            c=-1
        }
    }
} 