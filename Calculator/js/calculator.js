let display1 = document.querySelector(".display-1");
let display2 = document.querySelector(".display-2");
let tempResult = document.querySelector(".temp-result");
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let allClear = document.querySelector(".all-clear");
let dis2Clear = document.querySelector(".dis2-clear");
let equal = document.querySelector(".equal");

let dis1 = "";
let dis2 = "";
let status = false;
let result = null;
let lastResult = "";

numbers.forEach((e) => {
    e.addEventListener('click', (a) => {
        if(a.target.innerText === '.' && !status) {
            status = true;
        }else if(a.target.innerText === '.' && status) {
            return;
        }
        dis2 += a.target.innerText;
        display2.innerText = dis2;
    })
})

allClear.addEventListener("click", () => {
    dis2 = '';
    display2.innerText = dis2;
    dis1 = '';
    display1.innerText = dis1;
    tempResult.innerText = "";
})

operations.forEach((e) => {
    e.addEventListener("click", (a) => {
        if(!dis2) result;
        status = false;
        let operator = a.target.innerText;
        if(dis1 && dis2 && lastResult) {
            Match()
        }else {
            result = parseFloat(dis2);
        }
        clearValue(operator);
        lastResult = operator;
    })
})

function clearValue(param) {
    dis1 += dis2 + " " + param + " ";
    display1.innerText = dis1;
    display2.innerText = ""
    dis2 = ''
    tempResult.innerText = result
}

function Match() {
    switch(lastResult) {
        case "x":
            result = parseFloat(result) * parseFloat(dis2);
            display2.innerText = result;
            break;

        case "+":
            result = parseFloat(result) + parseFloat(dis2);
            display2.innerText = result;
            break;

        case "-":
            result = parseFloat(result) - parseFloat(dis2);
            display2.innerText = result;
            break;
        
        case "/":
            result = parseFloat(result) / parseFloat(dis2);
            display2.innerText = result;
            break;  
    }
}

dis2Clear.addEventListener("click", () => {
    dis2 = "";
    display2.innerText = dis2;
})

equal.addEventListener("click", () => {
    Match()
})