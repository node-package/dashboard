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
var AtexoSpinner = (function () {
    function AtexoSpinner() {
        return true;
    }
    AtexoSpinner = __decorate([
        core_1.Component({
            selector: 'atexo-spinner'
        }),
        core_1.View({
            template: "\n                <div class=\"atexo-spinner\">\n                    <div class=\"rect1\"></div>\n                    <div class=\"rect2\"></div>\n                    <div class=\"rect3\"></div>\n                    <div class=\"rect4\"></div>\n                    <div class=\"rect5\"></div>\n                </div>\n            ",
            styles: ["\n          .atexo-spinner {\n              width: 25px;\n              height: 20px;\n              text-align: center;\n              font-size: 5px;\n              -moz-transition-duration: 1s;\n              -webkit-transition-duration: 1s;\n              -o-transition-duration: 1s;\n              transition-duration: 1s;\n            }\n\n            .hide-atexo-spinner .atexo-spinner,\n            .atexo-spinner:hover{\n                opacity: 0;\n            }\n\n            .atexo-spinner > div {\n              background-color: #BBDEFB;\n              height: 100%;\n              width: 3px;\n              display: inline-block;\n\n              -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n              animation: sk-stretchdelay 1.2s infinite ease-in-out;\n            }\n\n            .atexo-spinner .rect2 {\n              -webkit-animation-delay: -1.1s;\n              animation-delay: -1.1s;\n              background-color: #64B5F6;\n            }\n\n            .atexo-spinner .rect3 {\n              -webkit-animation-delay: -1.0s;\n              animation-delay: -1.0s;\n              background-color: #2196F3;\n            }\n\n            .atexo-spinner .rect4 {\n              -webkit-animation-delay: -0.9s;\n              animation-delay: -0.9s;\n              background-color: #1976D2;\n            }\n\n            .atexo-spinner .rect5 {\n              -webkit-animation-delay: -0.8s;\n              animation-delay: -0.8s;\n              background-color: #0D47A1;\n            }\n\n            @-webkit-keyframes sk-stretchdelay {\n              0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n              20% { -webkit-transform: scaleY(1.0) }\n            }\n\n            @keyframes sk-stretchdelay {\n              0%, 40%, 100% {\n                transform: scaleY(0.4);\n                -webkit-transform: scaleY(0.4);\n              }  20% {\n                transform: scaleY(1.0);\n                -webkit-transform: scaleY(1.0);\n              }\n            }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AtexoSpinner);
    return AtexoSpinner;
}());
exports.AtexoSpinner = AtexoSpinner;
//# sourceMappingURL=atexo-spinner.component.js.map