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
var atexo_constant_1 = require('../../common/constants/atexo.constant');
var atexo_service_1 = require('../../common/services/atexo.service');
var panel_provider_1 = require('./providers/panel.provider');
var alert_component_1 = require('./components/alert/alert.component');
var panel_component_1 = require('./components/panel/panel.component');
var Dashboard = (function () {
    function Dashboard(panelProvider) {
        this.progress = atexo_service_1.Progress.getInstance();
        this.panels = [];
        this.panelsZones = {
            a: new Array(),
            b: new Array(),
            c: new Array(),
            d: new Array(),
            z: new Array()
        };
        this.panelsZonesArray = [];
        this.offset = 0;
        this.limit = 5;
        this.endContent = false;
        this.startsortable = '';
        this.namePage = 'Dashboard';
        this.panelProvider = panelProvider;
    }
    Dashboard.prototype.ngOnInit = function () {
        if (!lang_1.isPresent(this.config)) {
            console.error('ViewError:  Missing identifier "config"');
        }
        else {
            this.initConfig();
            this.panelServiceAll();
        }
        return true;
    };
    Dashboard.prototype.ngAfterViewChecked = function () {
        var _this = this;
        $('#sortable .column').sortable({
            connectWith: '.column',
            handle: '.panel-heading',
            placeholder: 'portlet-placeholder ui-corner-all',
            update: function (event, ui) {
                _this.startsortable = 'update';
                console.log('update');
            },
            start: function () {
                console.log('start');
            },
            stop: function () {
                console.log('stop');
            },
            sort: function () {
                console.log('sort');
            },
            beforeStop: function () {
                console.log('beforeStop');
            },
            change: function () {
                console.log('change');
            }
        });
        return true;
    };
    Dashboard.prototype.initConfig = function () {
        atexo_constant_1.AtexoRestConstant.request.panel.all.url = this.config.json.panel;
        atexo_constant_1.AtexoRestConstant.request.alert.all.url = this.config.json.alert;
    };
    Dashboard.prototype.panelServiceAll = function () {
        var _this = this;
        var param = {
            limit: this.limit,
            offset: this.offset
        };
        atexo_service_1.Progress.getInstance().incrementNbrProgress();
        this.panelProvider.all(param).subscribe(function (res) {
            if (res.status === 200) {
                _this.endContent = false;
                _this.panelsZonesArray = res.json();
                atexo_service_1.Progress.getInstance().decrementNbrProgress();
            }
            else {
                _this.endContent = true;
            }
        });
    };
    __decorate([
        core_1.Input('config'), 
        __metadata('design:type', Object)
    ], Dashboard.prototype, "config", void 0);
    Dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard',
            providers: [panel_provider_1.PanelProvider]
        }),
        core_1.View({
            template: "\n            <div class=\"dashboard parent\">\n                <alert></alert>\n                <div class=\"row wrapper\" id=\"sortable\" [ngClass]=\"{'sortable-start': startsortable}\">\n                    <div localtion=\"zone-a\"\n                         class=\"column container\"\n                         [ngClass]=\"zone.zone.custom_class\"\n                         id=\"{{zone.zone.id}}\"\n                         *ngFor=\"#zone of panelsZonesArray; #i=index\">\n                        <!-- Panel -->\n                        <panel [panelObj]=\"panelObj\"\n                               class=\"panel-component\"\n                               *ngFor=\"#panelObj of zone.panels; #i=index\"></panel>\n                        <!-- End Panel -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-backdrop  in\" *ngIf=\"progress.showBackdrop()\"></div>\n            ",
            directives: [panel_component_1.Panel, alert_component_1.Alert]
        }), 
        __metadata('design:paramtypes', [panel_provider_1.PanelProvider])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map