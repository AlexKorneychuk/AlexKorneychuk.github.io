var formName = '<h3 style="text-align: center; margin-bottom: 30px">Тест по программированию</h3>';
var btn = "<input type='button' value='Проверить мои результаты' class='btn btn-primary btn-large' style='margin-top: 50px; width: 350px; position: absolute; left: 50%; margin-left: -175px'>"
var dataBase = {
    block_1: {
        question: '1. Вопрос №1',
        answer_1: 'Вариант ответа номер 1',
        answer_2: 'Вариант ответа номер 2',
        answer_3: 'Вариант ответа номер 3',
        true_answer: 'Вариант ответа номер 1',

        addBlock1: function () {
            var question = '<h5 style="font-weight: bold">' + this.question + '</h5>';
            var answer1 = "<input type='checkbox' name='opt1' style='margin-left: 30px'>" + '<span>' + this.answer_1 + '</span>' + '<br>';
            var answer2 = "<input type='checkbox' name='opt2' style='margin-left: 30px'>" + '<span>' + this.answer_2 + '</span>' + '<br>';
            var answer3 = "<input type='checkbox' name='opt3' style='margin-left: 30px'>" + '<span>' + this.answer_3 + '</span>' + '<br>';
            var x = formName + question + answer1 + answer2 + answer3;
            console.log('1st=', x);
            return x;
        }
    },

    block_2: {
        question: '2. Вопрос №2',
        answer_1: 'Вариант ответа номер 1',
        answer_2: 'Вариант ответа номер 2',
        answer_3: 'Вариант ответа номер 3',
        true_answer: 'Вариант ответа номер 2',

        addBlock2: function () {
            var question = '<h5 style="font-weight: bold">' + this.question + '</h5>';
            var answer1 = "<input type='checkbox' name='opt1' style='margin-left: 30px'>" + '<span>' + this.answer_1 + '</span>' + '<br>';
            var answer2 = "<input type='checkbox' name='opt2' style='margin-left: 30px'>" + '<span>' + this.answer_2 + '</span>' + '<br>';
            var answer3 = "<input type='checkbox' name='opt3' style='margin-left: 30px'>" + '<span>' + this.answer_3 + '</span>' + '<br>';
            var y = question + answer1 + answer2 + answer3;
            console.log('2nd=', y);
            return y;
        }
    },
    block_3: {
        question: '3. Вопрос №3',
        answer_1: 'Вариант ответа номер 1',
        answer_2: 'Вариант ответа номер 2',
        answer_3: 'Вариант ответа номер 3',
        true_answer: 'Вариант ответа номер 3',

        addBlock3: function () {
            var question = '<h5 style="font-weight: bold">' + this.question + '</h5>';
            var answer1 = "<input type='checkbox' name='opt1' style='margin-left: 30px'>" + '<span>' + this.answer_1 + '</span>' + '<br>';
            var answer2 = "<input type='checkbox' name='opt2' style='margin-left: 30px'>" + '<span>' + this.answer_2 + '</span>' + '<br>';
            var answer3 = "<input type='checkbox' name='opt3' style='margin-left: 30px'>" + '<span>' + this.answer_3 + '</span>' + '<br>';
            var z = question + answer1 + answer2 + answer3 + btn;
            console.log('3rd=', z);
            return z;
        }
    }
};
var input = document.createElement('input');
input.type = 'checkbox';
input.className = 'question__input';

x = String(dataBase.block_1.addBlock1());
console.log('x', x);
console.log('x', typeof x);
var em = '<form action="#" method="post">' + String(dataBase.block_1.addBlock1()) + String(dataBase.block_2.addBlock2()) + String(dataBase.block_3.addBlock3()) + '</form>';

console.log('em', typeof em);

var formHolding = document.createElement('div');
formHolding.className = "col-md-7";
formHolding.style = 'width: 100%';
formHolding.innerHTML = em;

var innerDiv = document.createElement('div');
innerDiv.className = "row";
innerDiv.style = 'width: 100%';
innerDiv.appendChild(formHolding);

var divContainer = document.createElement('div');
divContainer.className = "container";
divContainer.style = 'width: 720px;';
divContainer.appendChild(innerDiv);

var divWrap = document.createElement('div');
divWrap.className = "wrapper";
divWrap.style = 'margin: 0 auto; width: 100%';
divWrap.appendChild(divContainer);

document.body.appendChild(divWrap);

// Сделал чекбоксами. Кто его знает будет там множественный выбор или нет. В условии не дано
