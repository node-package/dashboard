import {Component, Directive, View, ElementRef, Input, Inject, Attribute, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

declare var Chart:any;

@Component({
    selector: 'panel-body-charts-js',
    properties: [
        'data',
        'labels',
        'series',
        'colours',
        'chartType',
        'legend',
        'options'
    ],
    events: ['chartClick', 'chartHover']
})

@View({
    template: `<div class="canvas-wrap atexo-canvas-wrap">
                    <canvas
                    class="canvas atexo-canvas-chart"
                    height="100%"
                    (click)="click($event)"
                    (mousemove)="hover($event)"></canvas>
                </div>`
})

export class AtexoChartsJs {

    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    private cvs:any;
    private parent:any;
    private chart:any;
    private _data:Array<any> = [];
    private _labels:Array<any> = [];
    private _options:any = {responsive: true};
    private _chartType:string;
    private _series:Array<any> = [];
    private _colours:Array<any> = [];
    private legend:boolean;
    private legendTemplate:any;
    private initFlag:boolean = false;
    private chartClick:EventEmitter<any> = new EventEmitter();
    private chartHover:EventEmitter<any> = new EventEmitter();
    private defaultsColours:Array<any> = [
        {
            fillColor: 'rgba(253, 216, 53,0.2)',
            strokeColor: 'rgba(253, 216, 53,1)',
            pointColor: 'rgba(253, 216, 53,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(253, 216, 53,0.8)',
            color: 'rgba(253, 216, 53,1)',
            highlight: 'rgba(253, 216, 53,0.8)'
        }, {
            fillColor: 'rgba(236, 64, 122,0.2)',
            strokeColor: 'rgba(236, 64, 122,1)',
            pointColor: 'rgba(236, 64, 122,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(236, 64, 122,0.8)',
            color: 'rgba(236, 64, 122,1)',
            highlight: 'rgba(236, 64, 122,0.8)'
        }, {
            fillColor: 'rgba(205, 220, 57,0.2)',
            strokeColor: 'rgba(205, 220, 57,1)',
            pointColor: 'rgba(205, 220, 57,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(205, 220, 57,0.8)',
            color: 'rgba(205, 220, 57,1)',
            highlight: 'rgba(205, 220, 57,0.8)'
        }, {
            fillColor: 'rgba(41, 182, 246,0.2)',
            strokeColor: 'rgba(41, 182, 246,1)',
            pointColor: 'rgba(41, 182, 246,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(41, 182, 246,0.8)',
            color: 'rgba(41, 182, 246,1)',
            highlight: 'rgba(41, 182, 246,0.8)'
        }, {
            fillColor: 'rgba(142, 68, 173,0.2)',
            strokeColor: 'rgba(142, 68, 173,1)',
            pointColor: 'rgba(142, 68, 173,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(142, 68, 173,0.8)',
            color: 'rgba(142, 68, 173,1)',
            highlight: 'rgba(142, 68, 173,0.8)'
        }, {
            fillColor: 'rgba(255, 193, 7,0.2)',
            strokeColor: 'rgba(255, 193, 7,1)',
            pointColor: 'rgba(255, 193, 7,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(255, 193, 7,0.8)',
            color: 'rgba(255, 193, 7,1)',
            highlight: 'rgba(255, 193, 7,0.8)'
        }, {
            fillColor: 'rgba(13, 71, 161,0.2)',
            strokeColor: 'rgba(13, 71, 161,1)',
            pointColor: 'rgba(13, 71, 161,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(13, 71, 161,0.8)',
            color: 'rgba(13, 71, 161,1)',
            highlight: 'rgba(13, 71, 161,0.8)'
        }];

    constructor(private element:ElementRef) {
    }


    ngOnInit() {
        //this.canvas = <HTMLCanvasElement> document.getElementById('myChart');
        this.canvas = <HTMLCanvasElement> this.element.nativeElement.children[0].children[0];
        this.ctx = this.canvas.getContext('2d');
        this.parent = this.element.nativeElement;
        this.refresh();
        this.initFlag = true;
    }

    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
        if (this.legendTemplate) {
            this.legendTemplate.destroy();
            this.legendTemplate = null;
        }
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
        if (this.initFlag && this._data && this._data.length > 0) {
            this.refresh();
        }
    }

    // private get chartType

    private get chartType() {
        return this._chartType;
    }

    //private set chartType

    private set chartType(value) {
        this._chartType = value;
        if (this.initFlag && this._chartType && this._chartType.length > 0) {
            this.refresh();
        }
    }

    // private get colours

    private get colours() {
        return this._colours;
    }

    // private set colours

    private set colours(value) {
        this._colours = value;
        if (this.initFlag && this._chartType && this._chartType.length > 0) {
            this.refresh();
        }
    }

    // private get labels

    private get labels() {
        return this._labels;
    }

    // private set labels

    private set labels(value) {
        this._labels = value;
        if (this.initFlag && this._chartType && this._chartType.length > 0) {
            this.refresh();
        }
    }

    // private get series

    private get series() {
        return this._series;
    }

    // private set series

    private set series(value) {
        this._series = value;
        if (this.initFlag && this._chartType && this._chartType.length > 0) {
            this.refresh();
        }
    }


    // private get options

    private get options() {
        return this._options;
    }

    // private set options

    private set options(value) {
        this._options = value;
        if (this.initFlag && this._chartType && this._chartType.length > 0) {
            this.refresh();
        }
    }


    setLegend() {
        let list = this.parent.getElementsByTagName('ul');
        if (list.length) {
            list[0].remove();
            this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
        } else {
            this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
        }
    }

    getColour(colour:Array<number>):any {
        return {
            fillColor: this.rgba(colour, 0.2),
            strokeColor: this.rgba(colour, 1),
            pointColor: this.rgba(colour, 1),
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: this.rgba(colour, 0.8),
            color: this.rgba(colour, 1),
            highlight: this.rgba(colour, 0.8)
        };
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    rgba(colour, alpha) {
        return 'rgba(' + colour.concat(alpha).join(',') + ')';
    }

    public click(evt) {
        let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
        let activePoints = atEvent.call(this.chart, evt);
        if (activePoints.length > 0) {
            let activeLabel = activePoints[0].label;
            this.chartClick.emit({activePoints: activePoints, activeLabel: activeLabel});
        } else {
            console.log('not point');
        }
    }

    public hover(evt) {
        let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
        let activePoints = atEvent.call(this.chart, evt);
        if (activePoints.length > 0) {
            let activeLabel = activePoints[0].label;
            let activePoint = activePoints[0].value;
            this.chartHover.emit({activePoints: activePoints, activePoint: activePoint, activeLabel: activeLabel});
        } else {
            console.log('not point');
        }
    }


    getChartBuilder(ctx:any, data:Array<any>, options:any) {
        return new Chart(ctx)[this.chartType](data, options);
    }

    getDataObject(label:string, value:any):any {
        if (this.chartType === 'Line'
            || this.chartType === 'Bar'
            || this.chartType === 'Radar') {
            return {
                label: label,
                data: value
            };
        }

        if (this.chartType === 'Pie'
            || this.chartType === 'Doughnut'
            || this.chartType === 'PolarArea') {
            return {
                label: label,
                value: value
            };
        }

        return null;
    }

    getChartData(labels:any, dataObject:any) {
        if (this.chartType === 'Line'
            || this.chartType === 'Bar'
            || this.chartType === 'Radar') {
            return {
                labels: labels,
                datasets: dataObject
            };
        }
        if (this.chartType === 'Pie'
            || this.chartType === 'Doughnut'
            || this.chartType === 'PolarArea') {
            return dataObject;
        }

    }

    private refresh() {

        this.ngOnDestroy();
        let dataset:Array<any> = [];

        for (let i = 0; i < this.data.length; i++) {

            let colourDesc:Array<number> = [this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255)];
            let colour = i < this.colours.length ? this.colours[i] : this.defaultsColours[i] || this.getColour(colourDesc);

            let data:any = (<any>Object).assign(colour,
                this.getDataObject(this.series[i] || this.labels[i], this.data[i]));

            dataset.push(data);

        }
        let data:any = this.getChartData(this.labels, dataset);

        this.chart = this.getChartBuilder(this.ctx, data, this.options);

        if (this.legend) {
            this.setLegend();
        }
    }

}