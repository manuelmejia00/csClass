
// this assigns the element values to the variables catPic and dogPic

var catPic = document.getElementById("catPic");
var dogPic = document.getElementById("dogPic");
var infoDiv = document.getElementById("infoDiv");




catPic.addEventListener("click", function(){
    
    infoDiv.innerHTML = "This is a cat! Loved by the internet and often grumpy";
})


dogPic.addEventListener("click", function(){
    
    infoDiv.innerHTML = "This is a doggo! Loved by everyone";
    
})


