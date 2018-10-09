'use strict'

let money = prompt('Ваш бюджет на месяц?', 30000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '1999-08-04');

let monthExpensesOne = prompt('Введите обязательную статью расходов в этом месяце', ''),
    howMuchCostOne = +prompt('Во сколько обойдется?', ''),
    monthExpensesTwo = prompt('Введите обязательную статью расходов в этом месяце', ''),
    howMuchCostTwo = +prompt('Во сколько обойдется?', '');

let appDate = {
    budget: money,
    timeData: time,
    expenses : {
        [monthExpensesOne]: howMuchCostOne,
        [monthExpensesTwo]: howMuchCostTwo,
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appDate);
alert(money/30);
