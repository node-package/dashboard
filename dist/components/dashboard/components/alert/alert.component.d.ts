import { ElementRef } from 'angular2/core';
import { AlertProvider } from './providers/alert.provider';
export declare class Alert {
    private el;
    panelBodyObj: any;
    alertProvider: AlertProvider;
    items: Object[];
    itemSelected: Object;
    limit: number;
    offset: number;
    constructor(el: ElementRef, alertProvider: AlertProvider);
    ngOnInit(): boolean;
    alertServiceAll(): void;
}
