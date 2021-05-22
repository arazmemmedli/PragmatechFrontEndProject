// Task One
const array = [678, 45, 67, 89, 23, 545, 188, 293]
// Question 1 Massivdeki ededlerin cemini tapin

// let count = 0;
// function calcSum(){
//     for(let i=0;i < array.length;i++){
//         count=count+array[i]
//     }
//     console.log(count)
// }
// calcSum()

// Question 2 Massivdeki ededlerin ededi ortasini tapin

// let count = 0;
// function calcEdediOrta(){
//     for(let i=0;i < array.length;i++){
//         count=count+array[i]
//     }
//     return count / array.length;
// }

// console.log(calcEdediOrta())

// Question 3 Massivdeki ededlerin sayini tapan funksiya

// function arrayNumbers(){
//     return array.length
// }
// console.log(arrayNumbers())

// Question 4 Massivdə 100dən boyük 200dən kiçik ədədlərin sayını tapan funksiya düzəldin.
// function interval(){
//     let count = 0;
//     for(let i=0;i < array.length;i++){
//         if(array[i] > 100 && array[i] < 200){
//             count++
//         }
//     }
//     return count
// }
// console.log(interval())
// Question 5 Massivdəki cüt ədədləri tapan funksiya düzəldin

// function evenNumbers(){
//     for(let i=0;i < array.length;i++){
//         if(array[i] %2 == 0){
//             console.log(array[i])
//         }
//     }
// }
// evenNumbers()

// Question 6 Massivdəki ən böyük ədədi tapan funksiya düzəldin
// function findMax(){
//     let max = 0;
//     for(let i=0;i < array.length;i++){
//         if(array[i] > max){
//             max = array[i]
//         }
//     }
//     console.log(max)
// }
// findMax()

// Question 7 Massivdəki ən kicik ədədi tapan funksiya düzəldin

// function findMax(){
//     let small = array[0];
//     for(let i=0;i < array.length;i++){
//         if(array[i] < small){
//             small = array[i]
//         }
//     }
//     console.log(small)
// }
// findMax()

// Question 8 Massivdəki ən böyük ilə ən kiçik ədədin fərqini tapan funksiya düzəldin

// function calculate(){
//     let max = array[0]
//     let small = array[0]
//     for(let i=0;i < array.length;i++){
//         if(array[i] > max){
//             max = array[i]
//         }else if(array[i] < small){
//             small = array[i]
//         }
//     }
//     return max - small;
// }
// console.log(calculate())

// Task two
const arr = [678, "Freelance", 45, 67, 89, "Raymond", 23, true, "Michael", "Joseph", 545, 188, 293]

// Question 1 Massivdəki sözlərin sayını tapın

// function stringOnly(){
//     let count = 0;
//     for(let i=0;i < arr.length;i++){
//         if(typeof(arr[i]) === 'string'){
//             count++
//         }
//     }
//     return count;
// }
// console.log(stringOnly())

// Question 2 Massivdəki sözləri və onların hərfləri sayını göstərin. Misal : Freelance – 9 hərf
// function showLetters(){
//     for(let i=0;i < arr.length;i++){
//         if(typeof(arr[i]) === 'string'){
//             console.log(arr[i] + ' ' + arr[i].length)
//         }
//     }
// }
// showLetters()

// Question 3 Massivdəki sözlərin hərflərini 16liq say sistemində göstərin
// function saySistemi(){
//     for(let i=0;i < arr.length;i++){
//         if(typeof(arr[i]) === 'string'){
//             console.log(arr[i].charCodeAt(parseInt(arr[i], 16)))
//         }
//     }
// }
// saySistemi()

// Question 4 Massivdəki sözləri tərsinə yazın
// function reverse(){
//     let count = [];
//     for(let i=0;i < arr.length;i++){
//         if(typeof(arr[i]) === 'string'){
//             count.push(arr[i])
//         }
//     }
//     return count.reverse();
// }
// console.log(reverse())

// Question 5 Massivdəki sözlərin hər birində iştirak edən saitləri tapın

// Question 6 Massivdəki bütün böyük hərfləri kiçik, kiçik hərfləri böyük hərflə əvəzləyin

// Question 7 Massivdə iştirak edən bütün sözlərdəki UNİKAL saitləri göstərin.

// Question 8 ASCİİ cədvəlini istifadə edərək istifadəçidən onun adını 16liq say sistemində alın. Həmin adı oxunabilən –hərflər toplusu olaraq göstərin. Misal : İstifadəçi 547572616c daxil edir. 54 ASCİİ cədvəlində “T” hərfinə bərabərdir.,75 isə “u” hərfinə .Hər iki ədəd 1 simvola bərabərdir. Ekranda həmin hərflərin “Tural” sözü anlamına gəldiyini yazacaqsınız.
// let a = String(prompt('daxil edin:'))
// let b = a.match(/.{2}/g);
// console.log(String.fromCharCode(...b.map(x => parseInt(x, 16))))

// Question 9 Iki söz verilmişdir. Bu sözləri ASCİİ cədvəli üzrə müqayisə edərək hansının böyük olduğunu göstərin. (PS: Sözlərin müqayisəsi hərf-hərf aparılmalıdır.İlk sözün ilk hərfi ilə ikinci sözün ilk hərfi bərabərdirsə yalnız ozaman hər iki sözün ikinci hərfi müqayisəyə məruz qalır)

// Task three
const word = "Azerbaijan"
// Question 1 Sözdə hansısa bir frazanın olub olmadığı tapan funksiya yazın. Misal Azerbaijan sözündə “bai” və ya “akame” frazasının olub olmadığını yoxlayın.

// function checkPhrase(){
//     console.log(word.includes('bai'))
// }
// checkPhrase()

// Question 2 Sözün hansısa bir fraza ilə bitib bitmədiyi yoxlayan funksiya yazın
// function checkEnd(){
//     console.log(word.endsWith("Bvo"))
// }
// checkEnd()

// Question 3 Sözün hansısa bir fraza ilə başlayıb başlamadığını yoxlayan funksiya yazın.
// function checkStart(){
//     return word.startsWith("Bvo")
// }
// console.log(checkStart())

// Question 4 Sözdə verilmiş hərfin və ya hərf birləşməsinin hansı indeksdən başladığını qaytaran funksiya yazın. Əgər həmin ifadə sözdə tapılmadısa geriyə -1 qaytarın.
// function checkStartIndex(){
//     return word.indexOf("r")
// }
// console.log(checkStartIndex())

