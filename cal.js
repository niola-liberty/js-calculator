//console.log("and so i begin!")
let inputBtn = document.getElementById("btn")
let firstNum = document.getElementById("first-num")
let secBtn = document.getElementById("sec-btn")
let secNum = document.getElementById("sec-num")
let optBtn = document.getElementById("opt")
let optP = document.getElementById("opt-p")
let val = document.getElementById("result")


num1 = parseFloat(prompt("Enter first number: "))
num2 = parseFloat(prompt("Enter second number: "))
operator = prompt("Choose an operation between '+', '-', '*', and '/'.")

let ans;

if (operator == "+"){
    ans = num1 + num2
    alert(ans)
}
else if (operator == '-'){
    ans = num1 - num2
    alert(ans)
}
else if (operator == '*'){
    ans = num1 * num2
    alert(ans)
}
else if (operator == '/'){
    ans = num1 / num2
    alert(ans)
}
else{
    alert("ERROR")
}

//start of my personal project
function display(){
        
    number1 = parseFloat(prompt("Enter first number: "))
    number2 = parseFloat(prompt("Enter second number: "))
    action = prompt("Choose an operation between '+', '-', '*', and '/'.")

    inputBtn.addEventListener("click", input)
    function input(){
        number1 = parseFloat(prompt("Enter first number: "))
        if (number1 != null){
            firstNum.innerHTML = "Your first number is " + number1
        }
    }

    secBtn.addEventListener("click", inputSec)
    function inputSec(){
        number2 = parseFloat(prompt("Enter second number: "))
        if (number2 != null){
            secNum.innerHTML = "Your second number is " + number2
        }
    }

    optBtn.addEventListener("click", inputOpt)
    function inputOpt(){
      action = prompt("Choose an operation between '+', '-', '*', and '/'.")
        if (action != null){
            optP.innerHTML = "You chose "+ number1 + " "+ action + " "+ number2
        }
    }

    let result;

    if (action == "+"){
        result = number1 + number2
        alert(result)
        val.innerHTML = "The answer is "+ result
    }
    else if (action == '-'){
        result = number1 - number2
        alert(result)
    }
    else if (action == '*'){
        result = number1 * number2
        alert(result)
    }
    else if (action == '/'){
        action = number1 / number2
        alert(result)
    }
    else{
        alert("Err... I'm sorry, I don't understand.")
    }
}    
