import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';


import {ToClassPipe, ToDatePipe, TrancatePipe} from '../../../../common/pipe/atexo.pipe';

import {AlertProvider} from './providers/alert.provider';

import {Util} from '../../../../common/services/atexo.service';
import {AtexoSpinner} from '../../../../common/components/atexo-spinner.component';

@Component({
    selector: 'alert',
    providers: [AlertProvider]
    //inputs: ['panelObj']
})

@View({
    template:`
            <div role="alert" class="alert" [ngClass]="item.custom_class" *ngFor="#item of items; #i=index">
                <strong>{{item.title}}</strong>
                <p>{{item.content}}</p>
            </div>
            `,
    pipes: [ToClassPipe, ToDatePipe, TrancatePipe],
    directives: [AtexoSpinner]
})
export class Alert {

    @Input() panelBodyObj;

    alertProvider:AlertProvider;
    items:Object[] = [];
    itemSelected:Object;
    limit:number = 3;
    offset:number;

    constructor(private el:ElementRef, alertProvider:AlertProvider) {
        this.el = el;
        this.offset = this.limit;
        this.alertProvider = alertProvider;
    }

    ngOnInit() {
        this.alertServiceAll();
        return true;
    }

    alertServiceAll() {
        this.alertProvider.all().subscribe((res:Response) => {

            if (res.status === 200) {
                this.items = res.json();
            }

        });
    }

}