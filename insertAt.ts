import { ifIndexValid_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexValid_getActionResult';
import { errorIfValuesAreNotArrays }
	from '@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays';


// index can be negative or positive.

export function insertAt(index, values: any[], array): void {
	errorIfValuesAreNotArrays([values, array]);
	ifIndexValid_getActionResult(index, () => array.splice(index, 0, ...values), array);
}
