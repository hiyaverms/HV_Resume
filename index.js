console.log('Happy developing ✨')
function doAddition() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first + second;
    displayResult(result);
}

function doSubtraction() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first - second;
    displayResult(result);
}

function doMultiplication() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first * second;
    displayResult(result);
}

function doDivision() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first / second;
    displayResult(result);
}

function doPower() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = 1;
    if (second < 0) {
        result = "Positive exponents only";
    } else {
        for (let i = 0; i < second; i++) {
            result = result * first;
        }
    }
    displayResult(result);
}

function doClear() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "inherit"; 
}

function displayResult(res) {
    let outputTag = document.getElementById("output");
    outputTag.innerHTML = String(res);

    if (res < 0) {
        outputTag.style.color = "red";
    } else {
        outputTag.style.color = "inherit"; 
    }
}