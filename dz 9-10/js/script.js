$(document).ready(function () {

    $('.dropdown').hover(
        function () {
            $(this).children('.sub-menu').stop(true, true);
            $(this).children('.sub-menu').slideDown(400).animate({
                backgroundColor: '#7c9eff'
            });
        },

        function () {
            $(this).children('.sub-menu').delay(100).slideUp(300).animate({
                backgroundColor: 'transparent'
            });
        }
    );


    $('select').niceSelect();

});



