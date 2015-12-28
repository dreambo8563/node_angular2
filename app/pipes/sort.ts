import {Pipe} from 'angular2/core';
/**
 *  * Example:
 *   {{ products |  sortBy: scores}}
 *   sortBy product.scores in the array of products
*/
@Pipe({ name: 'sortBy' })
export class sortBy {
    transform(inputArray: Array<any>, args: string[]): any {
        let prop = args[0];
        return inputArray.sort(function(a, b) {
            // console.log(a[prop]);
            return (b[prop]- a[prop] );
        });
    }
}
