import { ifIndexValid_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexValid_getActionResult';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { errorIfValuesAreNotArrays }
	from '@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays';


// In all the functions below, atIndex can be negative or positive.


export function insertOneAt(index, value, array): void {
	errorIfNotArray(array);
	ifIndexValid_getActionResult(index, () => array.splice(index, 0, value), array);
}


export function insertManyAt(index, values: any[], array): void {
	errorIfValuesAreNotArrays([values, array]);
	ifIndexValid_getActionResult(index, () => array.splice(index, 0, ...values), array);
}
