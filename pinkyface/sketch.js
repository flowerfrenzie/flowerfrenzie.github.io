function setup() {
  createCanvas(800, 800);
  background(250, 80, 130);
 
  frameRate(10)
}

function draw() {
  // Face
  stroke(0);
  strokeWeight(3);
  fill(960, 40, 98);
  ellipse(width/2, height/2, 600, 600);
  circle(169, 169, 50,);
  circle(120,200, 90,);
  circle(205,120,90)
  
  // Blush
  noStroke();
  fill(255, 56, 192, 150);
  ellipse(200, 400, 100, 100);
  ellipse(600, 400, 100, 100);
 
  // Left Eye  
  stroke(0);
  strokeWeight(3);
  fill (400)
  noStroke();
  fill (400);
  ellipse(280, 305, 60, 100);
  

  // Right Eye
  stroke(0,4, 255);
  strokeWeight(3)
  fill (250);
   noStroke();
  fill (400);
  ellipse(520, 305, 60, 100);
 
  // Nose
  fill (305, 13, 300, 150);
  triangle(400, 350, 350, 400, 450, 400)
  
  // Mouth
  frameRate(10)
  fill(310,85, 110);
  arc(width/2, 530, 180, random(180), 0, PI + QUARTER_PI, CHORD);
  if (mouseIsPressed) {
  fill(random(300), random(300), random(300));
  } else {
    fill(random(255));  
  // fill(random(255), random(255),random(255));  
  }
 
  noStroke(0);
  ellipse(mouseX, mouseY, 120, 120);
 
}