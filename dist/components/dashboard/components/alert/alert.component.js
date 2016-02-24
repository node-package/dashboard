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
var alert_provider_1 = require('./providers/alert.provider');
var atexo_spinner_component_1 = require('../../../../common/components/atexo-spinner.component');
var Alert = (function () {
    function Alert(el, alertProvider) {
        this.el = el;
        this.items = [];
        this.limit = 3;
        this.el = el;
        this.offset = this.limit;
        this.alertProvider = alertProvider;
    }
    Alert.prototype.ngOnInit = function () {
        this.alertServiceAll();
        return true;
    };
    Alert.prototype.alertServiceAll = function () {
        var _this = this;
        this.alertProvider.all().subscribe(function (res) {
            if (res.status === 200) {
                _this.items = res.json();
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Alert.prototype, "panelBodyObj", void 0);
    Alert = __decorate([
        core_1.Component({
            selector: 'alert',
            providers: [alert_provider_1.AlertProvider]
        }),
        core_1.View({
            template: "\n            <div role=\"alert\" class=\"alert\" [ngClass]=\"item.custom_class\" *ngFor=\"#item of items; #i=index\">\n                <strong>{{item.title}}</strong>\n                <p>{{item.content}}</p>\n            </div>\n            ",
            pipes: [atexo_pipe_1.ToClassPipe, atexo_pipe_1.ToDatePipe, atexo_pipe_1.TrancatePipe],
            directives: [atexo_spinner_component_1.AtexoSpinner]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, alert_provider_1.AlertProvider])
    ], Alert);
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.component.js.map