let categoryMenyu = document.querySelector('.category-menu')

categoryMenyu.addEventListener('click', function(){
    document.querySelector('.wrap-category-inner').classList.toggle('active');
})

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
    updateCircleIndicator();
}

let timer=setInterval(autoPlay,6000)

var countDate = new Date('Apr 28, 2021 00:00:00').getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;
}); 


let pos=0;

function slideShow(class1,class2,class3,px,btn,figur){
    let itemCount=figur;
    let containerWidth=document.querySelector('.'+class1).clientWidth;
    let items=document.querySelectorAll('.'+class2)

    for(let i=0;i<items.length;i++){
        items[i].style.width=containerWidth/itemCount +'px'
    }

    let sliderContainer=document.querySelector('.'+class3)
    sliderContainer.style.width=containerWidth/itemCount*items.length +'px';

    if(btn == 'prev'){
        if(pos>0){
            pos=-px
            sliderContainer.style.left=pos+'px';
        }else{
            sliderContainer.style.left=pos+'px';
            pos+=containerWidth/itemCount
        }
    }else{
        if(pos>-px){
            pos-=containerWidth/itemCount
            sliderContainer.style.left=pos+'px';
        }else{
            pos=0
            sliderContainer.style.left=pos+'px';
        }
    }
}