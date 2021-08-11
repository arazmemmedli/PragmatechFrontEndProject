let wrapper = document.createElement('div');
wrapper.className = "wrapper";
let btn = document.createElement('button');
btn.className = "button";
btn.setAttribute('id','btn')
wrapper.appendChild(btn);

let body = document.querySelector('body');
body.appendChild(wrapper);

btn.style.width = "100px";
btn.style.height = "100px";
btn.style.background = "#68e0cf"
btn.style.border = "none";
btn.style.position = "absolute";

// HTML end

// Js
let count=0;
let vmove=0;
let hmove=0;
btn.onmouseover = function(){
    count++
    // let item = document.querySelector('#btn');
    hmove = Number(Math.random() * 1000);
    vmove = Number(Math.random() * 700);
    btn.style.left = hmove + "px";
    btn.style.top = vmove + "px";
    btn.style.width = this.clientWidth + 10 + "px";
    btn.style.height = this.clientWidth + 10 + "px";
}

btn.onclick=function(){
    alert(count + " dəfədə qazandın")
    btn.style.width = "100px";
    btn.style.height = "100px"
    count=0;
}