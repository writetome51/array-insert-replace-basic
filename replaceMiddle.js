"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
// Example: if array is [1,2,3,4,5,6,7] , and you call replaceMiddle(2, [9,10], array) ,
// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
// the last 2.  newValues doesn't have to be same length as number of items
// it's replacing.
function replaceMiddle(numItemsToPreserveAtEachEnd, newValues, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([newValues, array]);
    errorIfNotInteger_1.errorIfNotInteger(numItemsToPreserveAtEachEnd);
    if (numItemsToPreserveAtEachEnd < 1)
        throw new Error('The number of bookend items to' +
            ' preserve must be at least 1');
    if ((numItemsToPreserveAtEachEnd * 2) > array.length) {
        throw new Error('The number of bookend items to preserve multiplied by 2' +
            ' exceeds the length of the array. This is now allowed.');
    }
    var numToRemove = array.length - (numItemsToPreserveAtEachEnd * 2);
    array.splice.apply(array, [numItemsToPreserveAtEachEnd, numToRemove].concat(newValues));
}
exports.replaceMiddle = replaceMiddle;
