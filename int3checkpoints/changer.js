    

//creates variables and saves dom elements to each var

var idColor = document.getElementById("idColor");
var changerButton = document.getElementById("changerButton");


//event listener for the color chaning button, changes background color to the one inputted by user
changerButton.addEventListener("click", function(){
    
    document.body.style.backgroundColor = idColor.value;
    
});

