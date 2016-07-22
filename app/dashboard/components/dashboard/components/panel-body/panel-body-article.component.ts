import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';


import {ToClassPipe, ToDatePipe, TrancatePipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyArticleProvider} from './providers/panel-body-article.provider';

import {Util} from '../../../../common/services/atexo.service';
import {AtexoSpinner} from '../../../../common/components/atexo-spinner.component';

@Component({
    selector: 'panel-body-article',
    providers: [PanelBodyArticleProvider]
    //inputs: ['panelObj']
})

@View({
    template: `
            <div class="panel-body-article-wrap {{ panelBodyObj.type.category | toClass}}">

                <ul class="list-unstyled articles article-list">
                    <li *ngFor="#article of articles; #i=index">

                        <article class="article article-item"
                                 *ngIf="i < offset">
                            <header class="header">

                                <h4 class="title">
                                    <a href=""
                                        (click)="selectArticle(article.id)"
                                       title="{{article.title}}">&nbsp;{{article.title}}</a>
                                    <span class="date">{{article.date | toDate | date}}</span>
                                </h4>

                            </header>

                            <div class="body">

                                <div class="content">
                                    <p>{{article.content_text | trancate:120}}</p>
                                </div>

                                <footer class="footer">
                                    <div class="links">
                                        <a href=""
                                           (click)="selectArticle(article.id)"
                                           title="lire la suite">lire la suite</a>
                                    </div>
                                </footer>

                            </div>


                        </article>

                    </li>
                    <li *ngIf=" offset < articles.length ">
                        <a href="" class="atexoui-link center more"
                           (click)="moreArticles()">Plus d'actualités</a>
                    </li>
                    <li *ngIf=" offset === articles.length ">
                        <a href="" class="atexoui-link center less"
                           (click)="lessArticles()">Moins d'actualités</a>
                    </li>
                </ul>
                <div class="article-full-screen" *ngIf="articleSelected">
                    <article class="article article-selected">
                        <header class="header">

                            <div class="options row">
                                <div class="col-md-12">
                                    <div class="pull-right">
                                        <a href=""
                                           title="Close Article"
                                           data-widgster="close" (click)="closeSelectArticle()"
                                        class="btn btn-sm">
                                            <i class="fa fa-chevron-left"></i> Retour
                                        </a>
                                    </div>
                                    <div class="pull-left">
                                        <h4 class="title">
                                            {{articleSelected.title}}
                                        </h4>
                                        <span class="date">{{articleSelected.date | toDate | date}}</span>
                                    </div>

                                </div>
                            </div>

                        </header>

                        <div class="body">

                            <div class="content">
                                <div [innerHTML]="articleSelected.content"></div>
                            </div>

                            <footer class="footer" *ngIf="">
                                <div class="links"
                                     *ngIf="articleSelected.links.length">
                                    <a href="{{link.url}}"
                                       target="{{link.target}}"
                                       title="{{link.title}}"
                                       *ngFor="#link of articleSelected.links; #i=index">{{link.title}}</a>
                                </div>
                            </footer>

                        </div>

                    </article>
                </div>
            </div>
    `,
    pipes: [ToClassPipe, ToDatePipe, TrancatePipe],
    directives: [AtexoSpinner]
})
export class PanelBodyArticle {

    @Input() panelBodyObj;

    panelBodyArticleProvider:PanelBodyArticleProvider;
    articles:Object[] = [];
    articleSelected:Object;
    limit:number = 3;
    offset:number;

    constructor(private el:ElementRef, panelBodyArticleProvider:PanelBodyArticleProvider) {
        this.el = el;
        this.offset = this.limit;
        this.panelBodyArticleProvider = panelBodyArticleProvider;
    }

    ngOnInit() {
        this.panelBodyArticleServiceAll(this.panelBodyObj.urlData);
        return true;
    }

    panelBodyArticleServiceAll(url) {
        this.panelBodyArticleProvider.all(url).subscribe((res:Response) => {

            if (res.status === 200) {
                this.articles = res.json();

                /*this.articles.forEach((obj) => {
                 obj['date'] = new Date(1988,3,15);
                 });*/
            }

        });
    }

    more() {
        this.offset += this.limit;
        return false;
    }

    moreArticles() {
        this.offset = this.articles.length;
        return false;
    }

    lessArticles() {
        this.offset = this.limit;
        return false;
    }

    selectArticle(id:number) {
        this.articleSelected = Util.getInstance().Grep(this.articles, function (item) {
            return (item.id === id);
        });
        this.articleSelected = this.articleSelected[0];
        return false;
    }

    closeSelectArticle() {
        this.articleSelected = null;
        return false;
    }

    preventDefault() {
        return false;
    }

}