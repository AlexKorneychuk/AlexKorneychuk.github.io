function pow(a, b) {
    var tmp = 1;
    var result;
    if ((a === 0) && (b !== 0)) {
        return 0;
    } else if (b < 0) {
        for (var i = 0; i > b; i--) {
            tmp *= a;
            result = 1 / tmp;
        }
        return result;
    } else
        for (var i = 0; i < b; i++) {
            tmp *= a;
        }
    return tmp;
}

do {
    var a = prompt('Enter your number', '');
    var c = parseInt(a, 10);
    console.log('try again');
} while ((isNaN(c)) || (c != a));

do {
    var b = prompt('Enter your power', '');
    var c = parseInt(b, 10);
    console.log('try again');
} while ((isNaN(c)) || (c != b));


console.log('result is', pow(a, b));
console.log('a=', a);
console.log('b=', b);
console.log('result by math function', Math.pow(a, b));