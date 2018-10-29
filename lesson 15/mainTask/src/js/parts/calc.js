function calc() {

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totatValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

     totatValue.textContent = 0;

    
    function checkInput() {
        return  (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0);
    }   

    persons.addEventListener('change', function() {
        personsSum = +this.value;  
        total = (daysSum + personsSum)*4000;
        
        if ( checkInput() ) {
            totatValue.textContent = 0;
        } else {
            let a = total;
            totatValue.textContent = a * place.options[place.selectedIndex].value;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;  
        total = (daysSum + personsSum)*4000;
        
        if ( checkInput() ) {
            totatValue.textContent = 0;
            
        } else {
            let a = total;
            totatValue.textContent = a * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('input', function() {
        if( checkInput() ) {
            totatValue.textContent = 0;
        } else {
            let a = total;
            totatValue.textContent = a * this.options[this.selectedIndex].value;       
        }
    });
}

module.exports = calc;