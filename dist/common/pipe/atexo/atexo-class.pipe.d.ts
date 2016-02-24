import { PipeTransform } from 'angular2/core';
export declare class ToClassPipe implements PipeTransform {
    postClass: string;
    transform(value: string, args: string[]): any;
}
