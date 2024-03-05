
/* Переписать функцию в  стрелочную*/

function toPower(num, power){
    const res = num ** num;
    return res;
}


const tp = (num,power) => num ** power;

console.log(tp(3,3));