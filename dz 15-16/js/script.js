$(document).ready(function () {

    $(".field").keyup(function () {
        $(".x").fadeIn();
        if ($.trim($(".field").val()) == "") {
            $(".x").fadeOut();
        }
    });


    $(".x").click(function () {
        $(".field").val("");
        $(this).hide();
    });


    $(".submit").on('click', function () {
        searchFunc();
    });

    $('.field').keyup(function () {
        if (event.keyCode == 13) {
            searchFunc();
        }
    });

    function searchFunc() {

        var searchRequest = $('.field').val();
        var API_KEY = '4598851-cd6e9cce5ba46c07d51937926';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchRequest);
        $.getJSON(URL, function (data) {
            $('.results').empty();
            data.hits.splice(10);
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function (i, hit) {
                    $('.results').append('<a class="found" href="' + hit.pageURL + '">' + '<img src="' + hit.webformatURL + '" alt="' + "some" + searchRequest + "image" + '">' + '</a>' + '</br>');
                });
            else
                $('.results').append('<p class="badrequest">Нету совпадений. Попробуйте еще раз</p>');
        });
    }

});

// ---------------------2nd part-------------------

function Human() {
    this.name = 'Afanasiy';
    this.age = 33;
    this.sex = 'male';
    this.height = 210;
    this.weight = 160
}
console.log('human', Human);

var human = new Human;

function Worker() {
    this.place = 'factoryOfGold';
    this.salary = 330000;
    this.work = function () {
        console.log('worker is working somewhere...');
    }
}
Worker.prototype = human;

var newWorker = new Worker();
var newWorker1 = new Worker();
var newWorker2 = new Worker();


console.log('newWorker', newWorker);
console.log('newWorker.name', newWorker.name);
console.log('newWorker1.height', newWorker1.height);
newWorker2.work();


function Student() {
    this.university = 'National Aviation University';
    this.cashout = '100$';
    this.show = function () {
        console.log('Watching TV shows')
    }
}

Student.prototype = human;

var newStudent = new Student();
var newStudent1 = new Student();
var newStudent2 = new Student();

console.log('newStudent', newStudent);
console.log('newStudent.name', newStudent.name);
console.log('newStudent1.height', newStudent1.height);
newStudent2.show();
