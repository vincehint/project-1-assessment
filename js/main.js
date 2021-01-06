console.log("Heck Yes");


var x = document.getElementById("plus");
var y = document.getElementById("input").value;
var z = document.getElementById("minus");
var sum = document.getElementById("sum");
document.getElementById("plus").addEventListener("click", addStuff);

function addStuff() {
    document.getElementById("sum").innerText = "hello";
    console.log("yerp");
}

document.getElementById("minus").addEventListener("click", subtractStuff);

function subtractStuff() {
    document.getElementById("sum").innerText = "hiya";
    console.log("derf");
}
