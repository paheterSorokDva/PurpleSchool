const deposit = 12000;
const rate = 0.07;
const depositSrok = 24;
const houseCost = 13500;

const result = deposit * (1 + rate / 12) ** 24;

console.log(`Будет ${result}`)
if(result > houseCost){
    console.log(`Можем купить. Остаток ${result-houseCost}`)
}else{
    console.log(`Не можем`)
}