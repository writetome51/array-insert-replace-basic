import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfValuesAreNotArrays }
	from '@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays';
import { removeAdjacentAt } from './removeAdjacentAt';
import { insertManyAt } from './insertOneAt_insertManyAt';


// Example: if array is [1,2,3,4,5,6,7] , and you call replaceMiddle([9,10], 2, array) ,
// the result will be [1,2,9,10,6,7] .  It preserves the first 2 items and
// the last 2.  values doesn't have to be same length as number of items
// it's replacing.

export function replaceMiddle(newValues, numItemsToPreserveAtEachEnd, array): void {
	errorIfValuesAreNotArrays([newValues, array]);
	errorIfNotInteger(numItemsToPreserveAtEachEnd);
	if (numItemsToPreserveAtEachEnd < 1) throw new Error('The number of bookend items to' +
		' preserve must be at least 1');
	if ((numItemsToPreserveAtEachEnd * 2) > array.length) {
		throw new Error('The number of bookend items to preserve multiplied by 2' +
			' exceeds the length of the array. This is now allowed.');
	}
	let numToRemove = array.length - (numItemsToPreserveAtEachEnd * 2);
	removeAdjacentAt(numItemsToPreserveAtEachEnd, numToRemove, array);
	insertManyAt(numItemsToPreserveAtEachEnd, newValues, array);
}
