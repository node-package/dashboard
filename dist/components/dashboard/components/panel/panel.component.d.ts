import { ElementRef } from 'angular2/core';
export declare class Panel {
    private el;
    panelObj: any;
    collapseClass: Boolean;
    closeClass: Boolean;
    constructor(el: ElementRef);
    ngOnInit(): boolean;
    collapse(): boolean;
    close(): boolean;
}
