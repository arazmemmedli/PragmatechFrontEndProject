let setting={
    elementSayi:10,
    sutunSayi:5,
    sutunlarArasiMesafe:20,
}
  

function creatGridLayout(object) {
    n = setting.elementSayi;
    let row = document.createElement('div');
    row.className = 'row';
    document.body.appendChild(row)
    row.style.gridTemplateColumns = `repeat(${object.sutunSayi},1fr)`
    row.style.gridGap = `${object.sutunlarArasiMesafe}px`
    for (let i = 0; i < object.elementSayi; i++) {
        let grid = document.createElement('div');
        grid.className = 'grid__item'
        grid.style.backgroundImage = "url('3.jpg')"
        row.appendChild(grid)
    }
}
creatGridLayout(setting)