$(document).ready(function () {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
        //добавляет нажатому элементу класс active и убирает его у элементов-соседей
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        //ищет ближайший вверх по ДОМу div с классом tabs, в нем у всех элементов div с классами tabs__content
        //удаляет класс active. и элементу с индексом, соответствующим индексу li добавляет класс active
    });

});

$(document).ready(function () {
    var $tip = $("span.tip");
    var $btnHelp = $("button.btn__help");
    $("input").focus(function () {
        $tip.eq($(this).index('input')).fadeIn(500);
    });
    $("input").on('blur', (function () {
        $tip.fadeOut(500);
    }));
    $btnHelp.on('click', $tip.fadeIn(1000).fadeOut(1000));
});


