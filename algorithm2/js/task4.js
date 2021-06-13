const arr = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];

// Array Question 1 ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
function findNumbers(numbers) {
    let newArray = []
    for (let i = 0; i < numbers.length; i++) {
        if (typeof (numbers[i]) == "number") {
            newArray.push(numbers[i])
        }
    }
    return newArray;
}
console.log(findNumbers(arr))