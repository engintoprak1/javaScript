console.log("Merhaba engin")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11
console.log(euroDun)

let konutKredileri = ["konut kredisi","emlak konut kredisi","kamut konut kredisi","özel konut kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "<li>")
}
console.log("<ul>")
