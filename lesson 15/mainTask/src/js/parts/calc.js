function calc() {

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totatValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totatValue.textContent = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;  
        total = (daysSum + personsSum)*4000;
        
        if (restDays.value == '' || persons.value == '') {
            totatValue.textContent = 0;
        } else {
            totatValue.textContent = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;  
        total = (daysSum + personsSum)*4000;
        
        if (persons.value == '' || restDays.value == '') {
            totatValue.textContent = 0;
        } else {
            totatValue.textContent = total;
        }
    });

    place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '') {
            totatValue.textContent = total;
        } else {
            let a = total;
            totatValue.textContent = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;