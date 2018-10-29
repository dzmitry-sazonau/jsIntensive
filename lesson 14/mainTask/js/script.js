$(document).ready(function() {
    
    $('.main_btna, .main_btn, li [href = \\#sheldure]').on('click', function() {
        $('.overlay').animate({opacity: 'toggle',}, 2000);
        $('.modal').animate({height: "show", }, 2000);
    });

    $('.close').on('click', function() {
        $('.overlay').animate({opacity: 'hide',}, 1000);
        $('.modal').animate({height: "hide", }, 1000);
    });
});