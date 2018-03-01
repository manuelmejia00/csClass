
//Grabs all of the elements by their IDs and assigns them to new variables

var firstQ = document.getElementById("firstQ");
var secondQ = document.getElementById("secondQ");
var thirdQ = document.getElementById("thirdQ");
var submitButton = document.getElementById("submitButton");
var resultDiv = document.getElementById("resultDiv");
var thinkImg = document.getElementById("thinkImg");


//Creates an EventListener on the button element
//Listens for a click from the user
//Once click occurs, then the main if/else logic is run

submitButton.addEventListener("click", function(){
    
    
    //takes values from answers to questions and assigns to new variables,
    
    var answerfirstQ = firstQ.value;
    var answersecondQ = secondQ.value;
    var answerthirdQ = thirdQ.value; 
    
    
    
    //This is the main if/else block chain
    //For every response to the questions, there is a corresponding codeblock that rewrites the .innerHTML and .src of images to reflect recommendations.
    //Perhaps not the most efficient logic, but it gets the job done
    
    if (answerfirstQ === "Yep" && answersecondQ === "Fast Food" && answerthirdQ === "Mexican"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: CHIPOTLE!";
        thinkImg.src = "images/chipotle.png";
        
        
    } else if ((answerfirstQ === "Yep" || answerfirstQ === "Nope") && answersecondQ === "Fast Food" && answerthirdQ === "Italian"){
    
        resultDiv.innerHTML = "To be honest, you're gonna have trouble finding a fast food Italian restaurant, but you can always sit down to eat at an Italian restaurant like Olive Garden, Buca Di Beppo, or The Old Spaghetti Factory.";
        thinkImg.src = "images/italian.jpg";
    
    
    } else if (answerfirstQ === "Yep" && answersecondQ === "Fast Food" && answerthirdQ === "Asian"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: TAPIOCA EXPRESS!";
        thinkImg.src = "images/tapioca.jpg";
        
    } else if (answerfirstQ === "Yep" && answersecondQ === "Fast Food" && answerthirdQ === "American"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: BURGER KING!";
        thinkImg.src = "images/burgerking.png";
        
        
    } else if (answerfirstQ === "Yep" && answersecondQ === "Sit-Down" && answerthirdQ === "Mexican"){
        
        
        resultDiv.innerHTML = "For lunch, you should eat at: EL TORITO!";
        thinkImg.src = "images/torito.gif";
        
        
    } else if (answerfirstQ === "Yep" && answersecondQ === "Sit-Down" && answerthirdQ === "Italian"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: THE OLD SPAGHETTI FACTORY!";
        thinkImg.src = "images/oldspaghetti.jpg";
        
        
    } else if ((answerfirstQ === "Yep" || answerfirstQ === "Nope") && answersecondQ === "Sit-Down" && answerthirdQ === "Asian"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: P.F CHANG'S!";
        thinkImg.src = "images/pfchangs.jpg";
        
        
    } else if (answerfirstQ === "Yep" && answersecondQ === "Sit-Down" && answerthirdQ === "American"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: APPLEBEE'S!";
        thinkImg.src = "images/applebees.jpg";
        
        
    } else if (answerfirstQ === "Nope" && answersecondQ === "Sit-Down" && answerthirdQ === "Italian"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: OLIVE GARDEN!";
        thinkImg.src = "images/olivegarden.png";
        
        
    } else if (answerfirstQ === "Nope" && answersecondQ === "Sit-Down" && answerthirdQ === "Mexican"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: CHEVY'S!";
        thinkImg.src = "images/chevys.png";
        
        
    } else if (answerfirstQ === "Nope" && answersecondQ === "Sit-Down" && answerthirdQ === "American"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: CHILI'S!";
        thinkImg.src = "images/chilis.png";
        
        
    } else if (answerfirstQ === "Nope" && answersecondQ === "Fast Food" && answerthirdQ === "Mexican"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: TACO BELL!";
        thinkImg.src = "images/tacobell.png";
        
        
    } else if (answerfirstQ === "Nope" && answersecondQ === "Fast Food" && answerthirdQ === "Asian"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: PANDA EXPRESS!";
        thinkImg.src = "images/pandaexpress.png";
        
        
    } else if (answerfirstQ === "Nope" && answersecondQ === "Fast Food" && answerthirdQ === "American"){
        
        resultDiv.innerHTML = "For lunch, you should eat at: McDONALD'S!";
        thinkImg.src = "images/mcdonalds.png";
        
        
    }
    
    
    
});

