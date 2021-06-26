// const adlar=['Iskender','Araz','Elvin','Aytac','Pakizer','Togrul']

// function showLetters(){
//     for(let i=0; i < adlar.length; i++){
//         if(adlar[i].length>5){
//             console.log(adlar[i])
//         }
//     }
// }
// showLetters()

// function find(){
//     for(let i=0; i < adlar.length;i++){
//         if(adlar[i].includes('a')){
//             console.log(adlar[i])
//         }
//     }
// }
// find()

// function lastIndex(){
//     for(let i=0; i<adlar.length;i++){
//         console.log(adlar[i].toString)
//     }
// }
// lastIndex()


const students = [
    {
        ad: 'Samir',
        soyad: 'Kerimov',
        yas: 40
    },
    {
        ad: 'Samir',
        soyad: 'Kerimov',
        yas: 40
    },
    {
        ad: 'Hesen',
        soyad: 'Kerimov',
        yas: 35
    },
    {
        ad: 'Hesen',
        soyad: 'Serdarov',
        yas: 23
    },
    {
        ad: 'Malik',
        soyad: 'Quliyev',
        yas: 23
    }
]

// adi hesen olan istifadecileri goster
// soyadi Kerimov olan istifadecileri goster
// adlari eyni olan istifadecileri goster
// soyadlari eyni olan istifadecileri goster

let result

function studentsFilter(rule) {
    arr = []
    for (x in students) {
        if (rule(students[x])) {
            arr.push(students[x])
        }
    }
    result = students.filter((el) => students.filter(_el => _el.soyad === el.soyad).length > 1)

    return arr

}


let telebe = studentsFilter(student => student.soyad == 'Kerimov')

// function adlariEyniOlan(){
//     let result = students.filter((el) => students.filter(_el => _el.ad === el.ad).length > 1)
//     console.log(result)
// }
// adlariEyniOlan()

// function soyadlari(){
//     let result = students.filter((el) => students.filter(_el => _el.soyad === el.soyad).length > 1)
//     console.log(result)
// }
// soyadlariEyniOlan()