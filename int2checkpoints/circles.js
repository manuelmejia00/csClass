/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


// defines some intial x and y values for some of my circles

var xPos = 0;
var yPos = 0;


// defines a second starting x position
var secondXpos = 70

weight = 4

background(230, 230, 250);



draw = function() {
 
    // this draws my first circle, and it adds 40 to the variables xPos and yPos every time the function loops
    fill(186, 85, 211);
    stroke(30, 144, 255);
    ellipse(xPos, yPos, 30, 30);
    
    xPos = xPos + 40
    yPos = yPos + 40



    // this draws my second circle, and it uses a new x position variable, and also uses a variable for weight, adding 2 to the weight on every loop
    
    fill(255, 105, 180)
    stroke(186, 85, 211)
    ellipse(secondXpos, yPos, 50, 50);
    strokeWeight(weight);
    secondXpos = secondXpos + 15
    weight = weight + 2



    // this draws my third circle, and it changes the outline/stroke color
    fill(100, 149, 237)
    stroke(255, 228, 181);
    ellipse(350, yPos, 70, 70);
};  




// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
