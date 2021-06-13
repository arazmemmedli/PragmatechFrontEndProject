// Array Question 5 ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın?

const arr = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];

let sait = ['a','ı','o','u','e','ə','i','ö','ü'];
let string = [];
let t = 0;
let samitArr = [];

function checkSaitsSamit(array, types, s) {
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "string") {
            string.push(array[i])
        }
    }

    for (let a = 0; a < types.length; a++) {
        for (let b = 0; b < types[a].length; b++) {
            samitArr.push(types[a][b])
            for (let c = 0; c < s.length; c++) {
                if (types[a][b].toLowerCase() === s[c]) {
                    t++;
                }
            }
        }
    }
    let samitCount = samitArr.length - t;
    return 'Sait:' + t + ' Samit:' + samitCount;
}

console.log(checkSaitsSamit(arr,string,sait))