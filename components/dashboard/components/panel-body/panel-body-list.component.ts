import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {AtexoColorChartConstant} from '../../../../common/constants/atexo.constant';
import {AtexoChartsJs} from '../../../../common/components/atexo-charts.component';
import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyListProvider} from './providers/panel-body-list.provider';


@Component({
    selector: 'panel-body-list',
    providers: [PanelBodyListProvider]
})

@View({
    template: `
            <div class="{{ panelBodyObj.type.category | toClass }}">

                <div class="clearfix sub-header">
                    <ul class="atexoui-list right horizontal">
                        <li *ngFor="#displayType of displayTypes; #i=index"
                            [ngClass]="{ available: displayTypes[i].active, disabled: !displayTypes[i].active }">
                            <a href="#"
                               [ngClass]="{ available: displayTypes[i].active, disabled: !displayTypes[i].active }"
                               (click)="updateDisplayType(i)">
                                <span class="{{displayType.icons}}"></span>
                                {{displayType.type}}
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="display-table list-group" role="list" *ngIf="displayTypes[0].active">
                    <a class="list-group-item" href="{{item.url}}" role="listitem"
                       *ngFor="#item of items; #i=index">
                        {{item.status}}
                        <span class="badge" [ngClass]="{ 'badge-success': item.active }">{{item.count}}</span>
                    </a>
                </div>

                <div class="display-chart chart chart-pie" *ngIf="displayTypes[1].active">
                    <panel-body-charts-js
                            [data]="chartData"
                            [labels]="chartLabels"
                            [chartType]="chartType"
                            [options]="chartOptions"
                            (chartHover)="chartHovered($event)"
                            (chartClick)="chartClicked($event)"></panel-body-charts-js>

                    <ul class="atexoui-list list-unstyled">
                        <li *ngFor="#label of chartLabels; #i=index">
                            <span [ngStyle]="{ 'color': chartColors[i] }" class="fa fa-tag"></span>
                            <strong class="count">{{chartData[i]}}</strong> : {{label}}
                        </li>
                    </ul>
                </div>

            </div>
            `,
    pipes: [ToClassPipe],
    directives: [AtexoChartsJs]
})
export class PanelBodyList {

    @Input() panelBodyObj;
    panelBodyListProvider:PanelBodyListProvider;
    items:Array<any>;
    private chartData:Array<number> = [];
    private chartLabels:Array<any> = [];
    private chartColors:Array<any> = [];
    private chartType:string = 'Doughnut';
    private chartOptions:Object = {};

    private displayType:string = 'Table';
    private displayTypes:Array<any> = [
        {
            active: true,
            type: 'Tableau',
            icons: 'fa fa-table'
        }, {
            active: false,
            type: 'Camembert',
            icons: 'fa fa-pie-chart'
        }];

    constructor(panelBodyListProvider:PanelBodyListProvider) {
        this.items = [];
        this.panelBodyListProvider = panelBodyListProvider;
    }

    ngOnInit() {
        this.panelBodyListServiceAll(this.panelBodyObj.urlData);
        return true;
    }

    public updateDisplayType(i ?:number) {
        this.displayType = this.displayTypes[i].type;
        for (let j = 0; j < this.displayTypes.length; j++) {
            this.displayTypes[j].active = false;
            if (j === i) {
                this.displayTypes[j].active = true;
            }
        }
        return false;
    }

    // events
    public chartClicked(e:any) {
        //console.log(e);
    }

    public chartHovered(e:any) {
        //console.log(e);
    }


    panelBodyListServiceAll(url) {

        this.panelBodyListProvider.all(url).subscribe((res:Response) => {

            if (res.status === 200) {
                this.items = res.json();
                let i:number = 0;

                this.items.forEach((obj) => {
                    this.chartData.push(obj.count);
                    this.chartLabels.push(obj.status.replace('En cours - ', ''));
                    this.chartOptions = {responsive: true, animateRotate: true};
                    this.chartColors.push(AtexoColorChartConstant[i].color);
                    i++;
                });
            }

        });
    }

}