"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var atexo_pipe_1 = require('../../../../common/pipe/atexo.pipe');
var panel_body_article_provider_1 = require('./providers/panel-body-article.provider');
var atexo_service_1 = require('../../../../common/services/atexo.service');
var atexo_spinner_component_1 = require('../../../../common/components/atexo-spinner.component');
var PanelBodyArticle = (function () {
    function PanelBodyArticle(el, panelBodyArticleProvider) {
        this.el = el;
        this.articles = [];
        this.limit = 3;
        this.el = el;
        this.offset = this.limit;
        this.panelBodyArticleProvider = panelBodyArticleProvider;
    }
    PanelBodyArticle.prototype.ngOnInit = function () {
        this.panelBodyArticleServiceAll(this.panelBodyObj.urlData);
        return true;
    };
    PanelBodyArticle.prototype.panelBodyArticleServiceAll = function (url) {
        var _this = this;
        this.panelBodyArticleProvider.all(url).subscribe(function (res) {
            if (res.status === 200) {
                _this.articles = res.json();
            }
        });
    };
    PanelBodyArticle.prototype.more = function () {
        this.offset += this.limit;
        return false;
    };
    PanelBodyArticle.prototype.moreArticles = function () {
        this.offset = this.articles.length;
        return false;
    };
    PanelBodyArticle.prototype.lessArticles = function () {
        this.offset = this.limit;
        return false;
    };
    PanelBodyArticle.prototype.selectArticle = function (id) {
        this.articleSelected = atexo_service_1.Util.getInstance().Grep(this.articles, function (item) {
            return (item.id === id);
        });
        this.articleSelected = this.articleSelected[0];
        return false;
    };
    PanelBodyArticle.prototype.closeSelectArticle = function () {
        this.articleSelected = null;
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelBodyArticle.prototype, "panelBodyObj", void 0);
    PanelBodyArticle = __decorate([
        core_1.Component({
            selector: 'panel-body-article',
            providers: [panel_body_article_provider_1.PanelBodyArticleProvider]
        }),
        core_1.View({
            template: "\n            <div class=\"panel-body-article-wrap {{ panelBodyObj.type.category | toClass}}\">\n\n                <ul class=\"list-unstyled articles article-list\">\n                    <li *ngFor=\"#article of articles; #i=index\">\n\n                        <article class=\"article article-item\"\n                                 *ngIf=\"i < offset\">\n                            <header class=\"header\">\n\n                                <h4 class=\"title\">\n                                    <a href=\"#\"\n                                       title=\"{{article.title}}\">{{article.title}}</a>\n                                    <span class=\"date\">{{article.date | toDate | date}}</span>\n                                </h4>\n\n                            </header>\n\n                            <div class=\"body\">\n\n                                <div class=\"content\">\n                                    <p>{{article.content | trancate:120}}</p>\n                                </div>\n\n                                <footer class=\"footer\">\n                                    <div class=\"links\">\n                                        <a href=\"\"\n                                           (click)=\"selectArticle(article.id)\"\n                                           title=\"lire la suite\">lire la suite</a>\n                                    </div>\n                                </footer>\n\n                            </div>\n\n\n                        </article>\n\n                    </li>\n                    <li *ngIf=\" offset < articles.length \">\n                        <a href=\"\" class=\"atexoui-link center more\"\n                           (click)=\"moreArticles()\">Plus d'actualit\u00E9s</a>\n                    </li>\n                    <li *ngIf=\" offset === articles.length \">\n                        <a href=\"\" class=\"atexoui-link center less\"\n                           (click)=\"lessArticles()\">Moins d'actualit\u00E9s</a>\n                    </li>\n                </ul>\n                <div class=\"article-full-screen\" *ngIf=\"articleSelected\">\n                    <article class=\"article article-selected\">\n                        <header class=\"header\">\n\n                            <div class=\"options row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"pull-left\">\n                                        <h4 class=\"title\">\n                                            <a href=\"\"\n                                               title=\"{{articleSelected.title}}\">{{articleSelected.title}}</a>\n                                        </h4>\n                                        <span class=\"date\">{{articleSelected.date | toDate | date}}</span>\n                                    </div>\n                                    <div class=\"pull-right\">\n                                        <a href=\"\"\n                                           title=\"Close Article\"\n                                           data-widgster=\"close\" (click)=\"closeSelectArticle()\"\n                                        class=\"btn btn-sm\">\n                                            <i class=\"fa fa-chevron-left\"></i> Retour\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </header>\n\n                        <div class=\"body\">\n\n                            <div class=\"content\">\n                                <p>{{articleSelected.content}}</p>\n                            </div>\n\n                            <footer class=\"footer\">\n                                <div class=\"links\"\n                                     *ngIf=\"articleSelected.links.length\">\n                                    <a href=\"{{link.url}}\"\n                                       target=\"{{link.target}}\"\n                                       title=\"{{link.title}}\"\n                                       *ngFor=\"#link of articleSelected.links; #i=index\">{{link.title}}</a>\n                                </div>\n                            </footer>\n\n                        </div>\n\n                    </article>\n                </div>\n            </div>\n    ",
            pipes: [atexo_pipe_1.ToClassPipe, atexo_pipe_1.ToDatePipe, atexo_pipe_1.TrancatePipe],
            directives: [atexo_spinner_component_1.AtexoSpinner]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, panel_body_article_provider_1.PanelBodyArticleProvider])
    ], PanelBodyArticle);
    return PanelBodyArticle;
}());
exports.PanelBodyArticle = PanelBodyArticle;
//# sourceMappingURL=panel-body-article.component.js.map