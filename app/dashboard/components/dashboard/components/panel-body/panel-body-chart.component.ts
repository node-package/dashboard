import {Component, Directive, View, ElementRef, Input, Attribute} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {isPresent, isBlank } from 'angular2/src/facade/lang';


import {AtexoColorChartConstant, AtexoChartConstant} from '../../../../common/constants/atexo.constant';
import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';
import {Util, Convert} from '../../../../common/services/atexo.service';
import {AtexoChart} from '../../../../common/components/atexo-chart.component';

import {PanelBodyChartProvider} from './providers/panel-body-chart.provider';
import {AtexoSpinner} from '../../../../common/components/atexo-spinner.component';

//PanelBodyEditorProvider

declare var c3:any;

@Component({
    selector: 'panel-body-chart',
    providers: [PanelBodyChartProvider]
    //inputs: ['panelObj']
})

@View({
    template: `
            <div class="clearfix sub-header" *ngIf="xhrStatusDisplayResources">
                <div class="pull-left">
                    <form class="sub-header-form-horizontal" action="">
                        <div *ngIf="panelBodyObj.chart.axes.filter.active" class="filter-item">
                            <label class="control-label" for="">Année</label>
                            <select
                                [(ngModel)]="currentYear"
                                class="input-select"
                                (change)="panelBodyChartUpdateFilerYear($event, $event.target.value)">
                                <option *ngFor="#year of filterYear" [value]="year" (click)="preventDefault($event)">{{year}}</option>
                            </select>
                        </div>
                    </form>
                </div>
                <ul class="atexoui-list right horizontal">
                    <li *ngFor="#type of chartTypes; #i=index"
                        [ngClass]="{ available: chartTypes[i].active, disabled: !chartTypes[i].active }">
                        <a
                           href=""
                           [ngClass]="{ available: chartTypes[i].active, disabled: !chartTypes[i].active }"
                           (click)="panelBodyChartUpdateType(i);"
                           title="{{type.name}}"
                           name="{{type.name}}">
                            <span class="{{type.icons}}"></span>

                        </a>
                    </li>
                </ul>
            </div>
            <atexo-spinner *ngIf="xhrStatusDisplaySpinner"></atexo-spinner>

            <div class="">
                <chart
                    *ngIf="xhrStatusDisplayResources"
                    class="c3-responsive"
                    [data]="chartData"
                    [type]="chartType"
                    [configOption]="chartConfigOption"
                    [configData]="chartConfigData"
                    (chartClick)="chartClicked($event)"
                    (chartMouseOver)="chartMouseOvered($event)"
                    (chartMouseOut)="chartMouseOuted($event)">
                </chart>
            </div>

            <div class="error" *ngIf="xhrStatusDisplayError">
                <p class="text-danger text-center"><strong>Données temporairement indisponible</strong></p>
            </div>
            <div class="clearfix">
                <div class="signature-atexo pull-right"></div>
            </div>

            `,
    pipes: [ToClassPipe],
    directives: [AtexoChart, AtexoSpinner]
})

export class PanelBodyChart {

    @Input() panelBodyObj;
    panelBodyChartProvider:PanelBodyChartProvider;


    public xhrStatusDisplaySpinner:boolean = true;
    public xhrStatusDisplayResources:boolean = false;
    public xhrStatusDisplayError:boolean = false;

    public currentYear:string;
    public filterYear:Array<Object>;

    private convert:Convert = new Convert();
    private chartData:Array<any>;
    private chartArrayData:Array<any>;
    private chartArrayObject:Array<Object>;
    private chartType:String;
    private chartConfigData:Object;
    private chartConfigOption:Object;

    private chartTypes:Array<any> = [];


    private arrayOrdered:Array<string> = new Array();
    private xhrResponse:any;


    constructor(panelBodyChartProvider:PanelBodyChartProvider) {
        this.panelBodyChartProvider = panelBodyChartProvider;
        this.chartData = [];
        this.currentYear = new Date().getFullYear().toString();
    }

    private ngOnInit() {
        this.chartType = this.panelBodyObj.chart.type;
        this.chartConfigData = this.panelBodyObj.chart.config.data;
        this.chartConfigOption = this.panelBodyObj.chart.config.options;
        this.panelBodyChartServiceGetOptions();
        this.panelBodyChartServiceGetData();
        return true;
    }

    private ngAfterViewInit() {
        return true;
    }

