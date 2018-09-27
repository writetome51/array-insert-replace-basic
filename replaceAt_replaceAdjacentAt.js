"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfIndexNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
// In these 2 functions, index can be negative or positive.
function replaceAt(index, newValue, array) {
    errorIfIndexNotValid_1.errorIfIndexNotValid(index, array);
    array.splice(index, 1, newValue);
}
exports.replaceAt = replaceAt;
function replaceAdjacentAt(index, newValues, array) {
    errorIfIndexNotValid_1.errorIfIndexNotValid(index, array);
    errorIfNotArray_1.errorIfNotArray(newValues);
    array.splice.apply(array, [index, newValues.length].concat(newValues));
}
exports.replaceAdjacentAt = replaceAdjacentAt;
