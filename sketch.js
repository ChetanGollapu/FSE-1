function setup() {
  createCanvas(400, 400);
}


let rad=50
let xpos= 100;
let ypos= 50;
let xspeed= 1.8;
let yspeed= 1.8;
let xdirection=1;
let ydirection=2;



function draw() {
  background(220);
  fill('red')
  strokeWeight(4); 
  text("hi", 50, 50);
  stroke(255, 206, 0);
  xpos= xpos+xspeed*xdirection;
  ypos= ypos+yspeed*ydirection;
  
   if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }   
  circle(xpos, ypos, rad, rad);
 
  fill('blue');
  stroke('black');
  strokeWeight(5);
  triangle(200, 200, 300, 130, 100, 200);
  fill('blue');
  stroke('red');
  strokeWeight(5);
 
  
  
  
  fill('purple');
  stroke('red');
  strokeWeight(5);
  xpos= xpos+xspeed*xdirection;
  ypos= ypos+yspeed*ydirection;
  
   if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }   
  rect(xpos, ypos, rad, rad);
  

  
  

  
  
}