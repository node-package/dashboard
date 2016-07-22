import {Component, Directive, View, ElementRef, Input, Inject, Attribute, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

declare var c3:any;

@Component({
    selector: 'chart',
    properties: [
        'data',
        'type',
        'configOption',
        'configData'
    ],
    events: ['chartClick', 'chartMouseOver', 'chartMouseOut']
})

@View({
    template: `<div class="chart-bindto-wrap atexo-chart-bindto-wrap"></div>`
})

export class AtexoChart {

    private bindTo:HTMLCanvasElement;
    private chart:any;
    private chartConfig:Object;
    private _data:Array<any> = [];
    private _type:String = 'spline';
    private _configOption:Object;
    private _configData:Object;
    private chartClick:EventEmitter<any> = new EventEmitter();
    private chartMouseOver:EventEmitter<any> = new EventEmitter();
    private chartMouseOut:EventEmitter<any> = new EventEmitter();


    constructor(private element:ElementRef) {
    }


    ngOnInit() {
        this.init();
        this.refresh();
    }

    ngOnDestroy() {
        return true;
    }

    ngAfterViewInit() {

        return true;
    }

    // private get data
    private get data() {
        return this._data;
    }

    // private set data
    private set data(value) {
        this._data = value;
        if (this._type && this._type.length > 0) {
            this.refresh();
        }
    }

    // private get type
    private get type() {
        return this._type;
    }

    // private set type
    private set type(value) {
        this._type = value;
        if (this._type && this._type.length > 0) {
            this.refresh();
        }
    }

    // private get configOption
    private get configOption() {
        return this._configOption;
    }

    // private set configOption
    private set configOption(value) {
        this._configOption = value;
    }


    // private get configData
    private get configData() {
        return this._configData;
    }

    // private set configData
    private set configData(value) {
        this._configData = value;
    }


    // private get config
    private assignChartConfig() {
        this.chartConfig = {
            bindto: this.bindTo,
            data: {
                columns: this.data,
                type: this.type,
                onclick: (d, i) => {
                    this.onclick(d, i);
                },
                onmouseover: (d, i) => {
                    this.onmouseover(d, i);
                },
                onmouseout: (d, i) => {
                    this.onmouseout(d, i);
                }
            }
        };

        this.chartConfig['data'] = Object.assign(this.chartConfig['data'], this.configData);

        this.chartConfig = Object.assign(this.chartConfig, this.configOption);

        //console.log(this.chartConfig);
    }

    init() {
        this.bindTo = <HTMLCanvasElement> this.element.nativeElement;
    }

    refresh() {
        this.assignChartConfig();
        this.chart = c3.generate(this.chartConfig);
    }

    refreshData() {
        this.chart.load({
            columns: this.data
        });
    }

    public onclick(data:any, element:any) {
        this.chartClick.emit({
            chart: this.chart,
            data: data,
            element: element,
            ngElement: this.bindTo
        });
    }

    public onmouseover(data:any, element:any) {
        this.chartMouseOver.emit({
            chart: this.chart,
            data: data,
            element: element,
            ngElement: this.bindTo
        });
    }

    public onmouseout(data:any, element:any) {
        this.chartMouseOut.emit({
            chart: this.chart,
            data: data,
            element: element,
            ngElement: this.bindTo
        });
    }


}