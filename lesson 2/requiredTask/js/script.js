'use strict'

let money = +prompt('Ваш бюджет на месяц?', 30000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '1999-08-04');

let appDate = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50){
            console.log("OK");
            appDate.expenses[a] = b;
        } else {
            i--;
        } 
};

// let i = 0;
// while (i<2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');
//     i++;
// } while (i<2);

appDate.moneyPerDay = appDate.budget / 30;

alert(appDate.moneyPerDay);

if (appDate.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appDate.moneyPerDay > 100 & appDate.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appDate.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

