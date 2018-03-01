
// this assigns the element value to the variable bigButton

var bigButton = document.getElementById("bigButton");
var buttonDiv = document.getElementById("buttonDiv");



bigButton.style.position = "absolute";

//this function waits for the user to hover their mouse over the button
bigButton.addEventListener("mousemove", function(){
    
    bigButton.style.top = Math.random() * 600 + "px"
    bigButton.style.left = Math.random() * 600 + "px"
    alert("CONGRATS, YOU'RE ELIGIBILE TO SAVE 15% OR MORE WITH GEICO");

})


bigButton.addEventListener("click", function(){
  
  buttonDiv.innerHTML = "<img src =  http://moziru.com/images/trophy-clipart-animated-gif-5.gif>"
  
  
    
})

