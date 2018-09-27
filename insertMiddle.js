"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
var errorIfIndexNotValidAfterOffsetWasAdded_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded");
// By default, if array has odd number of items, values will be inserted just
// before the middle item.  Example:
// array is [1,2,3,4,5] .  You call insertMiddle([9,10], array) and result is
// [1,2,9,10,3,4,5] .  If you want to slightly change the insert position, set the
// optional offset parameter to + or - whatever integer you want.
function insertMiddle(values, array, offset) {
    if (offset === void 0) { offset = 0; }
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([values, array]);
    var index;
    if (array.length % 2 !== 0) { // If array has odd number of items...
        index = Math.floor(array.length / 2);
    }
    else
        index = array.length / 2;
    index += offset;
    errorIfIndexNotValidAfterOffsetWasAdded_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array);
    array.splice.apply(array, [index, 0].concat(values));
}
exports.insertMiddle = insertMiddle;
