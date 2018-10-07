// Задание 1

let week = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

for (let i = 0; i < week.length; i++) {
    if ( i == 6 || i == 5) {
        document.write("<p class=weekEnd>" + week[i] + "</p>");
    } else if (i == 0) {
        document.write("<p class=now>" + week[i] + "</p>");
    } else {
        document.write("<p class=weekDays>" + week[i] + "</p>");
    }
}

//Задание 2
let arr = [];

for( let i = 0; i < 7; i++) {
    arr[i] = prompt("Введите число", "");
}

console.log(arr);

for( let i = 0; i < arr.length; i++) {
    if(arr[i][0] == 3 || arr[i][0] == 7) {
        console.log(arr[i]);
    }
}
