let menu = document.querySelector(".menu"),
    menuItem = document.createElement('li'),
    prot = document.getElementById('prompt'),
    title = document.getElementById('title'),
    menuItems = document.querySelectorAll('.menu-item'),
    adv = document.querySelector('.adv'),
    quesion = prompt("Как вы относитесь к технике Apple?", "");

menuItem.classList.add("menu-item");
menuItem.textContent = "Пятый пункт";
menu.appendChild(menuItem);
menu.insertBefore(menuItems[2], menuItems[1]);

document.body.style.background = "url(../requiredTask/img/apple_true.jpg) no-repeat center";
document.body.style.backgroundSize = "cover"

title.innerHTML = "Мы продаем только подлинную технику Apple";

adv.remove();

prot.textContent = quesion;