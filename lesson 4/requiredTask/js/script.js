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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appDate.moneyPerDay = (appDate.budget / 30).toFixed(1);
        alert(appDate.moneyPerDay);
    },
    detectLevel: function() {
        if (appDate.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appDate.moneyPerDay > 100 & appDate.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appDate.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appDate.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appDate.monthIncome = (save/100/12*percent).toFixed(1);
            alert("Доход в месяц с вашего депозита " + appDate.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for( let i = 1; i < 4; i++) {
            let a = prompt('Введите необязательную статью', '');
            appDate.optionalExpenses[i] = a;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        while ( (typeof(items)) !== 'string' || items == null || items == '' ){
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        }

        appDate.income = items.split(", ");
        let extraQuestion = prompt("Может что-нибудь ещё?")
        if ( extraQuestion != null){
            appDate.income.push(extraQuestion);
        }
        appDate.income.sort();

        appDate.income.forEach( function(items, i) {
            document.write("Способы дополнительного зароботка " + (i+1) + ': ' + items + "<br>");
        });
    }
};

for (let key in appDate) {
    console.log("Наша программа включает в себя данные:" + key);
}