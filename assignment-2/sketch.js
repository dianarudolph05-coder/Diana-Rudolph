//Name: Diana Rudolph
//Email: rudolph.d@northeastern.edu
//Course: Prototyping with Code
//Lab: 
//Assignment: SelfPortrait
//Title: Diana's Face

  function setup() {
  createCanvas(600, 600);
  noLoop(); // draws once (simpler, fewer issues)
  }
  function draw() {
  background(245);
  let shirtColor = color(70, 100, 180);
  let skinColor = color(235, 200, 170);
  let hairColor = color(45, 30, 25);
  let accent = color(200, 120, 140);
  let silver = color(100, 100, 120);
  //bkg
  noStroke();
  fill(230);
  rect(0, 420, width, 180);
  //hair
  fill(hairColor);
  ellipse(300, 225, 270, 260);
  rect(170, 240, 60, 180);
  rect(370, 240, 60, 180);
  //shirt
  fill(shirtColor);
  rect(220, 360, 160, 170);
  //neck
  fill(skinColor);
  rect(285, 330, 30, 50);
  //face
  fill(skinColor);
  ellipse(300, 260, 210, 250);
  //ears
  ellipse(195, 260, 35, 55);
  ellipse(405, 260, 35, 55);
  //hoop earrings
  noFill();
  stroke(silver);
  strokeWeight(5);
  ellipse(185, 290, 30, 30);
  ellipse(415, 290, 30, 30);
  //eyes
  noStroke();
  fill(255);
  ellipse(255, 260, 45, 30);
  ellipse(345, 260, 45, 30);
  fill(40);
  ellipse(255, 260, 14, 14);
  ellipse(345, 260, 14, 14);
  //eyebrows
  stroke(40);
  strokeWeight(5);
  noFill();
  line(230, 235, 275, 230);
  line(325, 230, 370, 235);
  // glasses
  stroke(40);
  strokeWeight(4);
  rect(225, 245, 60, 40);
  rect(315, 245, 60, 40);
  line(285, 265, 315, 265);
  line(225, 265, 200, 260);
  line(375, 265, 400, 260);
  //bangs
  noStroke();
  fill(hairColor); 
  triangle(200, 150, 420, 250, 360, 120);
  //nose
  noStroke();
  fill(220, 180, 150);
  triangle(300, 270, 290, 305, 310, 305);
  //septum
  noFill();
  stroke(120);
  strokeWeight(2);
  arc(300, 308, 12, 8, 0, PI);
  //mouth
  stroke(accent);
  strokeWeight(5);
  arc(300, 330, 60, 35, 0, PI);

  //title
  fill(10);
  textSize(18);
  textAlign(RIGHT, BOTTOM);
  text("Diana's Face", width - 15, height - 15);}