// this assigns all of the elements to variables

var firstNumber = document.getElementById("firstNumber");

var secondNumber = document.getElementById("secondNumber");

var operator = document.getElementById("operator");

var calculateButton  = document.getElementById("calculateButton");

var answerDiv = document.getElementById("answerDiv");




calculateButton.addEventListener("click",  function(){
    

    
    //assigns the user's input to numerical values
    
    var firstInput = +firstNumber.value;
    var secondInput = +secondNumber.value;
    
    
    

    var oper = operator.value;



  
    
    //checks for what operation the user selected, and then writes the answer div to that operation executed on the two inputs
    
    if (oper === "+"){
        
        answerDiv.innerHTML = "ANSWER: " + (firstInput + secondInput);



    } else if (oper === "-") {
        
        
        
        answerDiv.innerHTML = "ANSWER: " + (firstInput - secondInput);

        
        
    } else if (oper === "*") {
        
        
        
        answerDiv.innerHTML = "ANSWER: " + (firstInput * secondInput);
        
        
        
    } else if (oper === "/") {
        
        
        answerDiv.innerHTML = "ANSWER: " + (firstInput / secondInput);    
        
        
        
    } else if (oper === "^") {
        
        answerDiv.innerHTML = "ANSWER: " + (firstInput**secondInput);
        
        
        
    } else {
        
        alert("ERROR");
        
    }
    
    
});