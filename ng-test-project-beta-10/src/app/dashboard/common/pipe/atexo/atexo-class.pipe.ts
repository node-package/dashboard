// app/common/pipe/atexo/atexo-class.pipe.ts
/**
 *
 * @name atexo-class.pipe.ts
 *
 */

import {Pipe, PipeTransform} from '@angular/core';
import {isPresent } from '@angular/core/src/facade/lang';
/*
 * Build custom class type category
 * Takes an exponent argument that defaults to 'type-'.
 * Usage:
 *   value | toClass:exponent
 * Example:
 *   {{ 'list' |  toClass:'type-'}}
 *   formats to: 'type-list'
 */
@Pipe({name: 'toClass'})
export class ToClassPipe implements PipeTransform {
    postClass:string;

    transform(value:string, args:string[]):any {
        this.postClass = isPresent(args) ? args[0] : 'panel-body-type-';
        return this.postClass.concat(value.toLowerCase());
    }
}
