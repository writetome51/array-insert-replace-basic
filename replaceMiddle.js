"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
var removeAdjacentAt_1 = require("@writetome51/array-removers-basic/removeAdjacentAt");
var insertOneAt_insertManyAt_1 = require("./insertOneAt_insertManyAt");
// Example: if array is [1,2,3,4,5,6,7] , and you call replaceMiddle([9,10], 2, array) ,
// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
// the last 2.  values doesn't have to be same length as number of items
// it's replacing.
function replaceMiddle(newValues, numItemsToPreserveAtEachEnd, array) {
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
    removeAdjacentAt_1.removeAdjacentAt(numItemsToPreserveAtEachEnd, numToRemove, array);
    insertOneAt_insertManyAt_1.insertManyAt(numItemsToPreserveAtEachEnd, newValues, array);
}
exports.replaceMiddle = replaceMiddle;
