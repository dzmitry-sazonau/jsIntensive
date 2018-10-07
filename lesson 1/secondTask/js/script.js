'use strict'

let num = prompt('Введите число', '33721'),
    pow = prompt('Введите степень', '3'),
    arr = [],
    op = 1;

for(let i = 0; i < num.length; i++){
    arr[i] = +num[i];
}

for(let j = 0; j < num.length; j++){
    op *= arr[j];
}

let powOp = op;

for(let i = 1; i < pow; i++){
    powOp *= op;
}

console.log("Наше число -", op);
console.log('Число в', pow,'степени', powOp);
console.log('Последние 2 цифры', powOp%100);