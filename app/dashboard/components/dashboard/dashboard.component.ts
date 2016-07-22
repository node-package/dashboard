import {Component, View, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {isPresent} from 'angular2/src/facade/lang';

import {AtexoRestConstant} from '../../common/constants/atexo.constant';
import {Progress} from '../../common/services/atexo.service';

import {PanelProvider} from './providers/panel.provider';
import {Alert} from './components/alert/alert.component';
import {Panel} from './components/panel/panel.component';

@Component({
    selector: 'dashboard',
    providers: [PanelProvider]
})
@View({
    template: `
            <div class="dashboard parent">
                <alert></alert>
                <div class="row" id="sortable" [ngClass]="{'sortable-start': startsortable}">
                    <div localtion="zone-a"
                         class="column container"
                         [ngClass]="zone.zone.custom_class"
                         id="{{zone.zone.id}}"
                         *ngFor="#zone of panelsZonesArray; #i=index">
                        <!-- Panel -->
                        <div [panelObj]="panelObj"
                               class="panel-component"
                               *ngFor="#panelObj of zone.panels; #i=index"></div>
                        <!-- End Panel -->
                    </div>
                </div>
            </div>
            <!--div class="modal-backdrop  in" *ngIf="progress.showBackdrop()"></div-->
            `,
    directives: [Panel, Alert]
})
export class Dashboard {
    @Input('config') config:any;
    progress = Progress.getInstance();
    panels:Object[] = [];
    panelsZones = {
        a: new Array(),
        b: new Array(),
        c: new Array(),
        d: new Array(),
        z: new Array()
    };

    panelsZonesArray:Array<any> = [];
    namePage:string;
    offset:number = 0;
    limit:number = 5;
    panelProvider:PanelProvider;
    endContent:boolean = false;
    startsortable:string = '';

    constructor(panelProvider:PanelProvider) {
        this.namePage = 'Dashboard';
        this.panelProvider = panelProvider;
    }

    ngOnInit() {
        if (!isPresent(this.config)) {
            console.error('ViewError:  Missing identifier "config"');
        } else {
            this.initConfig();
            this.panelServiceAll();
        }
        return true;
    }

    ngAfterViewChecked() {
        /*$('#sortable .column').sortable({
            connectWith: '.column',
            handle: '.panel-heading',
            placeholder: 'portlet-placeholder ui-corner-all'
        });*/
        return true;
    }

    private initConfig() {
        AtexoRestConstant.baseUrl = this.config.json.baseUrl;
        AtexoRestConstant.request.panel.all.url = this.config.json.panel;
        AtexoRestConstant.request.alert.all.url = this.config.json.alert;
    }

    panelServiceAll() {
        var param = {
            limit: this.limit,
            offset: this.offset
        };
        Progress.getInstance().incrementNbrProgress();
        this.panelProvider.all(param).subscribe((res:Response) => {

            if (res.status === 200) {
                this.endContent = false;
                this.panelsZonesArray = res.json();
                Progress.getInstance().decrementNbrProgress();
            } else {
                this.endContent = true;
            }

        });
    }
}