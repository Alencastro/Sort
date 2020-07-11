let arr = []
let rectX = 0
let counter = 0 
rand(50,arr)

let barWidth = 400 / arr.length

function showAndSort(){
    for (let c = 0; c < arr.length; c++) {
        fill(100)
        stroke(255)
        rect(rectX,400,barWidth,arr[c])
        rectX+=barWidth
    }
    if (arr[counter]<arr[counter+1]) {
        swap(arr,counter)
        counter=-1
    }
    counter++
    rectX=0
}
function setup () {
    createCanvas(400,400)
    frameRate(2000)
}
function draw() {
    background(0)
    showAndSort()
}