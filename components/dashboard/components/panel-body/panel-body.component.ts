import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyList} from '../panel-body/panel-body-list.component';
import {PanelBodyChart} from '../panel-body/panel-body-chart.component';
import {PanelBodySearch} from '../panel-body/panel-body-search.component';
import {PanelBodyEditor} from '../panel-body/panel-body-editor.component';
import {PanelBodyArticle} from '../panel-body/panel-body-article.component';


@Component({
    selector: 'panel-body'
})

@View({
    template: `
            <panel-body-list  *ngIf="panelBodyObj.type.category === 'LIST'" [panelBodyObj]="panelBodyObj"></panel-body-list>
            <panel-body-chart  *ngIf="panelBodyObj.type.category === 'CHART'" [panelBodyObj]="panelBodyObj"></panel-body-chart>
            <panel-body-search  *ngIf="panelBodyObj.type.category === 'SEARCH'" [panelBodyObj]="panelBodyObj"></panel-body-search>
            <panel-body-editor  *ngIf="panelBodyObj.type.category === 'EDITOR'" [panelBodyObj]="panelBodyObj"></panel-body-editor>
            <panel-body-article  *ngIf="panelBodyObj.type.category === 'ARTICLE'" [panelBodyObj]="panelBodyObj"></panel-body-article>
            `,
    directives: [PanelBodyList, PanelBodyChart, PanelBodySearch, PanelBodyArticle, PanelBodyEditor],
    pipes: [ToClassPipe]
})
export class PanelBody {

    @Input() panelBodyObj;

    constructor(private el:ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        return true;
    }

}