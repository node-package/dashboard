import { ElementRef, SimpleChange } from 'angular2/core';
import { DragulaService } from '../providers/dragula.provider';
export declare class DragAndDropDirective {
    private el;
    bag: string;
    dragulaModel: string;
    private container;
    private drake;
    private dragulaService;
    constructor(el: ElementRef, dragulaService: DragulaService);
    ngOnInit(): boolean;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
}
