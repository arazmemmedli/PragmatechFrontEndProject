// HTML 
let clock = document.createElement('div');
clock.className = 'clock';

let action = ['dot', 'action', 'clock__lines']
for (let i = 0; i < action.length; i++) {
    let items = document.createElement('div')
    items.className = action[i]
    clock.appendChild(items)
}

let classes = ['hour', 'minute', 'second']
for (let k = 0; k < classes.length; k++) {
    let element = document.createElement('div')
    element.className = classes[k]
    clock.children[1].appendChild(element)

}

let body = document.querySelector('body').appendChild(clock)

let clockAction = document.querySelector('.action');

let hClockWise = document.createElement('div');
hClockWise.setAttribute('class','hour__clockwise')
clockAction.children[0].appendChild(hClockWise);

let mClockWise = document.createElement('div');
mClockWise.setAttribute('class','minute__clockwise');
clockAction.children[1].appendChild(mClockWise);

let sClockWise = document.createElement('div');
sClockWise.setAttribute('class','second__clockwise');
clockAction.children[2].appendChild(sClockWise);

// HTML Elementleri Yaradildi

// CSS 
let bodyElement = document.querySelector('body')
let lines = document.getElementsByClassName('clock__lines');
let clockEl = document.getElementsByClassName('clock')[0];
for (let a = 1; a < 60; a++) {
    clockEl.innerHTML += "<div class='clock__lines'></div>";
    lines[a].style.transform = "rotate(" + 6 * a + "deg)";
    lines[a].style.position = "absolute";
    lines[a].style.zIndex = "2";
    lines[a].style.width = "2px";
    lines[a].style.height = "15px";
    lines[a].style.background = "rgba(0, 0, 0, 0.7)";
    lines[a].style.left = "50%";
    lines[a].style.transformOrigin = "50% 150px"
}

// Body elementinin axra plan rengi
bodyElement.style.background = "#FFF"

// classi clock olan elementin css stilleri
clock.style.background = "#FFF";
clock.style.width = "310px";
clock.style.height = "300px";
clock.style.margin = "auto";
clock.style.position = "relative"


// classi dot olan elementin css stilleri
let dot = document.querySelector(".dot")
dot.style.width = "20px";
dot.style.height = "20px";
dot.style.background = "gray";
dot.style.borderRadius = "50%";
dot.style.position = "absolute";
dot.style.top = "50%";
dot.style.left = "0";
dot.style.right = "0";
dot.style.zIndex = "10";
dot.style.margin = "auto";
dot.style.transform = "translate(0,-50%)"


// classi hour olan elementin css stilleri
let clockHour = document.querySelector('.hour');
clockHour.style.position = "absolute";
clockHour.style.width = "160px";
clockHour.style.height = "160px";
clockHour.style.top = "50%";
clockHour.style.left = "50%";
clockHour.style.transform = "translate(-50%,-50%)";

// classi minute olan elementin css stilleri
let clockMinute = document.querySelector('.minute');
clockMinute.style.position = "absolute";
clockMinute.style.width = "190px";
clockMinute.style.height = "190px";
clockMinute.style.top = "50%";
clockMinute.style.left = "50%";
clockMinute.style.transform = "translate(-50%,-50%)";

// classi second olan elementin css stilleri
let clockSecond = document.querySelector('.second');
clockSecond.style.position = "absolute";
clockSecond.style.width = "230px";
clockSecond.style.height = "230px";
clockSecond.style.top = "50%";
clockSecond.style.left = "50%";
clockSecond.style.transform = "translate(-50%,-50%)";

// classi clock__lines olan elementin css stilleri
let clockLines = document.querySelector('.clock__lines');
clockLines.style.position = "absolute";
clockLines.style.zIndex = "2";
clockLines.style.width = "2px";
clockLines.style.height = "15px";
clockLines.style.background = "#666";
clockLines.style.left = "50%";
clockLines.style.transformOrigin = "50% 150px"

for (let j = 2; j < clock.children.length; j += 5) {
    clock.children[j].style.position = "absolute"
    clock.children[j].style.zIndex = "2"
    clock.children[j].style.width = "4px"
    clock.children[j].style.height = "15px"
    clock.children[j].style.background = "#191919"
    clock.children[j].style.left = "50%"
    clock.children[j].style.transformOrigin = "50% 150px"
}

// classi hour__clockwise elementin secdim
let hourEqreb = document.querySelector('.hour__clockwise');
hourEqreb.style.position = "absolute"
hourEqreb.style.width = "160px";
hourEqreb.style.height = "160px";
hourEqreb.style.display = "flex";
hourEqreb.style.justifyContent = "center"

// classi minute__clockwise elementin secdim
let minuteEqreb = document.querySelector('.minute__clockwise');
minuteEqreb.style.position = "absolute"
minuteEqreb.style.width = "190px";
minuteEqreb.style.height = "190px";
minuteEqreb.style.display = "flex";
minuteEqreb.style.justifyContent = "center"

// classi second__clockwise elementin secdim
let secondEqreb = document.querySelector('.second__clockwise');
secondEqreb.style.position = "absolute"
secondEqreb.style.width = "230px";
secondEqreb.style.height = "230px";
secondEqreb.style.display = "flex";
secondEqreb.style.justifyContent = "center"

function Clock() {
    let date = new Date
    let hour = date.getHours() % 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hourDeg = (hour * 30) + (0.5 * minute);
    let minuteDeg = minute * 6;
    let secondDeg = second * 6;
    hourEqreb.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteEqreb.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondEqreb.style.transform = 'rotate(' + secondDeg + 'deg)';

    setTimeout(Clock, 1000);
}
Clock();