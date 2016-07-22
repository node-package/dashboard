import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {AtexoColorChartConstant} from '../../../../common/constants/atexo.constant';
import {AtexoChart} from '../../../../common/components/atexo-chart.component';
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
                            <a href=""
                               [ngClass]="{ available: displayTypes[i].active, disabled: !displayTypes[i].active }"
                               (click)="updateDisplayType(i)"
                               title="{{displayType.type}}"
                               name="{{displayType.type}}">
                                <span class="{{displayType.icons}}"></span>

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
                    <chart
                        class="c3-responsive"
                        [data]="chartData"
                        [type]="chartType"
                        [configOption]="chartConfigOption"
                        (chartClick)="chartClicked($event)"
                        (chartMouseOver)="chartMouseOvered($event)"></chart>
                </div>

            </div>
            `,
    pipes: [ToClassPipe],
    directives: [AtexoChart]
})
export class PanelBodyList {

    @Input() panelBodyObj;
    panelBodyListProvider:PanelBodyListProvider;
    items:Array<any>;

    public xhrStatusDisplaySpinner:boolean = true;
    public xhrStatusDisplayResources:boolean = false;
    public xhrStatusDisplayError:boolean = false;


    private chartData:Array<any> = [[]];
    private chartLabels:Array<any> = [];
    private chartType:string = 'donut';
    private chartConfigOption:Object = {};

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
        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.name + '  ' + (Math.round(e.data.ratio * 1000) / 10) + '%';

    }

    public chartMouseOvered(e:any) {
        e.ngElement.getElementsByClassName('c3-chart-arcs-title').item(0).textContent = e.data.value + ' Consultations';
    }


    panelBodyListServiceAll(url) {

        this.panelBodyListProvider.all(url).subscribe(
            (res:Response) => {

                if (res.status === 200) {
                    this.items = res.json();
                    let i:number = 0;
                    this.items.forEach((obj) => {
                        let arr:Array<any> = [];
                        arr.push(obj.status.replace('En cours - ', ''));
                        arr.push(obj.count);
                        this.chartData.push(arr);
                        i++;
                    });
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
}