var myArr = new Array(5);
for (var i = 0, j = myArr.length; i < j; i++) {
    do {
        myArr [i] = prompt('введите ' + (i + 1) + '-е имя', '');
    } while ((myArr [i]) === (''));
}

console.log(myArr);

do {
    var userName = prompt('Enter your name', '');
} while ((userName === ('')) || (userName.match(/\s/)));

var txt = 'Ошибка!!! Вас нет в базе, ';

for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] === userName) {
        txt = ('Добро пожаловать, ');
        break;
    }
}
alert(txt + userName);
// строка 14 выводит сообщение об ошибке.