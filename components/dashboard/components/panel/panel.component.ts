import {Component, View, ElementRef, Input, ViewEncapsulation} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {PanelBody} from '../panel-body/panel-body.component';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

@Component({
    selector: 'panel'
    //inputs: ['panelObj']
})

@View({
    template: `
            <div class="panel panel-default bloc-toggle"
                 [ngClass]="{close: closeClass}">
                <!-- Header -->
                <header class="panel-header header panel-heading ui-sortable-handle">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="pull-left">
                                <h3 class="panel-title">
                                    <i class="{{panelObj.icons}}"></i>
                                    {{panelObj.title}}
                                </h3>
                            </div>
                            <div class="pull-right">
                                <div class="widget-controls">
                                    <a href=""
                                       data-widgster="Collapse"
                                       title="{{ (panelObj.options.collapse.title !== '')? panelObj.options.collapse.title : 'Réduire le panneau' }}"
                                       (click)="collapse()"
                                       *ngIf="panelObj.options.collapse.active">
                                        <i class="{{ (panelObj.options.collapse.icons !== '')? panelObj.options.collapse.icons : 'fa fa-minus' }}"></i>
                                    </a>
                                    <a href=""
                                       data-widgster="close"
                                       title="{{ (panelObj.options.close.title !== '')? panelObj.options.close.title : 'Fermer le panneau' }}"
                                       (click)="close()"
                                       *ngIf="panelObj.options.close.active">
                                        <i class="{{ (panelObj.options.close.icons !== '')? panelObj.options.close.icons : 'fa fa-close' }}"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- End Header -->

                <!-- Body -->
                <div class="panel-body body collapse"
                     aria-expanded="true"
                     [ngClass]="{collapse: collapseClass}">
                    <panel-body [panelBodyObj]="panelObj"></panel-body>
                </div>
                <!-- End Body -->


                <!-- Footer -->
                <footer class="panel-footer footer text-right collapse"
                        aria-expanded="true"
                        [ngClass]="{collapse: collapseClass}"
                        *ngIf="panelObj.footer.list.length">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="pull-left">
                            </div>
                            <div class="pull-right">
                                <a href="" *ngIf="panelObj.footer.list[0].type === 'LINK'">
                                    {{panelObj.footer.list[0].title}}
                                    <i class="glyphicon glyphicon-chevron-right" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </footer>
                <!-- End Footer -->
            </div>
            `,
    directives: [PanelBody],
    pipes: [ToClassPipe],
    encapsulation: ViewEncapsulation.Emulated
})

export class Panel {

    @Input() panelObj;
    //panelObj:Object;
    collapseClass:Boolean = false;
    closeClass:Boolean = false;

    constructor(private el:ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        return true;
    }

    collapse() {
        this.collapseClass = !this.collapseClass;
        return false;
    }

    close() {
        this.closeClass = !this.closeClass;
        return false;
    }

}