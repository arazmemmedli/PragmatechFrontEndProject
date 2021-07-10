function Snowing() {
    let snow = document.createElement('div');
    snow.className = 'snow';
    snow.innerHTML = '❆';
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.animationDuration = Math.random() * 6 + 4 + 's';
    snow.style.opacity = Math.random();
    document.body.appendChild(snow);

    setInterval(() => {
        snow.style.transform = 'rotate(90deg)'
    }, 100)

    setTimeout(() => {
        snow.remove()
    }, 3700)
}

setInterval(Snowing, 30)