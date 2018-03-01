/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//



draw = function() {
    
    //this prevents repearting circles
    background(255, 239, 213);
    
    // this creates the starting ellipse
    ellipse(mouseX, mouseY, 60, 60);
    
    //this if/else statement makes it so that the circle changes colors depending on its x position
    
    if (mouseX > 200) {
            
        fill(100, 149, 237);
        strokeWeight(10);
        stroke(0, 255, 255);
    }
    
    else if (mouseX < 200) {
        strokeWeight(20);
        fill(100, 250, 154);
        stroke(238, 130, 238);
    }
    
    if (mouseY < 200) {
        ellipse(mouseX, mouseY, 180, 180);
    }
    
    
};  




// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
