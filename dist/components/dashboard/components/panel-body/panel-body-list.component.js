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
var atexo_constant_1 = require('../../../../common/constants/atexo.constant');
var atexo_charts_component_1 = require('../../../../common/components/atexo-charts.component');
var atexo_pipe_1 = require('../../../../common/pipe/atexo.pipe');
var panel_body_list_provider_1 = require('./providers/panel-body-list.provider');
var PanelBodyList = (function () {
    function PanelBodyList(panelBodyListProvider) {
        this.chartData = [];
        this.chartLabels = [];
        this.chartColors = [];
        this.chartType = 'Doughnut';
        this.chartOptions = {};
        this.displayType = 'Table';
        this.displayTypes = [
            {
                active: true,
                type: 'Tableau',
                icons: 'fa fa-table'
            }, {
                active: false,
                type: 'Camembert',
                icons: 'fa fa-pie-chart'
            }];
        this.items = [];
        this.panelBodyListProvider = panelBodyListProvider;
    }
    PanelBodyList.prototype.ngOnInit = function () {
        this.panelBodyListServiceAll(this.panelBodyObj.urlData);
        return true;
    };
    PanelBodyList.prototype.updateDisplayType = function (i) {
        this.displayType = this.displayTypes[i].type;
        for (var j = 0; j < this.displayTypes.length; j++) {
            this.displayTypes[j].active = false;
            if (j === i) {
                this.displayTypes[j].active = true;
            }
        }
        return false;
    };
    PanelBodyList.prototype.chartClicked = function (e) {
    };
    PanelBodyList.prototype.chartHovered = function (e) {
    };
    PanelBodyList.prototype.panelBodyListServiceAll = function (url) {
        var _this = this;
        this.panelBodyListProvider.all(url).subscribe(function (res) {
            if (res.status === 200) {
                _this.items = res.json();
                var i_1 = 0;
                _this.items.forEach(function (obj) {
                    _this.chartData.push(obj.count);
                    _this.chartLabels.push(obj.status.replace('En cours - ', ''));
                    _this.chartOptions = { responsive: true, animateRotate: true };
                    _this.chartColors.push(atexo_constant_1.AtexoColorChartConstant[i_1].color);
                    i_1++;
                });
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelBodyList.prototype, "panelBodyObj", void 0);
    PanelBodyList = __decorate([
        core_1.Component({
            selector: 'panel-body-list',
            providers: [panel_body_list_provider_1.PanelBodyListProvider]
        }),
        core_1.View({
            template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass }}\">\n\n                <div class=\"clearfix sub-header\">\n                    <ul class=\"atexoui-list right horizontal\">\n                        <li *ngFor=\"#displayType of displayTypes; #i=index\"\n                            [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\">\n                            <a href=\"#\"\n                               [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\"\n                               (click)=\"updateDisplayType(i)\">\n                                <span class=\"{{displayType.icons}}\"></span>\n                                {{displayType.type}}\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"display-table list-group\" role=\"list\" *ngIf=\"displayTypes[0].active\">\n                    <a class=\"list-group-item\" href=\"{{item.url}}\" role=\"listitem\"\n                       *ngFor=\"#item of items; #i=index\">\n                        {{item.status}}\n                        <span class=\"badge\" [ngClass]=\"{ 'badge-success': item.active }\">{{item.count}}</span>\n                    </a>\n                </div>\n\n                <div class=\"display-chart chart chart-pie\" *ngIf=\"displayTypes[1].active\">\n                    <panel-body-charts-js\n                            [data]=\"chartData\"\n                            [labels]=\"chartLabels\"\n                            [chartType]=\"chartType\"\n                            [options]=\"chartOptions\"\n                            (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\"></panel-body-charts-js>\n\n                    <ul class=\"atexoui-list list-unstyled\">\n                        <li *ngFor=\"#label of chartLabels; #i=index\">\n                            <span [ngStyle]=\"{ 'color': chartColors[i] }\" class=\"fa fa-tag\"></span>\n                            <strong class=\"count\">{{chartData[i]}}</strong> : {{label}}\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n            ",
            pipes: [atexo_pipe_1.ToClassPipe],
            directives: [atexo_charts_component_1.AtexoChartsJs]
        }), 
        __metadata('design:paramtypes', [panel_body_list_provider_1.PanelBodyListProvider])
    ], PanelBodyList);
    return PanelBodyList;
}());
exports.PanelBodyList = PanelBodyList;
//# sourceMappingURL=panel-body-list.component.js.map