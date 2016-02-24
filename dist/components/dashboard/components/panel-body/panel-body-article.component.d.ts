import { ElementRef } from 'angular2/core';
import { PanelBodyArticleProvider } from './providers/panel-body-article.provider';
export declare class PanelBodyArticle {
    private el;
    panelBodyObj: any;
    panelBodyArticleProvider: PanelBodyArticleProvider;
    articles: Object[];
    articleSelected: Object;
    limit: number;
    offset: number;
    constructor(el: ElementRef, panelBodyArticleProvider: PanelBodyArticleProvider);
    ngOnInit(): boolean;
    panelBodyArticleServiceAll(url: any): void;
    more(): boolean;
    moreArticles(): boolean;
    lessArticles(): boolean;
    selectArticle(id: number): boolean;
    closeSelectArticle(): boolean;
}
