// Array Question 3 ededler massivinin daxilində eyni tipli olan məlumatları ayrı ayrı massivlər şəklinə gətirən metod yazın?

const arr = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];

let string = [];
let number = [];
let boolean = [];
let undfnd = [];
let object = [];

function findSameDataType(a,dataType,newArray) {
    for (let i = 0; i < a.length; i++) {
        if (typeof (a[i]) == dataType) {
            newArray.push(a[i])
        }
    }
    return newArray;
}
console.log(findSameDataType(arr,'string',string))
console.log(findSameDataType(arr,'number',number))
console.log(findSameDataType(arr,'boolean',boolean))
console.log(findSameDataType(arr,'undefined',undfnd))
console.log(findSameDataType(arr,'object',object))
