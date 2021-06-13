// Array Question 2 ededler massivinin bütün elementlərini tiplərini edede çevirin. Tip çevirmə uğurlu alınıbsa əldə olunan nəticələri ayrı massiv olaraq çap elətdirin
const arr = [1, 3, 5, 6, undefined, null, true, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];

function convertionDataType(types) {
    let convertion = []
    for (let i = 0; i < types.length; i++) {
        let n = Number(types[i])
        if (isNaN(n)) {
            continue;
        }
        convertion.push(n)
    }
    return convertion;
}
console.log(convertionDataType(arr))