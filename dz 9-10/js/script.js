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
$(document).ready(function () {
    $(".niceCheck").mousedown(
        /* при клике на чекбоксе меняем его вид и значение */
        function () {

            changeCheck(jQuery(this));
            // });


            $(".niceCheck").each(
                /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
                function () {
                    changeCheckStart(jQuery(this));
                });
        });


    function changeCheck(el)
    /*
     функция смены вида и значения чекбокса
     el - span контейнер дял обычного чекбокса
     input - чекбокс
     */ {
        var el = el,
            input = el.find("input").eq(0);
        checkDisabled = el.find("input").attr("disabled");

        if ((!input.attr("checked")) && (checkDisabled != "disabled")) {
            el.css("background-position", "0 -17px");
            input.attr("checked", true)
        } else {
            if (checkDisabled != "disabled") {
                el.css("background-position", "0 0");
                input.attr("checked", false)
            }
        }
        return true;
    }


    function changeCheckStart(el)
    /*
     если установлен атрибут checked, меняем вид чекбокса
     */ {
        var el = el,
            input = el.find("input").eq(0),
            checkDisabled = el.find("input").attr("disabled");

        if (input.attr("checked")) {
            el.css("background-position", "0 -17px");
        }

        /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */
        if (checkDisabled) {
            el.addClass("niceCheckDisabled");
        }
        return true;
    }
});
