const $stavka = 80;
const chasovInDay = 5;
const rabota = 5;
const maxRabota = 11;


let zakazChas = 40; /// поступил заказ

let a = zakazChas / chasovInDay; // Скока дней потребуется
console.log(a); /// 8 дней потребуется 
console.log(rabota-a); // -3 три дня потребуется ещё с учетом выходных

let nedelya = rabota +2;
let b = ((rabota-a)*(-1)) + nedelya;
console.log(b); //потребуется чтоб выполнить

if(b > maxRabota){
    console.log(false + ' ' + 'Не Успею');
}
else{
    console.log(true + ' ' + 'Успею');
}

console.log('$' + zakazChas * $stavka); // потребую