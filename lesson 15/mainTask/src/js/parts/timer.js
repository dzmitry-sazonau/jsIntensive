function timer() {

    let deadline = '2018-11-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60))),
            hs = hours.toString(),
            ms = minutes.toString(),
            ss = seconds.toString();

        if (hs.length < 2) {
            hours = '0' + hours;
        }
        if (ms.length < 2) {
            minutes = '0' + minutes;
        }
        if (ss.length < 2) {
            seconds = '0' + seconds;
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            h = timer.querySelector('.hours'),
            m = timer.querySelector('.minutes'),
            s = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
            h.textContent = t.hours;
            m.textContent = t.minutes;
            s.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                h.textContent = '00';
                m.textContent = '00';
                s.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;