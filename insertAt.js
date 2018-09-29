"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
// index can be negative or positive.
function insertAt(index, values, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([values, array]);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () { return array.splice.apply(array, [index, 0].concat(values)); }, array);
}
exports.insertAt = insertAt;
