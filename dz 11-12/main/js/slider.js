(function ($) {

    $.fn.slider = function (options) {

        var defaults = {

            sliderColor: 'lightblue',
            leftBtnColor: 'lightgrey',
            rightBtnColor: 'lightgrey'

        };

        var settings = $.extend(defaults, options);

        var $link = this;
        var $leftBtn = $('.carousel-arrow-left');
        var $rightBtn = $('.carousel-arrow-right');
        var $elementsList = $('.carousel-list');
        var $sliderMain = $(".carousel-hider");
        var $pixelsOffset = 125;
        var $currentLeftValue = 0;
        var $elementsCount = $elementsList.find('li').length;
        var $minimumOffset = -(($elementsCount - 5) * $pixelsOffset);
        var $maximumOffset = 0;

        $leftBtn.css({
            'background-color': settings.leftBtnColor
        });

        $rightBtn.css({
            'background-color': settings.rightBtnColor
        });

        $sliderMain.css({
            'background-color': settings.sliderColor
        });


        console.log('defaults', defaults);
        console.log('options', options);
        console.log('settings', settings);

        $leftBtn.click(function () {
            if ($currentLeftValue != $maximumOffset) {
                $currentLeftValue += 125;
                $elementsList.animate({left: $currentLeftValue + "px"}, 500);
            }
        });

        $rightBtn.click(function () {
            if ($currentLeftValue != $minimumOffset) {
                $currentLeftValue -= 125;
                $elementsList.animate({left: $currentLeftValue + "px"}, 500);
            }
        });

        return this;
    }

})(jQuery);



