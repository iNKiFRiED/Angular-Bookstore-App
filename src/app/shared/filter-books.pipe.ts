import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable()
@Pipe({
    name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

    transform(elems: any, ...args: any[]): any {
        // Filter the books on every single property
        // and compare the stringified value to the provided query args
        const arg = args.find(a => a !== '');
        if (!arg) {
            return elems;
        }
        return elems.filter((o) => {
            return Object.keys(o).some((k) => {
                return o[k].toString().toLowerCase().indexOf(arg) !== -1;
            });
        });
    }
}
