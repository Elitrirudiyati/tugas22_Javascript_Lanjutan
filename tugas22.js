var kalimat = "Saya ingin belajar bersama"
var splitKalimat = kalimat.split(" ")

function panggilforEach(item, index){
console.log("Item : ", item, "Indeks ke  ", index)	
}

splitKalimat.forEach(panggilforEach)