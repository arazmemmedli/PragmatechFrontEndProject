// Array Question 4 ededler massivinin tək yerdə duran elementlərinin dəyərlərini cüt yerdə duran elementlərlə dəyişdirin?

// !! Bunu yaza bilməmişəm
const arr = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];
function reverse() {
    let newArray = [];
    for (let i = 0; i < arr.length; i += 2) {
        let a = i + 1;
        console.log(arr[a])
        console.log(arr[i])
    }

}
