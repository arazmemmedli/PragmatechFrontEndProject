
// The data/time we want to countdown to
var countDownDate = new Date("May 11, 2021 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {

  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = ('0' + hours).slice(-2);
  document.getElementById("mins").innerHTML = ('0' + minutes).slice(-2);
  document.getElementById("secs").innerHTML = ('0' + seconds).slice(-2);

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = ""
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);


const slides = document.querySelector(".slider").children;
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const indicator = document.querySelector(".indicator");
let index = 0;

prevBtn.addEventListener("click", function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

nextBtn.addEventListener("click", function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide()
}
function circleIndicator(){
    for(let i=0; i< slides.length; i++){
        const div =document.createElement("div");
              div.innerHTML=i+1;
            div.setAttribute("onclick","indicateSlide(this)")
            div.id=i;
            if(i==0){
                div.className="active";
            }
            indicator.appendChild(div);
    }
}
circleIndicator();

function indicateSlide(element){
    index=element.id;
    changeSlide()
    updateCircleIndicator()
    resetTimer()
}

function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active")
}

function changeSlide(){
        for(let i=0;i <slides.length;i++){
            slides[i].classList.remove("s_active");
        }
    slides[index].classList.add("s_active");
}

function resetTimer(){
    clearInterval(timer)
    timer=setInterval(autoPlay,4000)
}

function autoPlay(){
    nextSlide();
}

let timer=setInterval(autoPlay,6000)

