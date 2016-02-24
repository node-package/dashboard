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
var TrancatePipe = (function () {
    function TrancatePipe() {
    }
    TrancatePipe.prototype.transform = function (value, args) {
        this.length = lang_1.isPresent(args[0]) ? args[0] : 100;
        this.placeholderEnd = lang_1.isPresent(args[1]) ? args[1] : ' ...';
        return value.substring(0, this.length).concat(this.placeholderEnd);
    };
    TrancatePipe = __decorate([
        core_1.Pipe({ name: 'trancate' }), 
        __metadata('design:paramtypes', [])
    ], TrancatePipe);
    return TrancatePipe;
}());
exports.TrancatePipe = TrancatePipe;
//# sourceMappingURL=atexo-trancate.pipe.js.map