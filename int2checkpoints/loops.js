/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//



// this sets the background color
background(255, 102, 255);


    // this is the first for loop, has to do with i and x position
    for (i = 0; i < width; i += 30){
        
        fill(random(255), random(255), random(255));
        
        ellipse(i, 200, random(30), random(30));
        
        
        // this is the second for loop, has to do with y an y position
        for(j = 0; j < height; j += 30){
            
            fill(random(255), random(255), random(255))
            
            stroke(random(255), random(255), random(255));
            
            strokeWeight(4);
            
            ellipse(i, j, random(30), random(30));
            
        }
    }


draw = function() {
    
    
    
    
};  




// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
