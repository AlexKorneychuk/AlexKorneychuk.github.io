var powerFunc = {
    pow: function(a, b) {
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
};

module.exports = powerFunc;





