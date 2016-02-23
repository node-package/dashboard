import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {isPresent} from 'angular2/src/facade/lang';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodySearchProvider} from './providers/panel-body-search.provider';


@Component({
    selector: 'panel-body-search',
    providers: [PanelBodySearchProvider]
})

@View({
    template: `
            <div class="{{ panelBodyObj.type.category | toClass}}">
                <form role="form" class="form-horizontal">
                    <div class="form-group form-group-sm">
                        <div class="col-sm-12">
                            <div class="input-group quick-search" [ngClass]="{focus: focusClass}">
                                <input type="text"
                                       placeholder="Mots clés, intitulé ou objet"
                                       class="form-control input-sm quick-search-input"
                                       autocomplete="off"
                                       id="quickSearch"
                                       [(ngModel)]="q"
                                       (keyup)="quickSearch()"
                                       (keyup.escape)="quickSearchClear()"
                                       (blur)="quickSearchDisplay(false)"
                                       (focus)="quickSearchDisplay(true)"
                                       title="Recherche rapide par mots clés, intitulé ou objet"
                                >
                                <span class="input-group-btn">
                                    <button type="button"
                                            class="btn btn-default btn-sm quick-search-btn"
                                            id="quickSearchBtn">
                                        <i class="fa fa-search fa-flip-horizontal"></i>
                                        <span class="sr-only">Lancer la recherche</span>
                                    </button>
                                </span>
                                <a href=""
                                   title="Annuler"
                                   name="Annuler"
                                   class="fa fa-close quick-search-clear"
                                   *ngIf="items.length"
                                   (click)="quickSearchClear()"></a>

                                <div class="quick-search-result" *ngIf="display">
                                    <div class="list-group">
                                        <a *ngFor="#item of items; #i=index"
                                           href="{{item.url}}"
                                           class="list-group-item">
                                            {{item.title}}
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
            `,
    pipes: [ToClassPipe]
})
export class PanelBodySearch {

    @Input() panelBodyObj;

    panelBodySearchProvider:PanelBodySearchProvider;
    timeOut:any;
    milliseconds:number;
    items:Array<any>;
    q:string;
    display:boolean;
    focusClass:boolean;


    constructor(panelBodySearchProvider:PanelBodySearchProvider) {
        this.items = [];
        this.milliseconds = 500;
        this.panelBodySearchProvider = panelBodySearchProvider;
        this.q = '';
        this.display = false;
    }

    ngOnInit() {
        return true;
    }

    quickSearch() {
        //let _panelBodyObj = this.panelBodyObj;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.panelBodySearchServiceAll();
        }, this.milliseconds);
    }

    quickSearchClear() {
        this.q = '';
        this.items = [];
        return false;
    }

    quickSearchDisplay(display?:boolean) {
        let _timeOut:any, _milliseconds:number = 100;
        clearTimeout(_timeOut);
        _timeOut = setTimeout(() => {
            if (isPresent(display)) {
                this.display = display;
                this.focusClass = display;
            } else {
                this.display = (this.items.length > 0) ? true : false;
            }
        }, _milliseconds);
    }


    panelBodySearchServiceAll() {

        if (this.q) {
            var arraySearch = {
                motsClefs: this.q
            };
            this.panelBodySearchProvider.all(this.panelBodyObj.urlData, arraySearch).subscribe((res:Response) => {

                if (res.status === 200) {
                    this.items = res.json();
                    this.quickSearchDisplay();
                }
            });
        } else {
            this.items = [];
            this.quickSearchDisplay();
        }
        return true;
    }

}