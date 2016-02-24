import { PipeTransform } from 'angular2/core';
export declare class TrancatePipe implements PipeTransform {
    length: number;
    placeholderEnd: string;
    transform(value: string, args: any[]): any;
}
