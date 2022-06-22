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