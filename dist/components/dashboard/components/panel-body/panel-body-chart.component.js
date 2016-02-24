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
var atexo_constant_1 = require('../../../../common/constants/atexo.constant');
var atexo_pipe_1 = require('../../../../common/pipe/atexo.pipe');
var atexo_service_1 = require('../../../../common/services/atexo.service');
var atexo_charts_component_1 = require('../../../../common/components/atexo-charts.component');
var panel_body_chart_provider_1 = require('./providers/panel-body-chart.provider');
var PanelBodyChart = (function () {
    function PanelBodyChart(panelBodyChartProvider) {
        this.chartData = [[]];
        this.chartDataOld = this.chartData;
        this.chartLabels = [];
        this.chartSeries = [];
        this.chartSeriesColors = [];
        this.chartSeriesActive = [];
        this.chartOptions = this.getChartOptions();
        this.chartColours = atexo_constant_1.AtexoColorChartConstant;
        this.chartColoursOld = this.chartColours;
        this.chartLegend = false;
        this.chartType = 'Line';
        this.chartTypes = [];
        this.easting = [
            'janvier',
            'février',
            'mars',
            'avril',
            'mai',
            'juin',
            'juillet',
            'août',
            'septembre',
            'octobre',
            'novembre',
            'décembre'];
        this.panelBodyChartProvider = panelBodyChartProvider;
        for (var i = 0; i < this.chartSeries.length; i++) {
            this.chartSeriesColors.push(this.chartColoursOld[i].strokeColor);
            this.chartSeriesActive.push(true);
        }
    }
    PanelBodyChart.prototype.ngOnInit = function () {
        this.panelBodyChartServiceGetData(this.panelBodyObj.urlData);
        this.panelBodyChartServiceGetOptions(this.panelBodyObj.chart);
        return true;
    };
    PanelBodyChart.prototype.ngAfterViewInit = function () {
        return true;
    };
    PanelBodyChart.prototype.panelBodyChartServiceGetOptions = function (chart) {
        var _this = this;
        if (lang_1.isPresent(chart.type) && chart.type !== '') {
            this.chartType = chart.type;
        }
        if (lang_1.isPresent(chart.types) && !lang_1.isBlank(chart.types)) {
            this.chartTypes = chart.types;
            var i = atexo_service_1.Util.getInstance().arrayObjectFindIndex(this.chartTypes, function (e) {
                return e.type === _this.chartType;
            });
            if (i === -1) {
                i = 0;
                this.chartType = this.chartTypes[0].type;
            }
            this.updateChartType(i);
        }
        if (lang_1.isPresent(chart.easting) && !lang_1.isBlank(chart.easting)) {
            this.easting = chart.easting;
        }
    };
    PanelBodyChart.prototype.panelBodyChartServiceGetData = function (url) {
        var _this = this;
        this.panelBodyChartProvider.get(url).subscribe(function (res) {
            if (res.status === 200) {
                _this.getChartDataArray(res);
                var jsonInstance = atexo_service_1.Util.getInstance().Json();
                jsonInstance.setEasting(_this.easting);
                jsonInstance.getByProperty(_this.chartDataArray);
                jsonInstance.groupByProperty(['annee', 'mois', 'count']);
                _this.chartData = jsonInstance.getArrayResult();
                _this.chartDataOld = _this.chartData;
                _this.chartLabels = jsonInstance.getEasting();
                _this.chartSeries = jsonInstance.getOrdered();
                _this.chartSeriesColors = [];
                _this.chartSeriesActive = [];
                for (var i = 0; i < _this.chartSeries.length; i++) {
                    _this.chartSeriesColors.push(_this.chartColoursOld[i].strokeColor);
                    _this.chartSeriesActive.push(true);
                }
                if (atexo_constant_1.AtexoChartConstant.typeCategory.single.indexOf(_this.chartType) !== -1) {
                    _this.getChartDataSingle(0);
                }
            }
        });
    };
    PanelBodyChart.prototype.checkUpdateChart = function () {
        var i = 0, count = 0;
        for (; i < this.chartSeriesActive.length; i++) {
            if (this.chartSeriesActive[i]) {
                count++;
            }
        }
        return (count > 0);
    };
    PanelBodyChart.prototype.updateChartData = function (i) {
        if (atexo_constant_1.AtexoChartConstant.typeCategory.multiple.indexOf(this.chartType) !== -1) {
            this.chartSeriesActive[i] = !this.chartSeriesActive[i];
            if (this.checkUpdateChart()) {
                var _chartData = [];
                var _chartColours = [];
                for (var j = 0; j < this.chartSeriesActive.length; j++) {
                    if (this.chartSeriesActive[j]) {
                        _chartColours.push(this.chartColoursOld[j]);
                        _chartData.push(this.chartDataOld[j]);
                    }
                }
                this.chartData = _chartData;
                this.chartColours = _chartColours;
            }
            else {
                this.chartSeriesActive[i] = !this.chartSeriesActive[i];
            }
        }
        else {
            this.getChartDataSingle(i);
        }
        return false;
    };
    PanelBodyChart.prototype.activeChartSerie = function (i) {
        var index = 0;
        if (lang_1.isPresent(i)) {
            index = i;
        }
        for (var j = 0; j < this.chartSeriesActive.length; j++) {
            this.chartSeriesActive[j] = false;
            if (j === index) {
                this.chartSeriesActive[j] = true;
            }
        }
    };
    PanelBodyChart.prototype.updateChartType = function (i) {
        this.chartType = this.chartTypes[i].type;
        for (var j = 0; j < this.chartTypes.length; j++) {
            this.chartTypes[j].active = false;
            if (j === i) {
                this.chartTypes[j].active = true;
            }
        }
        return false;
    };
    PanelBodyChart.prototype.getChartOptions = function () {
        return {
            animation: true,
            responsive: true,
            multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>',
            legendTemplate: ''
        };
    };
    PanelBodyChart.prototype.getChartDataArray = function (res) {
        atexo_service_1.Convert.getInstance().cvsToJson(res.text());
        this.chartDataArray = atexo_service_1.Convert.getInstance().getArrayData();
        return this.chartDataArray;
    };
    PanelBodyChart.prototype.getChartDataSingle = function (i) {
        var index = 0, arr;
        if (lang_1.isPresent(i)) {
            index = i;
        }
        this.activeChartSerie(index);
        this.chartData = this.chartDataOld[index];
        return this.chartData;
    };
    PanelBodyChart.prototype.chartClicked = function (e) {
    };
    PanelBodyChart.prototype.chartHovered = function (e) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelBodyChart.prototype, "panelBodyObj", void 0);
    PanelBodyChart = __decorate([
        core_1.Component({
            selector: 'panel-body-chart',
            providers: [panel_body_chart_provider_1.PanelBodyChartProvider]
        }),
        core_1.View({
            template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass}}\">\n\n                <div class=\"clearfix sub-header\">\n                    <ul class=\"atexoui-list right horizontal\">\n                        <li *ngFor=\"#type of chartTypes; #i=index\"\n                            [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\">\n                            <a href=\"#\"\n                               [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\"\n                               (click)=\"updateChartType(i)\">\n                                <span class=\"{{type.icons}}\"></span>\n                                {{type.type}}\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n\n                <panel-body-charts-js\n                        [data]=\"chartData\"\n                        [labels]=\"chartLabels\"\n                        [options]=\"chartOptions\"\n                        [series]=\"chartSeries\"\n                        [colours]=\"chartColours\"\n                        [legend]=\"chartLegend\"\n                        [chartType]=\"chartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></panel-body-charts-js>\n\n\n                <ul class=\"atexoui-list center horizontal\">\n                    <li *ngFor=\"#serie of chartSeries; #i=index\"\n                        [ngClass]=\"{ available: chartSeriesActive[i], disabled: !chartSeriesActive[i] }\">\n                        <a href=\"#\"\n                           (click)=\"updateChartData(i)\"\n                           [ngClass]=\"{ available: chartSeriesActive[i], disabled: !chartSeriesActive[i] }\">\n                            <span [ngStyle]=\"{ 'color': chartSeriesColors[i] }\" class=\"fa fa-eye\"\n                                  [ngClass]=\"{ 'fa-eye': chartSeriesActive[i], 'fa-eye-slash': !chartSeriesActive[i] }\"></span>\n                            {{serie}}\n                        </a>\n                    </li>\n                </ul>\n\n            </div>\n            ",
            pipes: [atexo_pipe_1.ToClassPipe],
            directives: [atexo_charts_component_1.AtexoChartsJs]
        }), 
        __metadata('design:paramtypes', [panel_body_chart_provider_1.PanelBodyChartProvider])
    ], PanelBodyChart);
    return PanelBodyChart;
}());
exports.PanelBodyChart = PanelBodyChart;
//# sourceMappingURL=panel-body-chart.component.js.map