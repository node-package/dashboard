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
var Convert = (function () {
    function Convert() {
        this.strDelimiter = ';';
        this.arrProperty = [];
        if (!Convert.isCreating) {
            throw new Error('[Convert] You can\'t call new in Singleton instances!');
        }
    }
    Convert.getInstance = function () {
        if (Convert.instance == null) {
            Convert.isCreating = true;
            Convert.instance = new Convert();
            Convert.isCreating = false;
        }
        return Convert.instance;
    };
    Convert.prototype.cvsToJson = function (csv, strDelimiter) {
        var lines = csv.split('\n');
        this.arrData = [];
        this.arrProperty = lines[0].split(';');
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(';');
            for (var j = 0; j < this.arrProperty.length; j++) {
                obj[this.arrProperty[j]] = currentline[j];
            }
            this.arrData.push(obj);
        }
        this.jsonData = JSON.stringify(this.arrData);
        return this.jsonData;
    };
    Convert.prototype.getArrayData = function () {
        return this.arrData;
    };
    Convert.prototype.getArrProperty = function () {
        return this.arrProperty;
    };
    Convert.isCreating = false;
    Convert = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Convert);
    return Convert;
}());
exports.Convert = Convert;
//# sourceMappingURL=atexo-convert.service.js.map