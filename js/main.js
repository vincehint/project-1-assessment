console.log("Heck Yes");
let input = document.getElementById('input');
let answer = document.getElementById('answer');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let sum = 0;


function newAnswer() {
    answer.innerText = sum;
}

function addition() {
    console.log(typeof input);
    sum += parseInt(input.value);
    console.log(sum);
}

function subtraction() {
    sum -= parseInt(input.value);
    console.log(sum);
}

plus.addEventListener("click", () => {
    addition();
    newAnswer();
})

minus.addEventListener("click", () => {
    subtraction();
    newAnswer();
})





document.getElementById("minus").addEventListener("click", function() {
    console.log("I've been subtracted!");
})


