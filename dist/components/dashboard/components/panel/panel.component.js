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
var panel_body_component_1 = require('../panel-body/panel-body.component');
var atexo_pipe_1 = require('../../../../common/pipe/atexo.pipe');
var Panel = (function () {
    function Panel(el) {
        this.el = el;
        this.collapseClass = false;
        this.closeClass = false;
        this.el = el;
    }
    Panel.prototype.ngOnInit = function () {
        return true;
    };
    Panel.prototype.collapse = function () {
        this.collapseClass = !this.collapseClass;
        return false;
    };
    Panel.prototype.close = function () {
        this.closeClass = !this.closeClass;
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Panel.prototype, "panelObj", void 0);
    Panel = __decorate([
        core_1.Component({
            selector: 'panel'
        }),
        core_1.View({
            template: "\n            <div class=\"panel panel-default bloc-toggle\"\n                 [ngClass]=\"{close: closeClass}\">\n                <!-- Header -->\n                <header class=\"panel-header header panel-heading ui-sortable-handle\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                                <h3 class=\"panel-title\">\n                                    <i class=\"{{panelObj.icons}}\"></i>\n                                    {{panelObj.title}}\n                                </h3>\n                            </div>\n                            <div class=\"pull-right\">\n                                <div class=\"widget-controls\">\n                                    <a href=\"\"\n                                       data-widgster=\"Collapse\"\n                                       title=\"{{ (panelObj.options.collapse.title !== '')? panelObj.options.collapse.title : 'R\u00E9duire le panneau' }}\"\n                                       (click)=\"collapse()\"\n                                       *ngIf=\"panelObj.options.collapse.active\">\n                                        <i class=\"{{ (panelObj.options.collapse.icons !== '')? panelObj.options.collapse.icons : 'fa fa-minus' }}\"></i>\n                                    </a>\n                                    <a href=\"\"\n                                       data-widgster=\"close\"\n                                       title=\"{{ (panelObj.options.close.title !== '')? panelObj.options.close.title : 'Fermer le panneau' }}\"\n                                       (click)=\"close()\"\n                                       *ngIf=\"panelObj.options.close.active\">\n                                        <i class=\"{{ (panelObj.options.close.icons !== '')? panelObj.options.close.icons : 'fa fa-close' }}\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </header>\n                <!-- End Header -->\n\n                <!-- Body -->\n                <div class=\"panel-body body collapse\"\n                     aria-expanded=\"true\"\n                     [ngClass]=\"{collapse: collapseClass}\">\n                    <panel-body [panelBodyObj]=\"panelObj\"></panel-body>\n                </div>\n                <!-- End Body -->\n\n\n                <!-- Footer -->\n                <footer class=\"panel-footer footer text-right collapse\"\n                        aria-expanded=\"true\"\n                        [ngClass]=\"{collapse: collapseClass}\"\n                        *ngIf=\"panelObj.footer.list.length\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                            </div>\n                            <div class=\"pull-right\">\n                                <a href=\"\" *ngIf=\"panelObj.footer.list[0].type === 'LINK'\">\n                                    {{panelObj.footer.list[0].title}}\n                                    <i class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n                </footer>\n                <!-- End Footer -->\n            </div>\n            ",
            directives: [panel_body_component_1.PanelBody],
            pipes: [atexo_pipe_1.ToClassPipe],
            encapsulation: core_1.ViewEncapsulation.Emulated
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Panel);
    return Panel;
}());
exports.Panel = Panel;
//# sourceMappingURL=panel.component.js.map