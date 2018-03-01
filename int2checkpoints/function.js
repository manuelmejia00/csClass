/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//



var startPos = 200

background(255, 255, 153);


drawFace = function(){
    
    
    //code for the head
    fill(random(100, 255), random(100, 255), random(100, 255));
    ellipse(mouseX + 20, mouseY + 20, random(40, 50), random(40, 50));  
    
    
    
    //code for the eyes
    fill(random(100, 255), random(100, 255), random(100, 255));
    
    rect(mouseX + 25, mouseY + 10, 7, 7);
    rect(mouseX + 12, mouseY + 10, 7, 7);
    
    
    //code for the mouth
    fill(random(100, 255), random(100, 255), random(100, 255));
    rect(mouseX + 8, mouseY + 25, 25, 4);

    //arc(mouseX, mouseY, 7, 0*Math.PI, 1*Math.PI);
    
}


mouseClicked = function(){
    
    drawFace(mouseX, mouseY);
    
}




// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
