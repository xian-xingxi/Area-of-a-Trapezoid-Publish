//Area of Trapezoid Calculator
"use strict";

//Event Listener
document.getElementById("btn").addEventListener("click", calc);

//Event Function
function calc() {
    //input
    let input1 = Number(document.getElementById("base1").value);
    let input2 = Number(document.getElementById("base2").value);
    let input3 = Number(document.getElementById("height").value);

    //process
    let total= (input1 + input2) /"2" * input3;

    //output
    document.getElementById("results").innerHTML = total;

}

