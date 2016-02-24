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
var dragula_provider_1 = require('../providers/dragula.provider');
var DragAndDropDirective = (function () {
    function DragAndDropDirective(el, dragulaService) {
        this.el = el;
        this.container = el.nativeElement;
        this.dragulaService = dragulaService;
    }
    DragAndDropDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.bag);
        var bag = this.dragulaService.find(this.bag);
        var checkModel = function () {
            if (_this.dragulaModel) {
                if (_this.drake.models) {
                    _this.drake.models.push(_this.dragulaModel);
                }
                else {
                    _this.drake.models = [_this.dragulaModel];
                }
            }
        };
        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }
        return true;
    };
    DragAndDropDirective.prototype.ngOnChanges = function (changes) {
        if (changes && changes['dragulaModel']) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes['dragulaModel'].previousValue);
                    this.drake.models.splice(modelIndex, 1, changes['dragulaModel'].currentValue);
                }
                else {
                    this.drake.models = [changes['dragulaModel'].currentValue];
                }
            }
        }
    };
    __decorate([
        core_1.Input('dragula'), 
        __metadata('design:type', String)
    ], DragAndDropDirective.prototype, "bag", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DragAndDropDirective.prototype, "dragulaModel", void 0);
    DragAndDropDirective = __decorate([
        core_1.Directive({
            selector: '[dragula]',
            providers: [dragula_provider_1.DragulaService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, dragula_provider_1.DragulaService])
    ], DragAndDropDirective);
    return DragAndDropDirective;
}());
exports.DragAndDropDirective = DragAndDropDirective;
//# sourceMappingURL=dragula.directive.js.map