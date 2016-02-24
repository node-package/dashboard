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
var lang_1 = require('angular2/src/facade/lang');
var atexo_pipe_1 = require('../../../../common/pipe/atexo.pipe');
var panel_body_search_provider_1 = require('./providers/panel-body-search.provider');
var PanelBodySearch = (function () {
    function PanelBodySearch(panelBodySearchProvider) {
        this.items = [];
        this.milliseconds = 500;
        this.panelBodySearchProvider = panelBodySearchProvider;
        this.q = '';
        this.display = false;
    }
    PanelBodySearch.prototype.ngOnInit = function () {
        return true;
    };
    PanelBodySearch.prototype.quickSearch = function () {
        var _this = this;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(function () {
            _this.panelBodySearchServiceAll();
        }, this.milliseconds);
    };
    PanelBodySearch.prototype.quickSearchClear = function () {
        this.q = '';
        this.items = [];
        return false;
    };
    PanelBodySearch.prototype.quickSearchDisplay = function (display) {
        var _this = this;
        var _timeOut, _milliseconds = 100;
        clearTimeout(_timeOut);
        _timeOut = setTimeout(function () {
            if (lang_1.isPresent(display)) {
                _this.display = display;
                _this.focusClass = display;
            }
            else {
                _this.display = (_this.items.length > 0) ? true : false;
            }
        }, _milliseconds);
    };
    PanelBodySearch.prototype.panelBodySearchServiceAll = function () {
        var _this = this;
        if (this.q) {
            var arraySearch = {
                motsClefs: this.q
            };
            this.panelBodySearchProvider.all(this.panelBodyObj.urlData, arraySearch).subscribe(function (res) {
                if (res.status === 200) {
                    _this.items = res.json();
                    _this.quickSearchDisplay();
                }
            });
        }
        else {
            this.items = [];
            this.quickSearchDisplay();
        }
        return true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelBodySearch.prototype, "panelBodyObj", void 0);
    PanelBodySearch = __decorate([
        core_1.Component({
            selector: 'panel-body-search',
            providers: [panel_body_search_provider_1.PanelBodySearchProvider]
        }),
        core_1.View({
            template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass}}\">\n                <form role=\"form\" class=\"form-horizontal\">\n                    <div class=\"form-group form-group-sm\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-group quick-search\" [ngClass]=\"{focus: focusClass}\">\n                                <input type=\"text\"\n                                       placeholder=\"Mots cl\u00E9s, intitul\u00E9 ou objet\"\n                                       class=\"form-control input-sm quick-search-input\"\n                                       autocomplete=\"off\"\n                                       id=\"quickSearch\"\n                                       [(ngModel)]=\"q\"\n                                       (keyup)=\"quickSearch()\"\n                                       (keyup.escape)=\"quickSearchClear()\"\n                                       (blur)=\"quickSearchDisplay(false)\"\n                                       (focus)=\"quickSearchDisplay(true)\"\n                                       title=\"Recherche rapide par mots cl\u00E9s, intitul\u00E9 ou objet\"\n                                >\n                                <span class=\"input-group-btn\">\n                                    <button type=\"button\"\n                                            class=\"btn btn-default btn-sm quick-search-btn\"\n                                            id=\"quickSearchBtn\">\n                                        <i class=\"fa fa-search fa-flip-horizontal\"></i>\n                                        <span class=\"sr-only\">Lancer la recherche</span>\n                                    </button>\n                                </span>\n                                <a href=\"\"\n                                   title=\"Annuler\"\n                                   name=\"Annuler\"\n                                   class=\"fa fa-close quick-search-clear\"\n                                   *ngIf=\"items.length\"\n                                   (click)=\"quickSearchClear()\"></a>\n\n                                <div class=\"quick-search-result\" *ngIf=\"display\">\n                                    <div class=\"list-group\">\n                                        <a *ngFor=\"#item of items; #i=index\"\n                                           href=\"{{item.url}}\"\n                                           class=\"list-group-item\">\n                                            {{item.title}}\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </form>\n            </div>\n            ",
            pipes: [atexo_pipe_1.ToClassPipe]
        }), 
        __metadata('design:paramtypes', [panel_body_search_provider_1.PanelBodySearchProvider])
    ], PanelBodySearch);
    return PanelBodySearch;
}());
exports.PanelBodySearch = PanelBodySearch;
//# sourceMappingURL=panel-body-search.component.js.map