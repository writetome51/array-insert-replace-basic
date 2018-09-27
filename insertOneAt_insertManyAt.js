"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexValid_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexValid_getActionResult");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
// In all the functions below, atIndex can be negative or positive.
function insertOneAt(index, value, array) {
    errorIfNotArray_1.errorIfNotArray(array);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () { return array.splice(index, 0, value); }, array);
}
exports.insertOneAt = insertOneAt;
function insertManyAt(index, values, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([values, array]);
    ifIndexValid_getActionResult_1.ifIndexValid_getActionResult(index, function () { return array.splice.apply(array, [index, 0].concat(values)); }, array);
}
exports.insertManyAt = insertManyAt;
