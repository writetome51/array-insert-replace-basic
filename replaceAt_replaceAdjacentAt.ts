import { errorIfIndexNotValid }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid';
import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';


// In these 2 functions, index can be negative or positive.

export function replaceAt(index, newValue, array): void {
	errorIfIndexNotValid(index, array);
	array.splice(index, 1, newValue);
}


export function replaceAdjacentAt(index, newValues: any[], array): void {
	errorIfIndexNotValid(index, array);
	errorIfNotArray(newValues);
	array.splice(index, newValues.length, ...newValues);
}