    // events
    public chartClicked(e:any) {
        if (this.chartType === 'donut') {
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).style = 'font-size: 3em; text-align: center; baseline-shift: -24%; fill:' + e.element.style.fill + ';';
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).setAttribute('text-anchor', 'middle');
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value;
        }
    }

    public chartMouseOvered(e:any) {
        if (this.chartType === 'donut') {
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).style = 'font-size: 3em; text-align: center; baseline-shift: -24%; fill:' + e.element.style.fill + ';';
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).setAttribute('text-anchor', 'middle');
            e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value;
        }
    }

    public chartMouseOuted(e:any) {
        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = '';
    }

    public preventDefault(event:Event) {
        event.preventDefault();
    }

    panelBodyChartServiceGetData() {

        this.panelBodyChartProvider.get(this.panelBodyObj).subscribe(
            // Http Success
            (res:Response) => {

                this.xhrStatusDisplaySpinner = false;

                if (res.status === 200) {
                    this.xhrResponse = res;
                    this.xhrStatusDisplayResources = true;
                    this.getChartArrayData();
                    this.chartData = this.chartArrayData;
                }
            },
            // Http Error
            ((err:Response) => {
                if (err.status === 404 || err.status === 401) {
                    this.xhrStatusDisplayError = true;
                    this.xhrStatusDisplaySpinner = false;
                    console.log(err);
                }
            })
        );
    }

    /**
     *
     * @private getChartArrayObject
     * @name getChartArrayObject
     * @description Get Array Object of ChartData after convert SVS to JSON
     * @param res:any
     * @returns {Array<Object>}
     */
    private getChartArrayObject() {

        if (this.panelBodyObj.dataType === 'JSON') {
            let _chartArrayObject = this.xhrResponse.json();
            this.chartArrayObject = _chartArrayObject;
        } else {
            this.convert.cvsToJson(this.xhrResponse.text());
            this.chartArrayObject = this.convert.getData();
        }

        return this.chartArrayObject;
    }

    /**
     *
     * @private getChartArrayData
     * @name getChartArrayData
     * @description Get Array of ChartData
     * @param res:any
     * @returns {Array<Array>}
     */
    private getChartArrayData() {
        let _filterName = this.panelBodyObj.chart.axes.filter.name,
            _filterLabels = this.panelBodyObj.chart.axes.filter.labels,
            _filterDefault = this.panelBodyObj.chart.axes.filter.default;

        this.getChartArrayObject();


        this.filterYear = Util.getInstance().filterYear();

        if (!this.panelBodyObj.chart.axes.filter.active) {
            this.chartArrayData = this.getChartArray(this.chartArrayObject);
        } else {
            this.filterChartArrayObject(['annee'], [this.currentYear]);
        }

        return {
            'chartArrayData': this.chartArrayData,
            'chartArrayObject': this.chartArrayObject
        };
    }

    /**
     *
     * @private getChartArrayData
     * @name getChartArrayData
     * @description Get Array of ChartData
     * @param res:any
     * @returns {Array<Array>}
     */

    public filterChartArrayObject(property:any, value:any) {
        this.chartArrayData = this.getChartArray(Util.getInstance().Json().getByProperty(this.chartArrayObject, property, value));
        this.chartData = this.chartArrayData;
    }

    /**
     *
     * @private getChartArray
     * @name getChartArray
     * @param arrayObject
     * @returns {Array[]}
     */
    private getChartArray(arrayObject:Array<Object>) {

        let _orderedName = this.panelBodyObj.chart.axes.ordered.name,
            _abscissaName = this.panelBodyObj.chart.axes.abscissa.name,
            _eastingName = this.panelBodyObj.chart.axes.easting.name,
            _eastingArray = this.panelBodyObj.chart.axes.easting.array,
            _eastingLabels = this.panelBodyObj.chart.axes.easting.labels,
            _chartArrayData = [[]];

        this.arrayOrdered = new Array();

        arrayObject.forEach((obj) => {
            if (this.arrayOrdered.indexOf(obj[_orderedName]) === -1) {

                this.arrayOrdered.push(obj[_orderedName]);

                _chartArrayData[this.arrayOrdered.indexOf(obj[_orderedName])]
                    = Util.getInstance().newArray(_eastingArray.length + 1);

                _chartArrayData[this.arrayOrdered.indexOf(obj[_orderedName])][0]
                    = obj[_orderedName];
            }

            _chartArrayData
                [this.arrayOrdered.indexOf(obj[_orderedName])]
                [_eastingArray.indexOf(obj[_eastingName]) + 1]
                += Number(obj[_abscissaName]);
        });
        if (isPresent(this.panelBodyObj.chart.config.data.x)) {
            _chartArrayData.push(new Array(this.panelBodyObj.chart.config.data.x).concat(_eastingLabels));
        }

        return _chartArrayData;
    }

    private panelBodyChartServiceGetOptions() {
        // Set Chart default display Type
        if (isPresent(this.panelBodyObj.chart.type) && this.panelBodyObj.chart.type !== '') {
            this.chartType = this.panelBodyObj.chart.type;
        }
        // Set Chart Types
        if (isPresent(this.panelBodyObj.chart.types) && !isBlank(this.panelBodyObj.chart.types)) {
            this.chartTypes = this.panelBodyObj.chart.types;
            // Find index active type
            let i = Util.getInstance().arrayObjectFindIndex(this.chartTypes, (e) => {
                return e.type === this.chartType;
            });
            // Test if this.panelBodyObj.chart.type not exist in this.panelBodyObj.chart.types
            // All so Chart.Types[0].type affected to Chart.types
            if (i === -1) {
                i = 0;
                this.chartType = this.chartTypes[0].type;
            }
            // Active chart type
            this.panelBodyChartUpdateType(i);
        }

    }

    public panelBodyChartUpdateType(i) {
        this.chartType = this.chartTypes[i].type;
        for (let j = 0; j < this.chartTypes.length; j++) {
            this.chartTypes[j].active = false;
            if (j === i) {
                this.chartTypes[j].active = true;
            }
        }
        this.chartType = this.chartTypes[i].type;
        return false;
    }

    public panelBodyChartUpdateFilerYear(event:Event, currentYear:string) {
        this.currentYear = currentYear;
        this.filterChartArrayObject(['annee'], [this.currentYear]);
        event.preventDefault();
    }


}