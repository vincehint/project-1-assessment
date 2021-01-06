console.log("Heck Yes");


var x = document.getElementById("plus");
var y = document.getElementById("input").value;
var z = document.getElementById("minus");
var sum = document.getElementById("sum");
document.getElementById("plus").addEventListener("click", addStuff);

function addStuff() {
    document.getElementById("answer").innerText = "hello";
    console.log("yerp");
}

document.getElementById("minus").addEventListener("click", subtractStuff);

function subtractStuff() {
    let sum = 0
    console.log("derf");
    var out = parseFloat('input' - parseFloat('sum'));
    document.getElementById("answer").innerText = "hi";
}
