"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var lang_1 = require('angular2/src/facade/lang');
var atexo_constant_1 = require('../../constants/atexo.constant');
var Util = (function () {
    function Util() {
        if (!Util.isCreating) {
            throw new Error('[Util] You can\'t call new in Singleton instances!');
        }
    }
    Util.getInstance = function () {
        if (Util.instance == null) {
            Util.isCreating = true;
            Util.instance = new Util();
            Util.isCreating = false;
        }
        return Util.instance;
    };
    Util.prototype.Path = function () {
        return new Path();
    };
    Util.prototype.Rest = function () {
        return new Rest();
    };
    Util.prototype.RequestOptions = function () {
        return new RequestOptions();
    };
    Util.prototype.Json = function () {
        return new Json();
    };
    Util.prototype.URLParams = function () {
        return new URLParams();
    };
    Util.prototype.arrayObjectFindIndex = function (arr, callback) {
        var len = arr.length, index, i;
        for (i = 0; i < len; i++) {
            var e = arr[i];
            if (callback(e)) {
                index = i;
            }
        }
        if (index === undefined) {
            index = -1;
        }
        return index;
    };
    Util.prototype.Grep = function (arr, callback) {
        var newArr = [], len = arr.length, i;
        for (i = 0; i < len; i++) {
            var e = arr[i];
            if (callback(e)) {
                newArr.push(e);
            }
        }
        return newArr;
    };
    Util.prototype.Map = function (arr, callback) {
        var newArr = [], len = arr.length, i;
        for (i = 0; i < len; i++) {
            var e = arr[i];
            var n = callback(e);
            newArr.push(n);
        }
        return newArr;
    };
    Util.isCreating = false;
    Util = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Util);
    return Util;
}());
exports.Util = Util;
var Rewriter = (function () {
    function Rewriter(base, uri) {
        this.base = '';
        this.uri = '';
        this.type = atexo_constant_1.RequestUrlType.Relative;
        uri = lang_1.isPresent(uri) ? uri : '';
        this.base = base;
        this.checkUri(uri);
    }
    Rewriter.prototype.checkUri = function (uri) {
        if (lang_1.isString(uri)) {
            this.type = atexo_constant_1.RequestUrlType.Relative;
            this.uri = uri;
        }
        else {
            this.type = uri['type'];
            this.uri = uri['url'];
        }
        return this;
    };
    Rewriter.prototype.setPath = function (uri) {
        this.checkUri(uri);
        return this;
    };
    Rewriter.prototype.build = function () {
        if (this.type === atexo_constant_1.RequestUrlType.Relative) {
            return this.base + this.uri;
        }
        return this.uri;
    };
    return Rewriter;
}());
var Path = (function (_super) {
    __extends(Path, _super);
    function Path(path) {
        path = lang_1.isPresent(path) ? path : '';
        _super.call(this, atexo_constant_1.AtexoPathConstant.base, path);
    }
    return Path;
}(Rewriter));
var Rest = (function (_super) {
    __extends(Rest, _super);
    function Rest(url) {
        url = lang_1.isPresent(url) ? url : '';
        _super.call(this, atexo_constant_1.AtexoRestConstant.baseUrl, url);
    }
    return Rest;
}(Rewriter));
var RequestOptions = (function () {
    function RequestOptions() {
        this.searchParams = new http_1.URLSearchParams();
    }
    RequestOptions.prototype.setSearchParams = function (data) {
        if (!lang_1.isPresent(data)) {
            return;
        }
        else {
            if (lang_1.isJsObject(data)) {
                for (var item in data) {
                    if (data.hasOwnProperty(item)) {
                        this.searchParams.set(item, data[item]);
                    }
                }
            }
            return this.searchParams;
        }
    };
    return RequestOptions;
}());
var URLParams = (function () {
    function URLParams() {
        return this;
    }
    URLParams.prototype.parse = function (_params) {
        var params = new http_1.URLSearchParams();
        if (lang_1.isPresent(_params)) {
            for (var k in _params) {
                if (_params.hasOwnProperty(k)) {
                    params.set(k, _params[k]);
                }
            }
            this.params = params;
        }
        return this.params;
    };
    return URLParams;
}());
var Json = (function () {
    function Json() {
        return this;
    }
    Json.prototype.getByProperty = function (arrayJson, property, value) {
        var arrayProperty = [], arrayValue = [];
        if (lang_1.isPresent(property) && lang_1.isPresent(value)) {
            if (lang_1.isString(property) && lang_1.isString(value)) {
                arrayProperty.push(property);
                arrayValue.push(value);
            }
            else {
                arrayProperty = property;
                arrayValue = value;
            }
        }
        if (lang_1.isPresent(arrayJson)) {
            this.result = arrayJson;
        }
        var i = 0, length = this.result.length, arrReturn = [];
        for (; i < length; i++) {
            if (arrayProperty.length === 0 || arrayValue.length === 0) {
                arrReturn.push(this.result[i]);
            }
            else {
                if (this.checkPropertyValue(this.result[i], arrayProperty, arrayValue)) {
                    arrReturn.push(this.result[i]);
                }
            }
        }
        this.result = arrReturn;
        return arrReturn;
    };
    Json.prototype.groupByProperty = function (property, arrayJson) {
        var _this = this;
        var arrayProperty = [];
        if (lang_1.isString(property)) {
            arrayProperty.push(property);
        }
        else {
            arrayProperty = property;
        }
        if (lang_1.isPresent(arrayJson)) {
            this.result = arrayJson;
        }
        var i = 0, length = this.result.length, arrReturn = [[]], arrEasting = [], arrOrdered = [], easting = this.easting;
        this.result.map(function (obj) {
            if (arrOrdered.indexOf(obj[arrayProperty[0]]) === -1) {
                arrOrdered
                    .push(obj[arrayProperty[0]]);
                arrReturn[arrOrdered.indexOf(obj[arrayProperty[0]])] = _this.newArray(_this.easting.length);
            }
            arrReturn[arrOrdered.indexOf(obj[property[0]])][easting.indexOf(obj[property[1]])] += Number(obj[property[2]]);
        });
        this.arrayResult = arrReturn;
        this.ordered = arrOrdered;
        return arrReturn;
    };
    Json.prototype.newArray = function (length, defaltValue) {
        var i = 0, _defaultValue = 0, arr = new Array(length);
        if (lang_1.isPresent(defaltValue)) {
            _defaultValue = defaltValue;
        }
        for (i; i < length; i++) {
            arr[i] = _defaultValue;
        }
        return arr;
    };
    Json.prototype.setArrayJson = function (arrayJson) {
        this.result = arrayJson;
    };
    Json.prototype.getArrayJson = function () {
        return this.result;
    };
    Json.prototype.getResult = function () {
        return this.result;
    };
    Json.prototype.getArrayResult = function () {
        return this.arrayResult;
    };
    Json.prototype.getEasting = function () {
        return this.easting;
    };
    Json.prototype.setEasting = function (easting) {
        this.easting = easting;
        this.setEastingArray();
    };
    Json.prototype.getOrdered = function () {
        return this.ordered;
    };
    Json.prototype.setEastingArray = function () {
        return true;
    };
    Json.prototype.checkPropertyValue = function (arrayJson, property, value) {
        var i = 0, length = property.length, result = true;
        for (; i < length; i++) {
            if (arrayJson[property[i]] !== value[i]) {
                result = false;
                return result;
            }
        }
        return result;
    };
    return Json;
}());
//# sourceMappingURL=atexo-util.service.js.map