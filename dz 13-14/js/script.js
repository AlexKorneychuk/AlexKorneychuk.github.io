'use strict';


$(function () {


    var preQuestions = [

        {
            question: 'Какой-то вопрос №1',
            answers: ['Правильный ответ 1', 'Неправильный ответ 2', 'Неправильный ответ 3'],
            correctAnswer: 1
        },

        {
            question: 'Какой-то вопрос №2',
            answers: ['Неправильный ответ 1', 'Правильный ответ 2', 'Неправильный ответ 3'],

            correctAnswer: 2
        },

        {
            question: 'Какой-то вопрос №3',
            answers: ['Неправильный ответ 1', 'Неправильный ответ 2', 'Правильный ответ 3'],

            correctAnswer: 3
        }
    ];

    localStorage.setItem('preQuestions', JSON.stringify(preQuestions));

    var strQuestions = localStorage.getItem('preQuestions');

    var questions = JSON.parse(strQuestions);

    var test = $('#test').html();
    var testContent = tmpl(test, {
        data: questions
    });

    $('.questions__block').append(testContent);


    var $modal;
    var $overlay;

    function showModal() {

        $modal = $('<div class="modal"><p class="results"></p><button class="close">X</button></div>');
        $overlay = $('<div class="overlay"></div>');

        $('body').append($overlay).append($modal);
        $('.close, .overlay').click(function () {
            $modal.remove();
            $overlay.remove();
        });
    }


    $('.test__button').on('click', showModal);


    $(".test__button").on("click", function () {
        var $result = true;
        var indx = preQuestions.map(function (el, i) {

            return el.correctAnswer - 1 + i * 3;

        });
        console.log(indx);
        $("input").each(function (i) {
            if (~indx.indexOf(i) && !this.checked || !~indx.indexOf(i) && this.checked) $result = false
            console.log('this.checked', this.checked);
            console.log('~indx.indexOf(i)', ~indx.indexOf(i));
        });
    

        if ($result) $(".results").html("Все правильно");
        else {
            $(".results").html("Где-то допущена ошибка");
            $("input").prop("checked", false)
        }

    });

});