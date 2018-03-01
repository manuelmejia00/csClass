/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//



//This function draws the smiling face using the ellipse, fill, and arc tools
function drawHappyFace(){

    fill(153, 204, 255);    
    
    ellipse(200, 150, 40, 40);
    
    fill(255, 100, 255);

    
    ellipse(192, 145, 10, 10);
    ellipse(208, 145, 10, 10);    
    

    arc(200, 155, 20, 20, 0, PI, OPEN);
    
}


//This function draws the frowning face using the ellipse, fill, and arc tools
function drawSadFace(){

    fill(0, 153, 153);    
    
    ellipse(200, 150, 40, 40);
    
    fill(255, 204, 255);

    
    ellipse(192, 145, 10, 10);
    ellipse(208, 145, 10, 10);    
    

    arc(200, 162, 20, 20, PI, TWO_PI, OPEN);
    
}


//This function creates the buildings that are seen when the art is in "daytime"
function drawDayBuildings(){
        
    //This sets the background/sky color
    background(255, 255, 153);
    
    
    //This draws and colors the concrete
    fill(192, 192, 192);
    rect(0, 370, 500, 40);
    
    
    //This draws and colors the first building
    fill(102, 178, 255);
    rect(40, 270, 50, 100);
    
    
    //This draws and colors the second building    
    fill(204, 153, 255);
    rect(110, 230, 40, 140);

    //This draws and colors the third building
    fill(255, 153, 153);
    rect(170, 255, 60, 115);
    
    
    //This draws and colors the fourth building
    fill(255, 204, 153);
    rect(250, 270, 50, 100);
    
    
    //This draws and colors the fifth building
    fill(153, 255, 153);
    rect(320, 250, 50, 120);
    
}


//This function createst the buildings that are seen when the art is in "nighttime"
function drawNightBuildings(){

    background(96, 96, 96);

    //This draws and colors the concrete
    fill(64, 64, 64);
    rect(0, 370, 500, 40);
    
    
    //This draws and colors the first building
    fill(0, 0, 153);
    rect(40, 270, 50, 100);
    
    
    //This draws and colors the second building    
    fill(51, 0, 102);
    rect(110, 230, 40, 140);

    //This draws and colors the third building
    fill(204, 0, 0);
    rect(170, 255, 60, 115);
    
    
    //This draws and colors the fourth building
    fill(204, 102, 0);
    rect(250, 270, 50, 100);
    
    
    //This draws and colors the fifth building
    fill(0, 153, 76);
    rect(320, 250, 50, 120);
    

}


//This function creates the rain cloud animation
function rainCloud(x, y){
    this.x = x;
    this.y = y;
    this.draw = function(){
        
        ellipse(this.x, this.y, 20, 20);
   
    }
}

//This defines an empty list
var rainclouds = [];



//This function creates the white cloud animation
function whiteCloud(x, y){
    this.x = x;
    this.y = y;
    this.draw = function(){
        
        ellipse(this.x, this.y, 20, 20);
    
        
    }
}

//This defines an empty list
var whiteclouds =[];



draw = function(){
    
    //This removes the outline that surrounds the shapes
    noStroke();
    
    
    //This if-else statement draws the art, which changes based on the X position of the mouse.
    //If the x position of the mouse is greater than 200, then "daytime" is drawn; otherwise if the x position of the mouse is less than 200, 
    //then "nighttime" is drawn.
   
    if (mouseX > 200){

    whiteclouds.push(new whiteCloud(random(40),random(40)));
    
    drawDayBuildings();
    
    drawHappyFace();
    
    fill(255, 255, 255);

    
    } else if (mouseX < 200) {
    
    rainclouds.push(new rainCloud(random(40),random(40)));
    
    drawNightBuildings();
    
    drawSadFace();
    
    fill(153, 255, 255);
    
    }
    
    //This for loop draws the rain clouds in a random range
    
    for(var i = 0; i < rainclouds.length; i++){
        rainclouds[i].draw();
        rainclouds[i].x++;        
    }

    //This for loop draws the white clouds in a random range
    
    for(var i = 0; i < whiteclouds.length; i++){
        whiteclouds[i].draw();
        whiteclouds[i].x++;        
    }


}




// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
