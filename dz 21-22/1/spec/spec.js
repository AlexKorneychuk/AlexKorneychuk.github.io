var powerFunc = require('../app/js/script.min.js');

describe("pow", function() {
    it("default", function() {
        var result;
        result = powerFunc.pow(3, 6);
        expect(result).toEqual(729);
    });
    it("zero", function() {
        var result;
        result = powerFunc.pow(0, 5);
        expect(result).toEqual(0);
    });
    it("infinity", function() {
        var result;
        result = powerFunc.pow(500, 500);
        expect(result).toEqual(Infinity);
    });
    it("0-power", function() {
        var result;
        result = powerFunc.pow(3, 0);
        expect(result).toEqual(1);
    });
});