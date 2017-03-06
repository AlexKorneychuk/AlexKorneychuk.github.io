$(document).ready(function () {

//Set default open/close settings
    $('.accordion-container').hide(); //Hide/close all containers
    $('.accordion-trigger:first').addClass('accordion-active').next().show(); //Add "accordion-active" class to first trigger, then show/open the immediate next container

//On Click
    $('.accordion-trigger').click(function () {
        if ($(this).next().is(':hidden')) { //If immediate next container is closed...
            $('.accordion-trigger').removeClass('accordion-active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
            $(this).toggleClass('accordion-active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
        }
        return false; //Prevent the browser jump to the link anchor
    });
});