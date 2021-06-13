// Question 3 Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin?

function convertionType() {
    let a = prompt('Bir deger daxil edin:')
    let b = Number(a);
    if (b == Number(a)) {
        alert(b * 2)
    } else {
        alert('Tip cevirme ugursuz alindi xahis olunur birde sinayin.')
    }
}
convertionType()