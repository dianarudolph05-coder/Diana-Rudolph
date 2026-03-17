//ARTG-2262/2263: Prototyping with Code
//Name: Diana Rudolph
//Email: rudolph.d@northeastern.edu
//Assignment: assignment 3 Pattern
//Title: very cute cat in my favorite colors
let exported = false;
function setup() {
  createCanvas(1024, 1024);
  pixelDensity(1);
  noLoop();
}
function draw() {
  drawGradientBackground();
  //grid
  const cols = 6;
  const rows = 6;
  const cellW = width / cols;
  const cellH = height / rows;
  const size = min(cellW, cellH) * 0.78;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c + 0.5) * cellW;
      const y = (r + 0.5) * cellH;
      //colors
      const alt = (r + c) % 2 === 0;
      const catColor = alt
        ? color(125, 45, 220) // purple
        : color(15, 175, 165); // teal
      //transparent circles
      noStroke();
      fill(255, 255, 255, 22);
      ellipse(x, y, size * 0.98, size * 0.98);
      drawCuteCatSilhouette(x, y, size, catColor);
    }
  }
  if (!exported) {
    //export part
    exported = true;
    saveCanvas("assignment[3]_pattern_Rudolph_Diana", "png");
  }
}
function drawGradientBackground() {
  const topColor = color(135, 90, 255);
  const bottomColor = color(40, 230, 205);
  for (let y = 0; y < height; y++) {
    const t = y / (height - 1);
    const c = lerpColor(topColor, bottomColor, t);
    stroke(c);
    line(0, y, width, y);
  }
  //bkg pattern
  noStroke();
  for (let i = -width; i < width * 2; i += 72) {
    fill(255, 255, 255, 12);
    push();
    translate(i, 0);
    rotate(radians(20));
    rect(0, 0, 18, height * 2);
    pop();
  }
}
function drawCuteCatSilhouette(cx, cy, s, catFill) {
  //proportions
  const headW = s * 0.5;
  const headH = s * 0.4;
  const earH = s * 0.38;
  //head pos
  const headCX = cx;
  const headCY = cy + s * 0.12;
  noStroke();
  fill(catFill);
  //ears
  const earBaseY = headCY - headH * 0.25;
  const earTipY = earBaseY - earH;
  //left
  triangle(
    headCX - headW * 0.42,
    earBaseY,
    headCX - headW * 0.18,
    earTipY,
    headCX - headW * 0.02,
    earBaseY
  );
  //right
  triangle(
    headCX + headW * 0.42,
    earBaseY,
    headCX + headW * 0.18,
    earTipY,
    headCX + headW * 0.02,
    earBaseY
  );
  //head
  ellipse(headCX, headCY, headW, headH);
  //cheeks
  ellipse(
    headCX - headW * 0.38,
    headCY + headH * 0.12,
    headW * 0.34,
    headH * 0.44
  );
  ellipse(
    headCX + headW * 0.38,
    headCY + headH * 0.12,
    headW * 0.34,
    headH * 0.44
  );
  //whiskers
  stroke(catFill);
  strokeWeight(s * 0.018);
  strokeCap(ROUND);
  const wY1 = headCY + headH * 0.05;
  const wY2 = headCY + headH * 0.18;
  //left
  line(headCX - headW * 0.25, wY1, headCX - headW * 0.85, wY1 - headH * 0.1);
  line(headCX - headW * 0.25, wY2, headCX - headW * 0.9, wY2 + headH * 0.06);
  //right
  line(headCX + headW * 0.25, wY1, headCX + headW * 0.85, wY1 - headH * 0.1);
  line(headCX + headW * 0.25, wY2, headCX + headW * 0.9, wY2 + headH * 0.06);
  noStroke();
}
