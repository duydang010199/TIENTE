function Addition(){
    let numberA=parseInt(document.getElementById('numberA').value);
    let numberB=parseInt(document.getElementById('numberB').value);
    let result = numberA + numberB
    document.getElementById('result').innerHTML = result;
}
function Subtraction(){
    let numberA=parseInt(document.getElementById('numberA').value);
    let numberB=parseInt(document.getElementById('numberB').value);
    let result = numberA - numberB
    document.getElementById('result').innerHTML = result;
}
function Multiplication(){
    let numberA=parseInt(document.getElementById('numberA').value);
    let numberB=parseInt(document.getElementById('numberB').value);
    let result = numberA * numberB 
    document.getElementById('result').innerHTML = result;
}
function Division(){
    let numberA=parseInt(document.getElementById('numberA').value);
    let numberB=parseInt(document.getElementById('numberB').value);
    let result = numberA / numberB
    document.getElementById('result').innerHTML = result;
}
