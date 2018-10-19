let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    money, 
    time;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '1999-08-04');
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appDate.budget = money;
    appDate.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

document.body.addEventListener('mousemove', function() {
    if (expensesItem[0].value == '' || expensesItem[1].value == '' 
        || expensesItem[2].value == '' || expensesItem[3].value == '') {
        expensesBtn.disabled = true;
    } else {
        expensesBtn.disabled = false;
    }

    if(optionalExpensesItem[0].value == '' && optionalExpensesItem[1].value == '' 
        && optionalExpensesItem[2].value == '') {
        optionalExpensesBtn.disabled = true;
    } else { 
        optionalExpensesBtn.disabled = false;
    }
});

expensesBtn.addEventListener('click', function() {
    let sum = 0,
        regVal = /^\d+$/;
    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
            
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50 && regVal.test(b)){
            console.log("OK");
            appDate.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        } 
    }
    expensesValue.textContent = sum;
    appDate.expensesSum = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    optionalExpensesValue.textContent = ' '; 
    for( let i = 0; i < optionalExpensesItem.length; i++) {
        let regString =/^[А-Я]$/i,
            opt = optionalExpensesItem[i].value;

	    if (regString.test(opt)) {
            appDate.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent +=  appDate.optionalExpenses[i] + ' ';
        }
    }
});

countBtn.addEventListener('click', () => {
    if (appDate.budget != undefined) {
        appDate.moneyPerDay = ((appDate.budget / 30) -(appDate.expensesSum / 30)).toFixed(1);
        dayBudgetValue.textContent = appDate.moneyPerDay;

        if (appDate.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка!';
        } else if (appDate.moneyPerDay > 100 & appDate.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка!';
        } else if (appDate.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка!';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        levelValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    appDate.income = items.split(", ");
    incomeValue.textContent = appDate.income;
});

checkSavings.addEventListener('click', () => {
    if (appDate.savings == true) {
        appDate.savings = false;
    } else {
        appDate.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appDate.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appDate.monthIncome = (sum/100/12*percent).toFixed(1);
        appDate.yearIncome = (sum/100*percent).toFixed(1);

        monthSavingsValue.textContent = appDate.monthIncome;
        yearSavingsValue.textContent = appDate.yearIncome;
    }
});

percentValue.addEventListener('input', () => {
    if (appDate.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appDate.monthIncome = (sum/100/12*percent).toFixed(1);
        appDate.yearIncome = (sum/100*percent).toFixed(1);

        monthSavingsValue.textContent = appDate.monthIncome;
        yearSavingsValue.textContent = appDate.yearIncome;
    }
});

let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
