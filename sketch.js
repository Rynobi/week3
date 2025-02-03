function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0, 150, 50, 10);
    fill('aquamarine')
    if(mouseX < 400){
        rect(mouseX,mouseY,200,200);
    }else{
        rect(mouseX,mouseY,10,10,10);
    }
for(var i = 0; i < 10000; i++){
    rect((i*10)%width,(i*10)%width,10,10)
}

    }