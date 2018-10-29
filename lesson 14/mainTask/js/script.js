$(document).ready(function() {
    
    $('.main_btn').on('click', function() {
        viewModalWindow()
    });

    $('.main_btna').on('click', function() {
        viewModalWindow();
    });

    $('#viewModal').on('click', function() {
        viewModalWindow();
    });

    $('.close').on('click', function() {
        $('.overlay').animate({opacity: 'hide',}, 1000);
        $('.modal').animate({height: "hide", }, 1000);
    });

    function viewModalWindow() {
        $('.overlay').animate({opacity: 'toggle',}, 2000);
        $('.modal').animate({height: "show", }, 2000);
    }
});