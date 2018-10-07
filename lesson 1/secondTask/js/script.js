'use strict'

let num = prompt('Введите число', '33721'),
    pow = prompt('Введите степень', '3'),
    arr = [],
    arrOp = [],
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
console.log('Число в', pow,'степени -', powOp);
let powOpString = powOp.toString();

for(let i = 0; i < powOpString.length; i++){
    arrOp[i] = +powOpString[i];
}

console.log('Это первые две цифры -', arrOp[0], arrOp[1]);