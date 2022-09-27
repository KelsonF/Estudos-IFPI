"use strict";
exports.__esModule = true;
var io_utils_1 = require("../../ultilidades/io_utils");
function isItPair(value) {
    if (value % 2 == 0) {
        return "É par";
    }
    else {
        return "É impar";
    }
}
var value = (0, io_utils_1.input)();
var result = isItPair(value);
console.log(result);
