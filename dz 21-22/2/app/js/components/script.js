$(function () {


    const preQuestions = [

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

    const strQuestions = localStorage.getItem('preQuestions');

    const questions = JSON.parse(strQuestions);

    let test = $('#test').html();
    let testContent = tmpl(test, {
        data: questions
    });

    $('.questions__block').append(testContent);




    function showModal() {
        let $modal;
        let $overlay;
        $modal = $('<div class="modal"><p class="results"></p><button class="close">X</button></div>');
        $overlay = $('<div class="overlay"></div>');

        $('body').append($overlay).append($modal);
        $('.close, .overlay').click( () => {
            $modal.remove();
            $overlay.remove();
        });
    }


    $('.test__button').on('click', showModal);


    $(".test__button").on("click", () => {
        let $result = true;
        let indx = preQuestions.map((el, i) => {

            return el.correctAnswer - 1 + i * 3;

        });
        console.log('indx', indx);
        $("input").each(function(i) {

            if (~indx.indexOf(i) && !this.checked || !~indx.indexOf(i) && this.checked)
                $result = false;
            });


        if ($result){
            $(".results").html("Все правильно");
            $("input").prop("checked", false)
        }
        else {
            $(".results").html("Где-то допущена ошибка");
            $("input").prop("checked", false)
        }

    });

});