const arr = [1,3,5,6,undefined,null,true,{},34,'FrontEndMasters','BackEndMAsters'];

// Array Question 1
// let numbers = []
// for(let i=0;i < arr.length;i++){
//     if(typeof(arr[i]) == "number"){
//         numbers.push(arr[i])
//     }
// } 
// console.log(numbers)

// Array Question 2
// let convertion = []
// for(let i=0;i < arr.length;i++){
//     let n = Number(arr[i])
//     if(isNaN(n)){
//         continue;
//     }
//     convertion.push(n)
// }
// console.log(convertion)

// Array Question 3 ededler massivinin daxilində eyni tipli olan məlumatları ayrı ayrı massivlər şəklinə gətirən metod yazın?
// let string = [];
// let number = [];
// let boolean = [];
// let undfnd = [];
// let object = [];

// for(let i=0;i < arr.length;i++){
//     if(typeof(arr[i]) == "string"){
//         string.push(arr[i])
//     }
//     if(typeof(arr[i]) == "number"){
//         number.push(arr[i])
//     }
//     if(typeof(arr[i]) == "boolean"){
//         boolean.push(arr[i])
//     }
//     if(typeof(arr[i]) == "undefined"){
//         undfnd.push(arr[i])
//     }
//     if(typeof(arr[i]) == "object"){
//         object.push(arr[i])
//     }
// }
// console.log(string);
// console.log(number);
// console.log(boolean);
// console.log(undefined);
// console.log(object);

// Array Question 4 ededler massivinin tək yerdə duran elementlərinin dəyərlərini cüt yerdə duran elementlərlə dəyişdirin?
// let n = [];
// for(let i=0;i < arr.length;i+=2){
//     let a = i + 1;
//     console.log(arr[a])
//     console.log(arr[i])
// }

// Array Question 5 ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın?

// let sait = ['a','ı','o','u','e','ə','i','ö','ü'];

// let string = [];
// for(let i=0;i < arr.length;i++){
//     if(typeof(arr[i]) === "string"){
//         string.push(arr[i])
//     }
// }

// let t = 0;
// let samitArr = [];
// for(let a=0;a < string.length;a++){
//     for(let b=0;b < string[a].length;b++){
//         samitArr.push(string[a][b])
//         for(let c=0;c < sait.length;c++){
//             if(string[a][b].toLowerCase() === sait[c]){
//                 t++;
//             }
//         }
//     }
// }

// let samitCount = samitArr.length - t;
// console.log('Sait:' + t)
// console.log('samitlerin sayi:' + samitCount)

