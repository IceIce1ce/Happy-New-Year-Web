var fireworks = [];
var gravity;

function setup(){
    createCanvas(1920, 1080);
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    background(0);
}

function draw(){
    colorMode(RGB);
    background(0, 0, 0, 25);
    if(random(1) < 0.07){
        fireworks.push(new Firework());
    }
    for(var i = fireworks.length - 1; i >= 0; i--){
        fireworks[i].update();
        fireworks[i].show();
        if(fireworks[i].done()){
            fireworks.splice(i, 1);
        }
    }
}