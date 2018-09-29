import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { errorIfValuesAreNotArrays }
	from '@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays';
import { ifIndexValid_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexValid_getActionResult';


// In these 2 functions, index can be negative or positive.

export function replaceAt(index, newValue, array): void {
	errorIfNotArray(array);
	ifIndexValid_getActionResult(index, ()=> array.splice(index, 1, newValue) , array);
}


export function replaceAdjacentAt(index, newValues: any[], array): void {
	errorIfValuesAreNotArrays([newValues, array]);
	ifIndexValid_getActionResult(
		index, ()=> array.splice(index, newValues.length, ...newValues), array
	);
}
