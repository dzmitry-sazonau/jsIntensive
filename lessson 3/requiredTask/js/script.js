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

let appData = {
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
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            } 
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert(appData.moneyPerDay);
    console.log("Функция прошла");
}
detectDayBudget();

function chooseOptExpenses() {
    for( let i = 1; i < 4; i++) {
        let a = prompt('Введите необязательную статью расходов в этом месяце', '');
        appData.optionalExpenses[i] = a;
    }
}
chooseOptExpenses();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = (save/100/12*percent).toFixed(1);
    alert("Доход в месяц с вашего депозита " + appData.monthIncome);
}
checkSavings();