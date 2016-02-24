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
var panel_body_list_component_1 = require('../panel-body/panel-body-list.component');
var panel_body_chart_component_1 = require('../panel-body/panel-body-chart.component');
var panel_body_search_component_1 = require('../panel-body/panel-body-search.component');
var panel_body_editor_component_1 = require('../panel-body/panel-body-editor.component');
var panel_body_article_component_1 = require('../panel-body/panel-body-article.component');
var PanelBody = (function () {
    function PanelBody(el) {
        this.el = el;
        this.el = el;
    }
    PanelBody.prototype.ngOnInit = function () {
        return true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelBody.prototype, "panelBodyObj", void 0);
    PanelBody = __decorate([
        core_1.Component({
            selector: 'panel-body'
        }),
        core_1.View({
            template: "\n            <panel-body-list  *ngIf=\"panelBodyObj.type.category === 'LIST'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-list>\n            <panel-body-chart  *ngIf=\"panelBodyObj.type.category === 'CHART'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-chart>\n            <panel-body-search  *ngIf=\"panelBodyObj.type.category === 'SEARCH'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-search>\n            <panel-body-editor  *ngIf=\"panelBodyObj.type.category === 'EDITOR'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-editor>\n            <panel-body-article  *ngIf=\"panelBodyObj.type.category === 'ARTICLE'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-article>\n            ",
            directives: [panel_body_list_component_1.PanelBodyList, panel_body_chart_component_1.PanelBodyChart, panel_body_search_component_1.PanelBodySearch, panel_body_article_component_1.PanelBodyArticle, panel_body_editor_component_1.PanelBodyEditor],
            pipes: [atexo_pipe_1.ToClassPipe]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PanelBody);
    return PanelBody;
}());
exports.PanelBody = PanelBody;
//# sourceMappingURL=panel-body.component.js.map