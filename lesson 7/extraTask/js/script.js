window.addEventListener('DOMContentLoaded', () => {
    function step() {
        requestAnimationFrame(step);
        let time = new Date(),
            hours = time.getHours().toString(),
            minutes = time.getMinutes().toString(),
            seconds = time.getSeconds().toString(),
            clock = document.querySelector('#clock');
        
        if (hours.length < 2) {
            hours = '0' + hours;
        }
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        clock.textContent = hours + ':' + minutes + ':' + seconds;
        document.body.style.background = '#' + hours + minutes + seconds;
    }
    step();  
});

