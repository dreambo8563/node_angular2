import {Pipe} from 'angular2/core';


@Pipe({ name: 'sortBy' })
export class sortBy {
    transform(value: number, args: string[]): any {
        return Math.pow(value, parseInt(args[0] || '1', 10));
    }
}