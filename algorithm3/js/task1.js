const numbers=[1,4,56,23,67,89,145,89,200,35]
let evenNumbers = [];
let oddNumbers = [];

function arrayFilter(arr){
    // Question 1 ve 2
    for(let i=0; i < arr.length; i++){
        if(arr[i] %2 == 0){
            evenNumbers.push(arr[i])
        }
        if(arr[i] %2 != 0){
            oddNumbers.push(arr[i])
        }
    }
    // Question 3 rəqəmlərinin cəmi 10-dan kiçik olanları tapsın
    let result = arr.filter((a,b) => a + b < 10)

    // Question 4 2 rəqəmli ədədləri tapsın
    // 1-ci Üsul 
    for(let a = 0; a < arr.length;a++){
        if(arr[a] > 9){
            // console.log(arr[a])
        }
    }
    // 2-ci üsul
    let twoDigitNumbers = arr.filter(twoDigit => twoDigit > 9)
    // return 'Cüt ədədlər:' + evenNumbers + ' Tək ədədlər:' + oddNumbers;
    // return result;
    // return twoDigitNumbers;

}
console.log(arrayFilter(numbers))