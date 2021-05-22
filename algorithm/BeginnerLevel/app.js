// Question 1 Hello World
// document.write('Hello, World!');
// console.log('Hello, World!')
// alert('Hello, World!')

// Question 2 
// let a = 5;
// console.log(a)
// document.write(a)
// alert(a)

// Question 3 
// let number = Number(prompt('Bir eded daxil edin:'));
// let result = number * 2;
// console.log(result)

// Question 4
// let firstNumber = Number(prompt('Birinci ededi daxil edin:'));
// let secondNumber = Number(prompt('Ikinici ededi daxil edin:'));
// let result = firstNumber * secondNumber;
// console.log(result)

// Question 5
// let name = prompt('Adinizi daxil edin:')
// let surname = prompt('Soyadinizi daxil edin:')
// let age = Number(prompt('Yasinizi daxil edin:'))
// let result = console.log(`Mənim adım ${name}, Soyadım ${surname}, Yaşım isə ${age}-dur`)

// Question 6
// function calc(){
//     let firstNumber = Number(prompt('Birinci ededi daxil edin:'));
//     let secondNumber = Number(prompt('Ikinci ededi daxil edin:'));
//     let action = prompt('Emeliyati daxil edin:');
//     let result = null;
    // 1) Switch ile helli.
    // switch(action){
    //     case '+':
    //         result = firstNumber + secondNumber;
    //         break;

    //     case '-':
    //         result = firstNumber - secondNumber;
    //         break;

    //     case '*':
    //         result = firstNumber * secondNumber;
    //         break;

    //     case '/':
    //         result = firstNumber / secondNumber;
    //         break;
    //     default:
    //         result = 0;
    //         break;

    // }
    // console.log(result)

    // 2)if else ile helli.
    // if(action === '+'){
    //     result = firstNumber + secondNumber;
    // }
    // else if(action === '-'){
    //     result = firstNumber - secondNumber;
    // }
    // else if(action === '*'){
    //     result = firstNumber * secondNumber;
    // }
    // else if(action === '/'){
    //     result = firstNumber / secondNumber;
    // }
    // else{
    //     result = 'Bele bir emeliyyat yoxdur'
    // }
    // console.log(result)
// }
// calc()

// Question 7
// function calcCube(){
//     let number = parseInt(prompt('Bir eded daxil edin:'))
//     let cube = number*number*number;
//     return cube;
// }
// console.log(calcCube())

// Question 8
// function calcGeometric(){
//     let a = parseInt(prompt('Duzbucaqlinin enini daxil edin:'))
//     let b = parseInt(prompt('Duzbucaqlinin uzunlugunu daxil edin:'))
//     let p = 2 * (a + b);
//     return p;
// }
// console.log(calcGeometric())

// Question 9
// function calcAngle(){
//     let a = true
//     while(a){
//         let alfa = parseInt(prompt('alfa bucagini daxil edin:'))
//         let betta = parseInt(prompt('betta bucagini daxil edin:'))
//         let c = 180 - (alfa + betta);
//         if (c > 0 && c < 180){
//             a = false
//             alert(c)
//         }else{
//             a=true
//         }
//     }
// }
// calcAngle()

// let loop = true;
// while(loop){
//     const alpha = parseInt(prompt('Alpha'))
//     const betta = parseInt(prompt('Betta'))
//     if(alpha > 0 && alpha < 180 && betta > 0 && betta < 180){
//         loop = false;
//         alert('gamma ' + (180 - (alpha + betta)))
//     }
// }

// Question 10

// const check = (a) => {
//     let array = [45,67,89,23,55,88,93]
//     for(let i=0;i < array.length;i++){
//         if(Number(a) === array[i]){
//             return 'reqem massivde var'
//         }
//     }
//     return 'reqem massivde yoxdur'
// }
// console.log(check(9))

// Question 11
// function Calculate(x){
//     let b = (8*x + 45) / 25 - 9;
//     return b;
// }
// console.log(Calculate(10))

// Ededin faizinin tapilmasi
// function numberPercent(number, percent){
//     let x = (number / 100) * percent; 
//     return x;
// }
// console.log(numberPercent(30,50))

// Faizine gore ededin tapilmase
// function percent(number, percent){
//     let y = (number * 100) / percent
//     return y
// }
// console.log(percent(6,15))