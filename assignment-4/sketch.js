/*Class: ARTG-2262+63: Prototyping with Code
Name: Diana Rudolph
Email: rudolph.d@northeaswtern.edu
Assignment: 6
Instructions:
- Click and drag to draw
- Press R for red, G for green, B for blue, K for black
- Use scroll wheel to change brush size
- Press S to save*/
let col;
let brushSize = 10;
function setup() {
  createCanvas(800, 600);
  background(255);
  col = color(0);}
function draw() {
  if (mouseIsPressed) {
    fill(col);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);}}
function keyPressed() {
  if (key === 'R' || key === 'r') col = color(255, 0, 0);
  if (key === 'G' || key === 'g') col = color(0, 200, 0);
  if (key === 'B' || key === 'b') col = color(0, 0, 255);
  if (key === 'K' || key === 'k') col = color(0);
  if (key === 'S' || key === 's') saveCanvas('my_drawing', 'png');}
function mouseWheel(event) {
  brushSize = constrain(brushSize - event.delta * 0.05, 2, 100);
  return false;}