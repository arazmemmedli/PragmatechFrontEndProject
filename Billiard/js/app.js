let canvas = document.createElement('canvas');
canvas.setAttribute('width','700');
canvas.setAttribute('height','400');
canvas.setAttribute('id','billiard');

canvas.style.border = '1px solid #1122AA';

document.body.appendChild(canvas);

window.onload = function() {

    x=100;
    y=100;
    cx = 1;
    cy=1;
    function Action() {
        let billiard = document.getElementById('billiard');
        let ball = billiard.getContext('2d');
        ball.beginPath();
        ball.clearRect(0,0,700,400)
        ball.fillStyle = "#1122AA"
        ball.arc(x,y,10,0,2*Math.PI);
        ball.fill()
        ball.beginPath();
        ball.rect(0, 0, 30, 30);
        ball.strokeStyle = "red"
        ball.stroke();
        ball.beginPath();
        ball.rect(0, 370, 30, 30);
        ball.stroke();
        ball.beginPath();
        ball.rect(670, 0, 30, 30);
        ball.stroke();
        ball.beginPath();
        ball.rect(670, 370, 30, 30);
        ball.stroke();
        if (x == 20) {
            cx +=1;
        }else if(x == 680) {
            cx -=1;
        }
        if (y == 20) {
            cy +=1;
        }else if(y == 380) {
            cy -=1
        }

        if(x <= 30 && y <= 30) {
            alert('Qazandiniz')
        }else if(x <= 30 && y == 370) {
            alert('Qazandiniz')
        }else if(x > 660 && y == 30) {
            alert('Qazandiniz')
        }else if(x > 660 && y == 370) {
            alert('Qazandiniz')
        }
        x +=cx*5;
        y +=cy*5;
    }
    setInterval(Action,20)
}