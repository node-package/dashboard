import { ElementRef } from 'angular2/core';
export declare class AtexoChartsJs {
    private element;
    private canvas;
    private ctx;
    private cvs;
    private parent;
    private chart;
    private _data;
    private _labels;
    private _options;
    private _chartType;
    private _series;
    private _colours;
    private legend;
    private legendTemplate;
    private initFlag;
    private chartClick;
    private chartHover;
    private defaultsColours;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): boolean;
    private data;
    private chartType;
    private colours;
    private labels;
    private series;
    private options;
    setLegend(): void;
    getColour(colour: Array<number>): any;
    getRandomInt(min: any, max: any): any;
    rgba(colour: any, alpha: any): string;
    click(evt: any): void;
    hover(evt: any): void;
    getChartBuilder(ctx: any, data: Array<any>, options: any): any;
    getDataObject(label: string, value: any): any;
    getChartData(labels: any, dataObject: any): any;
    private refresh();
}