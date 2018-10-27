window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for( let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if( tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for( let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2018-12-22';

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

    // Modal Window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    description.forEach(function(item) {
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        
        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            item.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');
    
    statusMessage.classList.add('status');
    for(let i = 0; i < form.length; i++) {

        let input = form[i].getElementsByTagName('input');
        form[i].addEventListener('submit', function(event) {
            event.preventDefault();
            form[i].appendChild(statusMessage);

            let request = new XMLHttpRequest(),
                formData = new FormData(form[i]),
                obj = {};
            
            request.open('POST', 'server.php');
            //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            
            let json = JSON.stringify(obj);
            request.send(json);
    
            request.addEventListener('readystatechange', function() {
                if(request.readyState < 4) {
                    statusMessage.textContent = message.loading;
                } else if(request.readyState === 4 && request.status == 200){
                    statusMessage.textContent = message.success;
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
    
            for(let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }
   
});