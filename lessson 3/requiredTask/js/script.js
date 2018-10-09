'use strict'
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', 30000);

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 30000);
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '1999-08-04');
}
start();

let appDate = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');
        
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50){
                console.log("OK");
                appDate.expenses[a] = b;
            } else {
                i = i - 1;
            } 
    }
}
chooseExpenses();

function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed(1);
    alert(appDate.moneyPerDay);
    console.log("Функция прошла");
}
detectDayBudget();

function chooseOptExpenses() {
    for( let i = 1; i < 4; i++) {
        let a = prompt('Введите необязательную статью расходов в этом месяце', '');
        appDate.optionalExpenses[i] = a;
    }
}
chooseOptExpenses();

function detectLevel() {
    if (appDate.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appDate.moneyPerDay > 100 & appDate.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appDate.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appDate.monthIncome = (save/100/12*percent).toFixed(1);
    alert("Доход в месяц с вашего депозита " + appDate.monthIncome);
}
checkSavings();