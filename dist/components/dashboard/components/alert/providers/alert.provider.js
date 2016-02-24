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
var http_1 = require('angular2/http');
var atexo_service_1 = require('../../../../../common/services/atexo.service');
var atexo_constant_1 = require('../../../../../common/constants/atexo.constant');
var AlertProvider = (function () {
    function AlertProvider(http) {
        this.http = http;
    }
    AlertProvider.prototype.all = function (_parameter) {
        _parameter = (typeof _parameter !== 'undefined') ? _parameter : atexo_constant_1.AtexoRestConstant.request.panel.all.parameter;
        var options = new http_1.RequestOptions({
            method: atexo_constant_1.AtexoRestConstant.request.alert.all.method,
            url: atexo_service_1.Util.getInstance().Rest().setPath(atexo_constant_1.AtexoRestConstant.request.alert.all.url).build(),
            search: atexo_service_1.Util.getInstance().RequestOptions().setSearchParams(_parameter)
        });
        var req = new http_1.Request(options);
        return this.http.request(req);
    };
    AlertProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AlertProvider);
    return AlertProvider;
}());
exports.AlertProvider = AlertProvider;
//# sourceMappingURL=alert.provider.js.map