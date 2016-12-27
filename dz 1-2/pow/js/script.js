function pow(a, b) {

    var result = Math.pow(a, b);
    console.log('result is', result);
    console.log('a', a);
    console.log('b', b);
}

do {
    var a = prompt('Enter your number', '');
    a = parseInt(a, 10);
} while (isNaN(a));


do {
    var b = prompt('Enter your power', '');
    b = parseInt(b, 10);
} while (isNaN(b));

pow(a, b);
