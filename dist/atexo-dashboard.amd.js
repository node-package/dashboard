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
define("common/constants/atexo/atexo-enum.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    (function (RequestUrlType) {
        RequestUrlType[RequestUrlType["Static"] = 0] = "Static";
        RequestUrlType[RequestUrlType["Relative"] = 1] = "Relative";
        RequestUrlType[RequestUrlType["Absolute"] = 2] = "Absolute";
    })(exports.RequestUrlType || (exports.RequestUrlType = {}));
    var RequestUrlType = exports.RequestUrlType;
});
define("common/constants/atexo/atexo-path.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoPathConstant = {
        base: './app/',
        folder: {
            common: './app/common/'
        }
    };
});
define("common/constants/atexo/atexo-rest.constant", ["require", "exports", 'angular2/http', "common/constants/atexo/atexo-enum.constant"], function (require, exports, http_1, atexo_enum_constant_1) {
    "use strict";
    exports.AtexoRestConstant = {
        baseUrl: 'http://localhost:5600/',
        _format: 'json',
        request: {
            panel: {
                all: {
                    method: http_1.RequestMethod.Get,
                    url: 'panel',
                    type: atexo_enum_constant_1.RequestUrlType.Relative,
                    _format: 'json',
                    parameter: {
                        limit: 5,
                        offset: 0
                    }
                },
                byId: {
                    method: http_1.RequestMethod.Get,
                    url: 'panel',
                    type: atexo_enum_constant_1.RequestUrlType.Relative
                }
            },
            alert: {
                all: {
                    method: http_1.RequestMethod.Get,
                    url: 'alert',
                    type: atexo_enum_constant_1.RequestUrlType.Relative,
                    _format: 'json',
                    parameter: {
                        limit: 5,
                        offset: 0
                    }
                }
            },
            news: {
                all: {
                    method: http_1.RequestMethod.Get,
                    url: 'news',
                    type: atexo_enum_constant_1.RequestUrlType.Relative,
                    _format: 'json',
                    parameter: {
                        limit: 5,
                        offset: 0
                    }
                },
                byId: {
                    method: http_1.RequestMethod.Get,
                    url: 'news',
                    type: atexo_enum_constant_1.RequestUrlType.Relative
                }
            }
        }
    };
});
define("common/constants/atexo/atexo-colors-chart.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoColorChartConstant = [
        {
            fillColor: 'rgba(253, 216, 53,0.2)',
            strokeColor: 'rgba(253, 216, 53,1)',
            pointColor: 'rgba(253, 216, 53,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(253, 216, 53,0.8)',
            color: 'rgba(253, 216, 53,1)',
            highlight: 'rgba(253, 216, 53,0.8)'
        }, {
            fillColor: 'rgba(236, 64, 122,0.2)',
            strokeColor: 'rgba(236, 64, 122,1)',
            pointColor: 'rgba(236, 64, 122,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(236, 64, 122,0.8)',
            color: 'rgba(236, 64, 122,1)',
            highlight: 'rgba(236, 64, 122,0.8)'
        }, {
            fillColor: 'rgba(205, 220, 57,0.2)',
            strokeColor: 'rgba(205, 220, 57,1)',
            pointColor: 'rgba(205, 220, 57,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(205, 220, 57,0.8)',
            color: 'rgba(205, 220, 57,1)',
            highlight: 'rgba(205, 220, 57,0.8)'
        }, {
            fillColor: 'rgba(41, 182, 246,0.2)',
            strokeColor: 'rgba(41, 182, 246,1)',
            pointColor: 'rgba(41, 182, 246,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(41, 182, 246,0.8)',
            color: 'rgba(41, 182, 246,1)',
            highlight: 'rgba(41, 182, 246,0.8)'
        }, {
            fillColor: 'rgba(142, 68, 173,0.2)',
            strokeColor: 'rgba(142, 68, 173,1)',
            pointColor: 'rgba(142, 68, 173,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(142, 68, 173,0.8)',
            color: 'rgba(142, 68, 173,1)',
            highlight: 'rgba(142, 68, 173,0.8)'
        }, {
            fillColor: 'rgba(255, 193, 7,0.2)',
            strokeColor: 'rgba(255, 193, 7,1)',
            pointColor: 'rgba(255, 193, 7,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(255, 193, 7,0.8)',
            color: 'rgba(255, 193, 7,1)',
            highlight: 'rgba(255, 193, 7,0.8)'
        }, {
            fillColor: 'rgba(13, 71, 161,0.2)',
            strokeColor: 'rgba(13, 71, 161,1)',
            pointColor: 'rgba(13, 71, 161,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(13, 71, 161,0.8)',
            color: 'rgba(13, 71, 161,1)',
            highlight: 'rgba(13, 71, 161,0.8)'
        }];
});
define("common/constants/atexo/atexo-chart.constant", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoChartConstant = {
        typeCategory: {
            single: ['Pie', 'Doughnut', 'PolarArea'],
            multiple: ['Line', 'Bar', 'Radar']
        }
    };
});
define("common/constants/atexo.constant", ["require", "exports", "common/constants/atexo/atexo-enum.constant", "common/constants/atexo/atexo-path.constant", "common/constants/atexo/atexo-rest.constant", "common/constants/atexo/atexo-colors-chart.constant", "common/constants/atexo/atexo-chart.constant"], function (require, exports, atexo_enum_constant_2, atexo_path_constant_1, atexo_rest_constant_1, atexo_colors_chart_constant_1, atexo_chart_constant_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(atexo_enum_constant_2);
    __export(atexo_path_constant_1);
    __export(atexo_rest_constant_1);
    __export(atexo_colors_chart_constant_1);
    __export(atexo_chart_constant_1);
});
define("common/services/atexo/atexo-util.service", ["require", "exports", 'angular2/core', 'angular2/http', 'angular2/src/facade/lang', "common/constants/atexo.constant"], function (require, exports, core_1, http_2, lang_1, atexo_constant_1) {
    "use strict";
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
            this.searchParams = new http_2.URLSearchParams();
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
            var params = new http_2.URLSearchParams();
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
});
define("common/services/atexo/atexo-progress.service", ["require", "exports", 'angular2/core'], function (require, exports, core_2) {
    "use strict";
    var Progress = (function () {
        function Progress() {
            this.nbrProgress = 0;
            if (!Progress.isCreating) {
                throw new Error('[Progress] You can\'t call new in Singleton instances!');
            }
        }
        Progress.getInstance = function () {
            if (Progress.instance == null) {
                Progress.isCreating = true;
                Progress.instance = new Progress();
                Progress.isCreating = false;
            }
            return Progress.instance;
        };
        Progress.prototype.getNbrProgress = function () {
            return this.nbrProgress;
        };
        Progress.prototype.showBackdrop = function () {
            return this.getNbrProgress();
        };
        Progress.prototype.incrementNbrProgress = function () {
            this.nbrProgress++;
        };
        Progress.prototype.decrementNbrProgress = function () {
            if (this.nbrProgress !== 0) {
                this.nbrProgress--;
            }
        };
        Progress.isCreating = false;
        Progress = __decorate([
            core_2.Injectable(), 
            __metadata('design:paramtypes', [])
        ], Progress);
        return Progress;
    }());
    exports.Progress = Progress;
});
define("common/services/atexo/atexo-convert.service", ["require", "exports", 'angular2/core'], function (require, exports, core_3) {
    "use strict";
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
            core_3.Injectable(), 
            __metadata('design:paramtypes', [])
        ], Convert);
        return Convert;
    }());
    exports.Convert = Convert;
});
define("common/services/atexo.service", ["require", "exports", "common/services/atexo/atexo-util.service", "common/services/atexo/atexo-progress.service", "common/services/atexo/atexo-convert.service"], function (require, exports, atexo_util_service_1, atexo_progress_service_1, atexo_convert_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(atexo_util_service_1);
    __export(atexo_progress_service_1);
    __export(atexo_convert_service_1);
});
define("components/dashboard/providers/panel.provider", ["require", "exports", 'angular2/core', 'angular2/http', "common/services/atexo.service", "common/constants/atexo.constant"], function (require, exports, core_4, http_3, atexo_service_1, atexo_constant_2) {
    "use strict";
    var PanelProvider = (function () {
        function PanelProvider(http) {
            this.http = http;
        }
        PanelProvider.prototype.all = function (_parameter) {
            _parameter = (typeof _parameter !== 'undefined') ? _parameter : atexo_constant_2.AtexoRestConstant.request.panel.all.parameter;
            var options = new http_3.RequestOptions({
                method: atexo_constant_2.AtexoRestConstant.request.panel.all.method,
                url: atexo_service_1.Util.getInstance().Rest().setPath(atexo_constant_2.AtexoRestConstant.request.panel.all.url).build(),
                search: atexo_service_1.Util.getInstance().RequestOptions().setSearchParams(_parameter)
            });
            var req = new http_3.Request(options);
            return this.http.request(req);
        };
        PanelProvider = __decorate([
            core_4.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_3.Http !== 'undefined' && http_3.Http) === 'function' && _a) || Object])
        ], PanelProvider);
        return PanelProvider;
        var _a;
    }());
    exports.PanelProvider = PanelProvider;
});
define("common/pipe/atexo/atexo-class.pipe", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang'], function (require, exports, core_5, lang_2) {
    "use strict";
    var ToClassPipe = (function () {
        function ToClassPipe() {
        }
        ToClassPipe.prototype.transform = function (value, args) {
            this.postClass = lang_2.isPresent(args[0]) ? args[0] : 'panel-body-type-';
            return this.postClass.concat(value.toLowerCase());
        };
        ToClassPipe = __decorate([
            core_5.Pipe({ name: 'toClass' }), 
            __metadata('design:paramtypes', [])
        ], ToClassPipe);
        return ToClassPipe;
    }());
    exports.ToClassPipe = ToClassPipe;
});
define("common/pipe/atexo/atexo-timestamp-to-date.pipe", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang'], function (require, exports, core_6, lang_3) {
    "use strict";
    var ToDatePipe = (function () {
        function ToDatePipe() {
        }
        ToDatePipe.prototype.transform = function (value) {
            if (lang_3.isNumber(value)) {
                return new Date(value * 1000);
            }
            else {
                if (lang_3.isString(value)) {
                    return new Date(value);
                }
            }
        };
        ToDatePipe = __decorate([
            core_6.Pipe({ name: 'toDate' }), 
            __metadata('design:paramtypes', [])
        ], ToDatePipe);
        return ToDatePipe;
    }());
    exports.ToDatePipe = ToDatePipe;
});
define("common/pipe/atexo/atexo-trancate.pipe", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang'], function (require, exports, core_7, lang_4) {
    "use strict";
    var TrancatePipe = (function () {
        function TrancatePipe() {
        }
        TrancatePipe.prototype.transform = function (value, args) {
            this.length = lang_4.isPresent(args[0]) ? args[0] : 100;
            this.placeholderEnd = lang_4.isPresent(args[1]) ? args[1] : ' ...';
            return value.substring(0, this.length).concat(this.placeholderEnd);
        };
        TrancatePipe = __decorate([
            core_7.Pipe({ name: 'trancate' }), 
            __metadata('design:paramtypes', [])
        ], TrancatePipe);
        return TrancatePipe;
    }());
    exports.TrancatePipe = TrancatePipe;
});
define("common/pipe/atexo.pipe", ["require", "exports", "common/pipe/atexo/atexo-class.pipe", "common/pipe/atexo/atexo-timestamp-to-date.pipe", "common/pipe/atexo/atexo-trancate.pipe"], function (require, exports, atexo_class_pipe_1, atexo_timestamp_to_date_pipe_1, atexo_trancate_pipe_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(atexo_class_pipe_1);
    __export(atexo_timestamp_to_date_pipe_1);
    __export(atexo_trancate_pipe_1);
});
define("components/dashboard/components/alert/providers/alert.provider", ["require", "exports", 'angular2/core', 'angular2/http', "common/services/atexo.service", "common/constants/atexo.constant"], function (require, exports, core_8, http_4, atexo_service_2, atexo_constant_3) {
    "use strict";
    var AlertProvider = (function () {
        function AlertProvider(http) {
            this.http = http;
        }
        AlertProvider.prototype.all = function (_parameter) {
            _parameter = (typeof _parameter !== 'undefined') ? _parameter : atexo_constant_3.AtexoRestConstant.request.panel.all.parameter;
            var options = new http_4.RequestOptions({
                method: atexo_constant_3.AtexoRestConstant.request.alert.all.method,
                url: atexo_service_2.Util.getInstance().Rest().setPath(atexo_constant_3.AtexoRestConstant.request.alert.all.url).build(),
                search: atexo_service_2.Util.getInstance().RequestOptions().setSearchParams(_parameter)
            });
            var req = new http_4.Request(options);
            return this.http.request(req);
        };
        AlertProvider = __decorate([
            core_8.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_4.Http !== 'undefined' && http_4.Http) === 'function' && _a) || Object])
        ], AlertProvider);
        return AlertProvider;
        var _a;
    }());
    exports.AlertProvider = AlertProvider;
});
define("common/components/atexo-spinner.component", ["require", "exports", 'angular2/core'], function (require, exports, core_9) {
    "use strict";
    var AtexoSpinner = (function () {
        function AtexoSpinner() {
            return true;
        }
        AtexoSpinner = __decorate([
            core_9.Component({
                selector: 'atexo-spinner'
            }),
            core_9.View({
                template: "\n                <div class=\"atexo-spinner\">\n                    <div class=\"rect1\"></div>\n                    <div class=\"rect2\"></div>\n                    <div class=\"rect3\"></div>\n                    <div class=\"rect4\"></div>\n                    <div class=\"rect5\"></div>\n                </div>\n            ",
                styles: ["\n          .atexo-spinner {\n              width: 25px;\n              height: 20px;\n              text-align: center;\n              font-size: 5px;\n              -moz-transition-duration: 1s;\n              -webkit-transition-duration: 1s;\n              -o-transition-duration: 1s;\n              transition-duration: 1s;\n            }\n\n            .hide-atexo-spinner .atexo-spinner,\n            .atexo-spinner:hover{\n                opacity: 0;\n            }\n\n            .atexo-spinner > div {\n              background-color: #BBDEFB;\n              height: 100%;\n              width: 3px;\n              display: inline-block;\n\n              -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n              animation: sk-stretchdelay 1.2s infinite ease-in-out;\n            }\n\n            .atexo-spinner .rect2 {\n              -webkit-animation-delay: -1.1s;\n              animation-delay: -1.1s;\n              background-color: #64B5F6;\n            }\n\n            .atexo-spinner .rect3 {\n              -webkit-animation-delay: -1.0s;\n              animation-delay: -1.0s;\n              background-color: #2196F3;\n            }\n\n            .atexo-spinner .rect4 {\n              -webkit-animation-delay: -0.9s;\n              animation-delay: -0.9s;\n              background-color: #1976D2;\n            }\n\n            .atexo-spinner .rect5 {\n              -webkit-animation-delay: -0.8s;\n              animation-delay: -0.8s;\n              background-color: #0D47A1;\n            }\n\n            @-webkit-keyframes sk-stretchdelay {\n              0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n              20% { -webkit-transform: scaleY(1.0) }\n            }\n\n            @keyframes sk-stretchdelay {\n              0%, 40%, 100% {\n                transform: scaleY(0.4);\n                -webkit-transform: scaleY(0.4);\n              }  20% {\n                transform: scaleY(1.0);\n                -webkit-transform: scaleY(1.0);\n              }\n            }\n    "]
            }), 
            __metadata('design:paramtypes', [])
        ], AtexoSpinner);
        return AtexoSpinner;
    }());
    exports.AtexoSpinner = AtexoSpinner;
});
define("components/dashboard/components/alert/alert.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/alert/providers/alert.provider", "common/components/atexo-spinner.component"], function (require, exports, core_10, atexo_pipe_1, alert_provider_1, atexo_spinner_component_1) {
    "use strict";
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
            core_10.Input(), 
            __metadata('design:type', Object)
        ], Alert.prototype, "panelBodyObj", void 0);
        Alert = __decorate([
            core_10.Component({
                selector: 'alert',
                providers: [alert_provider_1.AlertProvider]
            }),
            core_10.View({
                template: "\n            <div role=\"alert\" class=\"alert\" [ngClass]=\"item.custom_class\" *ngFor=\"#item of items; #i=index\">\n                <strong>{{item.title}}</strong>\n                <p>{{item.content}}</p>\n            </div>\n            ",
                pipes: [atexo_pipe_1.ToClassPipe, atexo_pipe_1.ToDatePipe, atexo_pipe_1.TrancatePipe],
                directives: [atexo_spinner_component_1.AtexoSpinner]
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_10.ElementRef !== 'undefined' && core_10.ElementRef) === 'function' && _a) || Object, alert_provider_1.AlertProvider])
        ], Alert);
        return Alert;
        var _a;
    }());
    exports.Alert = Alert;
});
define("common/components/atexo-charts.component", ["require", "exports", 'angular2/core'], function (require, exports, core_11) {
    "use strict";
    var AtexoChartsJs = (function () {
        function AtexoChartsJs(element) {
            this.element = element;
            this._data = [];
            this._labels = [];
            this._options = { responsive: true };
            this._series = [];
            this._colours = [];
            this.initFlag = false;
            this.chartClick = new core_11.EventEmitter();
            this.chartHover = new core_11.EventEmitter();
            this.defaultsColours = [
                {
                    fillColor: 'rgba(253, 216, 53,0.2)',
                    strokeColor: 'rgba(253, 216, 53,1)',
                    pointColor: 'rgba(253, 216, 53,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(253, 216, 53,0.8)',
                    color: 'rgba(253, 216, 53,1)',
                    highlight: 'rgba(253, 216, 53,0.8)'
                }, {
                    fillColor: 'rgba(236, 64, 122,0.2)',
                    strokeColor: 'rgba(236, 64, 122,1)',
                    pointColor: 'rgba(236, 64, 122,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(236, 64, 122,0.8)',
                    color: 'rgba(236, 64, 122,1)',
                    highlight: 'rgba(236, 64, 122,0.8)'
                }, {
                    fillColor: 'rgba(205, 220, 57,0.2)',
                    strokeColor: 'rgba(205, 220, 57,1)',
                    pointColor: 'rgba(205, 220, 57,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(205, 220, 57,0.8)',
                    color: 'rgba(205, 220, 57,1)',
                    highlight: 'rgba(205, 220, 57,0.8)'
                }, {
                    fillColor: 'rgba(41, 182, 246,0.2)',
                    strokeColor: 'rgba(41, 182, 246,1)',
                    pointColor: 'rgba(41, 182, 246,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(41, 182, 246,0.8)',
                    color: 'rgba(41, 182, 246,1)',
                    highlight: 'rgba(41, 182, 246,0.8)'
                }, {
                    fillColor: 'rgba(142, 68, 173,0.2)',
                    strokeColor: 'rgba(142, 68, 173,1)',
                    pointColor: 'rgba(142, 68, 173,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(142, 68, 173,0.8)',
                    color: 'rgba(142, 68, 173,1)',
                    highlight: 'rgba(142, 68, 173,0.8)'
                }, {
                    fillColor: 'rgba(255, 193, 7,0.2)',
                    strokeColor: 'rgba(255, 193, 7,1)',
                    pointColor: 'rgba(255, 193, 7,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(255, 193, 7,0.8)',
                    color: 'rgba(255, 193, 7,1)',
                    highlight: 'rgba(255, 193, 7,0.8)'
                }, {
                    fillColor: 'rgba(13, 71, 161,0.2)',
                    strokeColor: 'rgba(13, 71, 161,1)',
                    pointColor: 'rgba(13, 71, 161,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(13, 71, 161,0.8)',
                    color: 'rgba(13, 71, 161,1)',
                    highlight: 'rgba(13, 71, 161,0.8)'
                }];
        }
        AtexoChartsJs.prototype.ngOnInit = function () {
            this.canvas = this.element.nativeElement.children[0].children[0];
            this.ctx = this.canvas.getContext('2d');
            this.parent = this.element.nativeElement;
            this.refresh();
            this.initFlag = true;
        };
        AtexoChartsJs.prototype.ngOnDestroy = function () {
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }
            if (this.legendTemplate) {
                this.legendTemplate.destroy();
                this.legendTemplate = null;
            }
        };
        AtexoChartsJs.prototype.ngAfterViewInit = function () {
            return true;
        };
        Object.defineProperty(AtexoChartsJs.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (value) {
                this._data = value;
                if (this.initFlag && this._data && this._data.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "chartType", {
            get: function () {
                return this._chartType;
            },
            set: function (value) {
                this._chartType = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "colours", {
            get: function () {
                return this._colours;
            },
            set: function (value) {
                this._colours = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "labels", {
            get: function () {
                return this._labels;
            },
            set: function (value) {
                this._labels = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "series", {
            get: function () {
                return this._series;
            },
            set: function (value) {
                this._series = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AtexoChartsJs.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (value) {
                this._options = value;
                if (this.initFlag && this._chartType && this._chartType.length > 0) {
                    this.refresh();
                }
            },
            enumerable: true,
            configurable: true
        });
        AtexoChartsJs.prototype.setLegend = function () {
            var list = this.parent.getElementsByTagName('ul');
            if (list.length) {
                list[0].remove();
                this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
            }
            else {
                this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
            }
        };
        AtexoChartsJs.prototype.getColour = function (colour) {
            return {
                fillColor: this.rgba(colour, 0.2),
                strokeColor: this.rgba(colour, 1),
                pointColor: this.rgba(colour, 1),
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: this.rgba(colour, 0.8),
                color: this.rgba(colour, 1),
                highlight: this.rgba(colour, 0.8)
            };
        };
        AtexoChartsJs.prototype.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        AtexoChartsJs.prototype.rgba = function (colour, alpha) {
            return 'rgba(' + colour.concat(alpha).join(',') + ')';
        };
        AtexoChartsJs.prototype.click = function (evt) {
            var atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
            var activePoints = atEvent.call(this.chart, evt);
            if (activePoints.length > 0) {
                var activeLabel = activePoints[0].label;
                this.chartClick.emit({ activePoints: activePoints, activeLabel: activeLabel });
            }
            else {
                console.log('not point');
            }
        };
        AtexoChartsJs.prototype.hover = function (evt) {
            var atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
            var activePoints = atEvent.call(this.chart, evt);
            if (activePoints.length > 0) {
                var activeLabel = activePoints[0].label;
                var activePoint = activePoints[0].value;
                this.chartHover.emit({ activePoints: activePoints, activePoint: activePoint, activeLabel: activeLabel });
            }
            else {
                console.log('not point');
            }
        };
        AtexoChartsJs.prototype.getChartBuilder = function (ctx, data, options) {
            return new Chart(ctx)[this.chartType](data, options);
        };
        AtexoChartsJs.prototype.getDataObject = function (label, value) {
            if (this.chartType === 'Line'
                || this.chartType === 'Bar'
                || this.chartType === 'Radar') {
                return {
                    label: label,
                    data: value
                };
            }
            if (this.chartType === 'Pie'
                || this.chartType === 'Doughnut'
                || this.chartType === 'PolarArea') {
                return {
                    label: label,
                    value: value
                };
            }
            return null;
        };
        AtexoChartsJs.prototype.getChartData = function (labels, dataObject) {
            if (this.chartType === 'Line'
                || this.chartType === 'Bar'
                || this.chartType === 'Radar') {
                return {
                    labels: labels,
                    datasets: dataObject
                };
            }
            if (this.chartType === 'Pie'
                || this.chartType === 'Doughnut'
                || this.chartType === 'PolarArea') {
                return dataObject;
            }
        };
        AtexoChartsJs.prototype.refresh = function () {
            this.ngOnDestroy();
            var dataset = [];
            for (var i = 0; i < this.data.length; i++) {
                var colourDesc = [this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255)];
                var colour = i < this.colours.length ? this.colours[i] : this.defaultsColours[i] || this.getColour(colourDesc);
                var data_1 = Object.assign(colour, this.getDataObject(this.series[i] || this.labels[i], this.data[i]));
                dataset.push(data_1);
            }
            var data = this.getChartData(this.labels, dataset);
            this.chart = this.getChartBuilder(this.ctx, data, this.options);
            if (this.legend) {
                this.setLegend();
            }
        };
        AtexoChartsJs = __decorate([
            core_11.Component({
                selector: 'panel-body-charts-js',
                properties: [
                    'data',
                    'labels',
                    'series',
                    'colours',
                    'chartType',
                    'legend',
                    'options'
                ],
                events: ['chartClick', 'chartHover']
            }),
            core_11.View({
                template: "<div class=\"canvas-wrap atexo-canvas-wrap\">\n                    <canvas\n                    class=\"canvas atexo-canvas-chart\"\n                    height=\"100%\"\n                    (click)=\"click($event)\"\n                    (mousemove)=\"hover($event)\"></canvas>\n                </div>"
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_11.ElementRef !== 'undefined' && core_11.ElementRef) === 'function' && _a) || Object])
        ], AtexoChartsJs);
        return AtexoChartsJs;
        var _a;
    }());
    exports.AtexoChartsJs = AtexoChartsJs;
});
define("components/dashboard/components/panel-body/providers/panel-body-list.provider", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_12, http_5) {
    "use strict";
    var PanelBodyListProvider = (function () {
        function PanelBodyListProvider(http) {
            this.http = http;
        }
        PanelBodyListProvider.prototype.all = function (url) {
            var options = new http_5.RequestOptions({
                method: http_5.RequestMethod.Get,
                url: url
            });
            var req = new http_5.Request(options);
            return this.http.request(req);
        };
        PanelBodyListProvider = __decorate([
            core_12.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_5.Http !== 'undefined' && http_5.Http) === 'function' && _a) || Object])
        ], PanelBodyListProvider);
        return PanelBodyListProvider;
        var _a;
    }());
    exports.PanelBodyListProvider = PanelBodyListProvider;
});
define("components/dashboard/components/panel-body/panel-body-list.component", ["require", "exports", 'angular2/core', "common/constants/atexo.constant", "common/components/atexo-charts.component", "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-list.provider"], function (require, exports, core_13, atexo_constant_4, atexo_charts_component_1, atexo_pipe_2, panel_body_list_provider_1) {
    "use strict";
    var PanelBodyList = (function () {
        function PanelBodyList(panelBodyListProvider) {
            this.chartData = [];
            this.chartLabels = [];
            this.chartColors = [];
            this.chartType = 'Doughnut';
            this.chartOptions = {};
            this.displayType = 'Table';
            this.displayTypes = [
                {
                    active: true,
                    type: 'Tableau',
                    icons: 'fa fa-table'
                }, {
                    active: false,
                    type: 'Camembert',
                    icons: 'fa fa-pie-chart'
                }];
            this.items = [];
            this.panelBodyListProvider = panelBodyListProvider;
        }
        PanelBodyList.prototype.ngOnInit = function () {
            this.panelBodyListServiceAll(this.panelBodyObj.urlData);
            return true;
        };
        PanelBodyList.prototype.updateDisplayType = function (i) {
            this.displayType = this.displayTypes[i].type;
            for (var j = 0; j < this.displayTypes.length; j++) {
                this.displayTypes[j].active = false;
                if (j === i) {
                    this.displayTypes[j].active = true;
                }
            }
            return false;
        };
        PanelBodyList.prototype.chartClicked = function (e) {
        };
        PanelBodyList.prototype.chartHovered = function (e) {
        };
        PanelBodyList.prototype.panelBodyListServiceAll = function (url) {
            var _this = this;
            this.panelBodyListProvider.all(url).subscribe(function (res) {
                if (res.status === 200) {
                    _this.items = res.json();
                    var i_1 = 0;
                    _this.items.forEach(function (obj) {
                        _this.chartData.push(obj.count);
                        _this.chartLabels.push(obj.status.replace('En cours - ', ''));
                        _this.chartOptions = { responsive: true, animateRotate: true };
                        _this.chartColors.push(atexo_constant_4.AtexoColorChartConstant[i_1].color);
                        i_1++;
                    });
                }
            });
        };
        __decorate([
            core_13.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyList.prototype, "panelBodyObj", void 0);
        PanelBodyList = __decorate([
            core_13.Component({
                selector: 'panel-body-list',
                providers: [panel_body_list_provider_1.PanelBodyListProvider]
            }),
            core_13.View({
                template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass }}\">\n\n                <div class=\"clearfix sub-header\">\n                    <ul class=\"atexoui-list right horizontal\">\n                        <li *ngFor=\"#displayType of displayTypes; #i=index\"\n                            [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\">\n                            <a href=\"#\"\n                               [ngClass]=\"{ available: displayTypes[i].active, disabled: !displayTypes[i].active }\"\n                               (click)=\"updateDisplayType(i)\">\n                                <span class=\"{{displayType.icons}}\"></span>\n                                {{displayType.type}}\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"display-table list-group\" role=\"list\" *ngIf=\"displayTypes[0].active\">\n                    <a class=\"list-group-item\" href=\"{{item.url}}\" role=\"listitem\"\n                       *ngFor=\"#item of items; #i=index\">\n                        {{item.status}}\n                        <span class=\"badge\" [ngClass]=\"{ 'badge-success': item.active }\">{{item.count}}</span>\n                    </a>\n                </div>\n\n                <div class=\"display-chart chart chart-pie\" *ngIf=\"displayTypes[1].active\">\n                    <panel-body-charts-js\n                            [data]=\"chartData\"\n                            [labels]=\"chartLabels\"\n                            [chartType]=\"chartType\"\n                            [options]=\"chartOptions\"\n                            (chartHover)=\"chartHovered($event)\"\n                            (chartClick)=\"chartClicked($event)\"></panel-body-charts-js>\n\n                    <ul class=\"atexoui-list list-unstyled\">\n                        <li *ngFor=\"#label of chartLabels; #i=index\">\n                            <span [ngStyle]=\"{ 'color': chartColors[i] }\" class=\"fa fa-tag\"></span>\n                            <strong class=\"count\">{{chartData[i]}}</strong> : {{label}}\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n            ",
                pipes: [atexo_pipe_2.ToClassPipe],
                directives: [atexo_charts_component_1.AtexoChartsJs]
            }), 
            __metadata('design:paramtypes', [panel_body_list_provider_1.PanelBodyListProvider])
        ], PanelBodyList);
        return PanelBodyList;
    }());
    exports.PanelBodyList = PanelBodyList;
});
define("components/dashboard/components/panel-body/providers/panel-body-chart.provider", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_14, http_6) {
    "use strict";
    var PanelBodyChartProvider = (function () {
        function PanelBodyChartProvider(http) {
            this.http = http;
        }
        PanelBodyChartProvider.prototype.get = function (url) {
            var options = new http_6.RequestOptions({
                method: http_6.RequestMethod.Get,
                url: url
            });
            var req = new http_6.Request(options);
            return this.http.request(req);
        };
        PanelBodyChartProvider = __decorate([
            core_14.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_6.Http !== 'undefined' && http_6.Http) === 'function' && _a) || Object])
        ], PanelBodyChartProvider);
        return PanelBodyChartProvider;
        var _a;
    }());
    exports.PanelBodyChartProvider = PanelBodyChartProvider;
});
define("components/dashboard/components/panel-body/panel-body-chart.component", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang', "common/constants/atexo.constant", "common/pipe/atexo.pipe", "common/services/atexo.service", "common/components/atexo-charts.component", "components/dashboard/components/panel-body/providers/panel-body-chart.provider"], function (require, exports, core_15, lang_5, atexo_constant_5, atexo_pipe_3, atexo_service_3, atexo_charts_component_2, panel_body_chart_provider_1) {
    "use strict";
    var PanelBodyChart = (function () {
        function PanelBodyChart(panelBodyChartProvider) {
            this.chartData = [[]];
            this.chartDataOld = this.chartData;
            this.chartLabels = [];
            this.chartSeries = [];
            this.chartSeriesColors = [];
            this.chartSeriesActive = [];
            this.chartOptions = this.getChartOptions();
            this.chartColours = atexo_constant_5.AtexoColorChartConstant;
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
            if (lang_5.isPresent(chart.type) && chart.type !== '') {
                this.chartType = chart.type;
            }
            if (lang_5.isPresent(chart.types) && !lang_5.isBlank(chart.types)) {
                this.chartTypes = chart.types;
                var i = atexo_service_3.Util.getInstance().arrayObjectFindIndex(this.chartTypes, function (e) {
                    return e.type === _this.chartType;
                });
                if (i === -1) {
                    i = 0;
                    this.chartType = this.chartTypes[0].type;
                }
                this.updateChartType(i);
            }
            if (lang_5.isPresent(chart.easting) && !lang_5.isBlank(chart.easting)) {
                this.easting = chart.easting;
            }
        };
        PanelBodyChart.prototype.panelBodyChartServiceGetData = function (url) {
            var _this = this;
            this.panelBodyChartProvider.get(url).subscribe(function (res) {
                if (res.status === 200) {
                    _this.getChartDataArray(res);
                    var jsonInstance = atexo_service_3.Util.getInstance().Json();
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
                    if (atexo_constant_5.AtexoChartConstant.typeCategory.single.indexOf(_this.chartType) !== -1) {
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
            if (atexo_constant_5.AtexoChartConstant.typeCategory.multiple.indexOf(this.chartType) !== -1) {
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
            if (lang_5.isPresent(i)) {
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
            atexo_service_3.Convert.getInstance().cvsToJson(res.text());
            this.chartDataArray = atexo_service_3.Convert.getInstance().getArrayData();
            return this.chartDataArray;
        };
        PanelBodyChart.prototype.getChartDataSingle = function (i) {
            var index = 0, arr;
            if (lang_5.isPresent(i)) {
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
            core_15.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyChart.prototype, "panelBodyObj", void 0);
        PanelBodyChart = __decorate([
            core_15.Component({
                selector: 'panel-body-chart',
                providers: [panel_body_chart_provider_1.PanelBodyChartProvider]
            }),
            core_15.View({
                template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass}}\">\n\n                <div class=\"clearfix sub-header\">\n                    <ul class=\"atexoui-list right horizontal\">\n                        <li *ngFor=\"#type of chartTypes; #i=index\"\n                            [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\">\n                            <a href=\"#\"\n                               [ngClass]=\"{ available: chartTypes[i].active, disabled: !chartTypes[i].active }\"\n                               (click)=\"updateChartType(i)\">\n                                <span class=\"{{type.icons}}\"></span>\n                                {{type.type}}\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n\n                <panel-body-charts-js\n                        [data]=\"chartData\"\n                        [labels]=\"chartLabels\"\n                        [options]=\"chartOptions\"\n                        [series]=\"chartSeries\"\n                        [colours]=\"chartColours\"\n                        [legend]=\"chartLegend\"\n                        [chartType]=\"chartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></panel-body-charts-js>\n\n\n                <ul class=\"atexoui-list center horizontal\">\n                    <li *ngFor=\"#serie of chartSeries; #i=index\"\n                        [ngClass]=\"{ available: chartSeriesActive[i], disabled: !chartSeriesActive[i] }\">\n                        <a href=\"#\"\n                           (click)=\"updateChartData(i)\"\n                           [ngClass]=\"{ available: chartSeriesActive[i], disabled: !chartSeriesActive[i] }\">\n                            <span [ngStyle]=\"{ 'color': chartSeriesColors[i] }\" class=\"fa fa-eye\"\n                                  [ngClass]=\"{ 'fa-eye': chartSeriesActive[i], 'fa-eye-slash': !chartSeriesActive[i] }\"></span>\n                            {{serie}}\n                        </a>\n                    </li>\n                </ul>\n\n            </div>\n            ",
                pipes: [atexo_pipe_3.ToClassPipe],
                directives: [atexo_charts_component_2.AtexoChartsJs]
            }), 
            __metadata('design:paramtypes', [panel_body_chart_provider_1.PanelBodyChartProvider])
        ], PanelBodyChart);
        return PanelBodyChart;
    }());
    exports.PanelBodyChart = PanelBodyChart;
});
define("components/dashboard/components/panel-body/providers/panel-body-search.provider", ["require", "exports", 'angular2/core', 'angular2/http', "common/services/atexo.service"], function (require, exports, core_16, http_7, atexo_service_4) {
    "use strict";
    var PanelBodySearchProvider = (function () {
        function PanelBodySearchProvider(http) {
            this.http = http;
        }
        PanelBodySearchProvider.prototype.all = function (_url, _search) {
            var options = new http_7.RequestOptions({
                method: http_7.RequestMethod.Get,
                url: _url,
                search: atexo_service_4.Util.getInstance().URLParams().parse(_search)
            });
            var req = new http_7.Request(options);
            return this.http.request(req);
        };
        PanelBodySearchProvider = __decorate([
            core_16.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_7.Http !== 'undefined' && http_7.Http) === 'function' && _a) || Object])
        ], PanelBodySearchProvider);
        return PanelBodySearchProvider;
        var _a;
    }());
    exports.PanelBodySearchProvider = PanelBodySearchProvider;
});
define("components/dashboard/components/panel-body/panel-body-search.component", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-search.provider"], function (require, exports, core_17, lang_6, atexo_pipe_4, panel_body_search_provider_1) {
    "use strict";
    var PanelBodySearch = (function () {
        function PanelBodySearch(panelBodySearchProvider) {
            this.items = [];
            this.milliseconds = 500;
            this.panelBodySearchProvider = panelBodySearchProvider;
            this.q = '';
            this.display = false;
        }
        PanelBodySearch.prototype.ngOnInit = function () {
            return true;
        };
        PanelBodySearch.prototype.quickSearch = function () {
            var _this = this;
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(function () {
                _this.panelBodySearchServiceAll();
            }, this.milliseconds);
        };
        PanelBodySearch.prototype.quickSearchClear = function () {
            this.q = '';
            this.items = [];
            return false;
        };
        PanelBodySearch.prototype.quickSearchDisplay = function (display) {
            var _this = this;
            var _timeOut, _milliseconds = 100;
            clearTimeout(_timeOut);
            _timeOut = setTimeout(function () {
                if (lang_6.isPresent(display)) {
                    _this.display = display;
                    _this.focusClass = display;
                }
                else {
                    _this.display = (_this.items.length > 0) ? true : false;
                }
            }, _milliseconds);
        };
        PanelBodySearch.prototype.panelBodySearchServiceAll = function () {
            var _this = this;
            if (this.q) {
                var arraySearch = {
                    motsClefs: this.q
                };
                this.panelBodySearchProvider.all(this.panelBodyObj.urlData, arraySearch).subscribe(function (res) {
                    if (res.status === 200) {
                        _this.items = res.json();
                        _this.quickSearchDisplay();
                    }
                });
            }
            else {
                this.items = [];
                this.quickSearchDisplay();
            }
            return true;
        };
        __decorate([
            core_17.Input(), 
            __metadata('design:type', Object)
        ], PanelBodySearch.prototype, "panelBodyObj", void 0);
        PanelBodySearch = __decorate([
            core_17.Component({
                selector: 'panel-body-search',
                providers: [panel_body_search_provider_1.PanelBodySearchProvider]
            }),
            core_17.View({
                template: "\n            <div class=\"{{ panelBodyObj.type.category | toClass}}\">\n                <form role=\"form\" class=\"form-horizontal\">\n                    <div class=\"form-group form-group-sm\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-group quick-search\" [ngClass]=\"{focus: focusClass}\">\n                                <input type=\"text\"\n                                       placeholder=\"Mots cl\u00E9s, intitul\u00E9 ou objet\"\n                                       class=\"form-control input-sm quick-search-input\"\n                                       autocomplete=\"off\"\n                                       id=\"quickSearch\"\n                                       [(ngModel)]=\"q\"\n                                       (keyup)=\"quickSearch()\"\n                                       (keyup.escape)=\"quickSearchClear()\"\n                                       (blur)=\"quickSearchDisplay(false)\"\n                                       (focus)=\"quickSearchDisplay(true)\"\n                                       title=\"Recherche rapide par mots cl\u00E9s, intitul\u00E9 ou objet\"\n                                >\n                                <span class=\"input-group-btn\">\n                                    <button type=\"button\"\n                                            class=\"btn btn-default btn-sm quick-search-btn\"\n                                            id=\"quickSearchBtn\">\n                                        <i class=\"fa fa-search fa-flip-horizontal\"></i>\n                                        <span class=\"sr-only\">Lancer la recherche</span>\n                                    </button>\n                                </span>\n                                <a href=\"\"\n                                   title=\"Annuler\"\n                                   name=\"Annuler\"\n                                   class=\"fa fa-close quick-search-clear\"\n                                   *ngIf=\"items.length\"\n                                   (click)=\"quickSearchClear()\"></a>\n\n                                <div class=\"quick-search-result\" *ngIf=\"display\">\n                                    <div class=\"list-group\">\n                                        <a *ngFor=\"#item of items; #i=index\"\n                                           href=\"{{item.url}}\"\n                                           class=\"list-group-item\">\n                                            {{item.title}}\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </form>\n            </div>\n            ",
                pipes: [atexo_pipe_4.ToClassPipe]
            }), 
            __metadata('design:paramtypes', [panel_body_search_provider_1.PanelBodySearchProvider])
        ], PanelBodySearch);
        return PanelBodySearch;
    }());
    exports.PanelBodySearch = PanelBodySearch;
});
define("components/dashboard/components/panel-body/providers/panel-body-editor.provider", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_18, http_8) {
    "use strict";
    var PanelBodyEditorProvider = (function () {
        function PanelBodyEditorProvider(http) {
            this.http = http;
        }
        PanelBodyEditorProvider.prototype.get = function (url) {
            var options = new http_8.RequestOptions({
                method: http_8.RequestMethod.Get,
                url: url
            });
            var req = new http_8.Request(options);
            return this.http.request(req);
        };
        PanelBodyEditorProvider = __decorate([
            core_18.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_8.Http !== 'undefined' && http_8.Http) === 'function' && _a) || Object])
        ], PanelBodyEditorProvider);
        return PanelBodyEditorProvider;
        var _a;
    }());
    exports.PanelBodyEditorProvider = PanelBodyEditorProvider;
});
define("components/dashboard/components/panel-body/entitys/note.entity", ["require", "exports"], function (require, exports) {
    "use strict";
    var Note = (function () {
        function Note(obj, draft) {
            this.completed = false;
            this.editing = false;
            this.deleted = false;
            this.draft = draft;
            this.data = obj;
        }
        Object.defineProperty(Note.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (value) {
                this._data = value;
            },
            enumerable: true,
            configurable: true
        });
        return Note;
    }());
    exports.Note = Note;
});
define("components/dashboard/components/panel-body/panel-body-editor.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-editor.provider", "components/dashboard/components/panel-body/entitys/note.entity"], function (require, exports, core_19, atexo_pipe_5, panel_body_editor_provider_1, note_entity_1) {
    "use strict";
    var PanelBodyEditor = (function () {
        function PanelBodyEditor(panelBodyEditorProvider) {
            this.editBoolean = false;
            this._milliseconds = 100;
            this.panelBodyEditorProvider = panelBodyEditorProvider;
            this.notes = [];
        }
        PanelBodyEditor.prototype.ngOnInit = function () {
            this.panelBodyEditorServiceGet(this.panelBodyObj.urlData);
            return true;
        };
        PanelBodyEditor.prototype.panelBodyEditorServiceGet = function (url) {
            var _this = this;
            this.panelBodyEditorProvider.get(url).subscribe(function (res) {
                if (res.status === 200) {
                    res.json().forEach(function (obj) {
                        _this.notes.push(new note_entity_1.Note(obj, obj.content));
                    });
                }
            });
        };
        PanelBodyEditor.prototype.ondblclick = function (note) {
            this.edit(note);
            return false;
        };
        PanelBodyEditor.prototype.cancel = function (note) {
            note.editing = false;
            return false;
        };
        PanelBodyEditor.prototype.edit = function (note) {
            note.editing = true;
            return false;
        };
        PanelBodyEditor.prototype.save = function (note) {
            note.data['content'] = note.draft;
            note.editing = false;
            return false;
        };
        PanelBodyEditor.prototype.remove = function (note) {
            return false;
        };
        PanelBodyEditor.prototype.add = function () {
            return false;
        };
        __decorate([
            core_19.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyEditor.prototype, "panelBodyObj", void 0);
        PanelBodyEditor = __decorate([
            core_19.Component({
                selector: 'panel-body-editor',
                providers: [panel_body_editor_provider_1.PanelBodyEditorProvider]
            }),
            core_19.View({
                template: "\n            <div class=\"panel-body-editor-wrap {{ panelBodyObj.type.category | toClass }}\">\n\n                <ul class=\"list-unstyled notes note-list\">\n                    <li *ngFor=\"#note of notes; #i=index\">\n\n                        <article class=\"note note-item\">\n\n                            <ul class=\"overlay-options options top\">\n\n                                <li *ngIf=\"note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Enregistrer\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"save(note)\">\n                                        <i class=\"fa fa-check\"></i>\n                                    </a>\n                                </li>\n                                <li *ngIf=\"note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Annuler\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"cancel(note)\">\n                                        <i class=\"fa fa-close\"></i>\n                                    </a>\n                                </li>\n\n                                <li *ngIf=\"!note.editing\">\n                                    <a href=\"#\"\n                                       title=\"Modifier\"\n                                       class=\"btn option option-item\"\n                                       (click)=\"edit(note)\">\n                                        <i class=\"fa fa-pencil\"></i>\n                                    </a>\n                                </li>\n                            </ul>\n\n                            <div class=\"editor-view\" *ngIf=\"!note.editing\" (click)=\"ondblclick(note)\">\n                                {{ note.data.content }}\n                            </div>\n\n                            <div class=\"editor-textarea\" *ngIf=\"note.editing\">\n                                <textarea class=\"textarea\"\n                                          [(ngModel)]=\"note.draft\"\n                                          (keyup.escape)=\"cancel(note)\"\n                                          (keyup.enter)=\"save(note)\"></textarea>\n                            </div>\n\n                        </article>\n\n                    </li>\n                </ul>\n\n                <a href=\"\" class=\"atexoui-link center add\" (click)=\"add()\" *ngIf=\"false\">Ajouter une note</a>\n\n            </div>\n            ",
                pipes: [atexo_pipe_5.ToClassPipe]
            }), 
            __metadata('design:paramtypes', [panel_body_editor_provider_1.PanelBodyEditorProvider])
        ], PanelBodyEditor);
        return PanelBodyEditor;
    }());
    exports.PanelBodyEditor = PanelBodyEditor;
});
define("components/dashboard/components/panel-body/providers/panel-body-article.provider", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_20, http_9) {
    "use strict";
    var PanelBodyArticleProvider = (function () {
        function PanelBodyArticleProvider(http) {
            this.http = http;
        }
        PanelBodyArticleProvider.prototype.all = function (url) {
            var options = new http_9.RequestOptions({
                method: http_9.RequestMethod.Get,
                url: url
            });
            var req = new http_9.Request(options);
            return this.http.request(req);
        };
        PanelBodyArticleProvider = __decorate([
            core_20.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_9.Http !== 'undefined' && http_9.Http) === 'function' && _a) || Object])
        ], PanelBodyArticleProvider);
        return PanelBodyArticleProvider;
        var _a;
    }());
    exports.PanelBodyArticleProvider = PanelBodyArticleProvider;
});
define("components/dashboard/components/panel-body/panel-body-article.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/providers/panel-body-article.provider", "common/services/atexo.service", "common/components/atexo-spinner.component"], function (require, exports, core_21, atexo_pipe_6, panel_body_article_provider_1, atexo_service_5, atexo_spinner_component_2) {
    "use strict";
    var PanelBodyArticle = (function () {
        function PanelBodyArticle(el, panelBodyArticleProvider) {
            this.el = el;
            this.articles = [];
            this.limit = 3;
            this.el = el;
            this.offset = this.limit;
            this.panelBodyArticleProvider = panelBodyArticleProvider;
        }
        PanelBodyArticle.prototype.ngOnInit = function () {
            this.panelBodyArticleServiceAll(this.panelBodyObj.urlData);
            return true;
        };
        PanelBodyArticle.prototype.panelBodyArticleServiceAll = function (url) {
            var _this = this;
            this.panelBodyArticleProvider.all(url).subscribe(function (res) {
                if (res.status === 200) {
                    _this.articles = res.json();
                }
            });
        };
        PanelBodyArticle.prototype.more = function () {
            this.offset += this.limit;
            return false;
        };
        PanelBodyArticle.prototype.moreArticles = function () {
            this.offset = this.articles.length;
            return false;
        };
        PanelBodyArticle.prototype.lessArticles = function () {
            this.offset = this.limit;
            return false;
        };
        PanelBodyArticle.prototype.selectArticle = function (id) {
            this.articleSelected = atexo_service_5.Util.getInstance().Grep(this.articles, function (item) {
                return (item.id === id);
            });
            this.articleSelected = this.articleSelected[0];
            return false;
        };
        PanelBodyArticle.prototype.closeSelectArticle = function () {
            this.articleSelected = null;
            return false;
        };
        __decorate([
            core_21.Input(), 
            __metadata('design:type', Object)
        ], PanelBodyArticle.prototype, "panelBodyObj", void 0);
        PanelBodyArticle = __decorate([
            core_21.Component({
                selector: 'panel-body-article',
                providers: [panel_body_article_provider_1.PanelBodyArticleProvider]
            }),
            core_21.View({
                template: "\n            <div class=\"panel-body-article-wrap {{ panelBodyObj.type.category | toClass}}\">\n\n                <ul class=\"list-unstyled articles article-list\">\n                    <li *ngFor=\"#article of articles; #i=index\">\n\n                        <article class=\"article article-item\"\n                                 *ngIf=\"i < offset\">\n                            <header class=\"header\">\n\n                                <h4 class=\"title\">\n                                    <a href=\"#\"\n                                       title=\"{{article.title}}\">{{article.title}}</a>\n                                    <span class=\"date\">{{article.date | toDate | date}}</span>\n                                </h4>\n\n                            </header>\n\n                            <div class=\"body\">\n\n                                <div class=\"content\">\n                                    <p>{{article.content | trancate:120}}</p>\n                                </div>\n\n                                <footer class=\"footer\">\n                                    <div class=\"links\">\n                                        <a href=\"\"\n                                           (click)=\"selectArticle(article.id)\"\n                                           title=\"lire la suite\">lire la suite</a>\n                                    </div>\n                                </footer>\n\n                            </div>\n\n\n                        </article>\n\n                    </li>\n                    <li *ngIf=\" offset < articles.length \">\n                        <a href=\"\" class=\"atexoui-link center more\"\n                           (click)=\"moreArticles()\">Plus d'actualit\u00E9s</a>\n                    </li>\n                    <li *ngIf=\" offset === articles.length \">\n                        <a href=\"\" class=\"atexoui-link center less\"\n                           (click)=\"lessArticles()\">Moins d'actualit\u00E9s</a>\n                    </li>\n                </ul>\n                <div class=\"article-full-screen\" *ngIf=\"articleSelected\">\n                    <article class=\"article article-selected\">\n                        <header class=\"header\">\n\n                            <div class=\"options row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"pull-left\">\n                                        <h4 class=\"title\">\n                                            <a href=\"\"\n                                               title=\"{{articleSelected.title}}\">{{articleSelected.title}}</a>\n                                        </h4>\n                                        <span class=\"date\">{{articleSelected.date | toDate | date}}</span>\n                                    </div>\n                                    <div class=\"pull-right\">\n                                        <a href=\"\"\n                                           title=\"Close Article\"\n                                           data-widgster=\"close\" (click)=\"closeSelectArticle()\"\n                                        class=\"btn btn-sm\">\n                                            <i class=\"fa fa-chevron-left\"></i> Retour\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </header>\n\n                        <div class=\"body\">\n\n                            <div class=\"content\">\n                                <p>{{articleSelected.content}}</p>\n                            </div>\n\n                            <footer class=\"footer\">\n                                <div class=\"links\"\n                                     *ngIf=\"articleSelected.links.length\">\n                                    <a href=\"{{link.url}}\"\n                                       target=\"{{link.target}}\"\n                                       title=\"{{link.title}}\"\n                                       *ngFor=\"#link of articleSelected.links; #i=index\">{{link.title}}</a>\n                                </div>\n                            </footer>\n\n                        </div>\n\n                    </article>\n                </div>\n            </div>\n    ",
                pipes: [atexo_pipe_6.ToClassPipe, atexo_pipe_6.ToDatePipe, atexo_pipe_6.TrancatePipe],
                directives: [atexo_spinner_component_2.AtexoSpinner]
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_21.ElementRef !== 'undefined' && core_21.ElementRef) === 'function' && _a) || Object, panel_body_article_provider_1.PanelBodyArticleProvider])
        ], PanelBodyArticle);
        return PanelBodyArticle;
        var _a;
    }());
    exports.PanelBodyArticle = PanelBodyArticle;
});
define("components/dashboard/components/panel-body/panel-body.component", ["require", "exports", 'angular2/core', "common/pipe/atexo.pipe", "components/dashboard/components/panel-body/panel-body-list.component", "components/dashboard/components/panel-body/panel-body-chart.component", "components/dashboard/components/panel-body/panel-body-search.component", "components/dashboard/components/panel-body/panel-body-editor.component", "components/dashboard/components/panel-body/panel-body-article.component"], function (require, exports, core_22, atexo_pipe_7, panel_body_list_component_1, panel_body_chart_component_1, panel_body_search_component_1, panel_body_editor_component_1, panel_body_article_component_1) {
    "use strict";
    var PanelBody = (function () {
        function PanelBody(el) {
            this.el = el;
            this.el = el;
        }
        PanelBody.prototype.ngOnInit = function () {
            return true;
        };
        __decorate([
            core_22.Input(), 
            __metadata('design:type', Object)
        ], PanelBody.prototype, "panelBodyObj", void 0);
        PanelBody = __decorate([
            core_22.Component({
                selector: 'panel-body'
            }),
            core_22.View({
                template: "\n            <panel-body-list  *ngIf=\"panelBodyObj.type.category === 'LIST'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-list>\n            <panel-body-chart  *ngIf=\"panelBodyObj.type.category === 'CHART'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-chart>\n            <panel-body-search  *ngIf=\"panelBodyObj.type.category === 'SEARCH'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-search>\n            <panel-body-editor  *ngIf=\"panelBodyObj.type.category === 'EDITOR'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-editor>\n            <panel-body-article  *ngIf=\"panelBodyObj.type.category === 'ARTICLE'\" [panelBodyObj]=\"panelBodyObj\"></panel-body-article>\n            ",
                directives: [panel_body_list_component_1.PanelBodyList, panel_body_chart_component_1.PanelBodyChart, panel_body_search_component_1.PanelBodySearch, panel_body_article_component_1.PanelBodyArticle, panel_body_editor_component_1.PanelBodyEditor],
                pipes: [atexo_pipe_7.ToClassPipe]
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_22.ElementRef !== 'undefined' && core_22.ElementRef) === 'function' && _a) || Object])
        ], PanelBody);
        return PanelBody;
        var _a;
    }());
    exports.PanelBody = PanelBody;
});
define("components/dashboard/components/panel/panel.component", ["require", "exports", 'angular2/core', "components/dashboard/components/panel-body/panel-body.component", "common/pipe/atexo.pipe"], function (require, exports, core_23, panel_body_component_1, atexo_pipe_8) {
    "use strict";
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
            core_23.Input(), 
            __metadata('design:type', Object)
        ], Panel.prototype, "panelObj", void 0);
        Panel = __decorate([
            core_23.Component({
                selector: 'panel'
            }),
            core_23.View({
                template: "\n            <div class=\"panel panel-default bloc-toggle\"\n                 [ngClass]=\"{close: closeClass}\">\n                <!-- Header -->\n                <header class=\"panel-header header panel-heading ui-sortable-handle\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                                <h3 class=\"panel-title\">\n                                    <i class=\"{{panelObj.icons}}\"></i>\n                                    {{panelObj.title}}\n                                </h3>\n                            </div>\n                            <div class=\"pull-right\">\n                                <div class=\"widget-controls\">\n                                    <a href=\"\"\n                                       data-widgster=\"Collapse\"\n                                       title=\"{{ (panelObj.options.collapse.title !== '')? panelObj.options.collapse.title : 'R\u00E9duire le panneau' }}\"\n                                       (click)=\"collapse()\"\n                                       *ngIf=\"panelObj.options.collapse.active\">\n                                        <i class=\"{{ (panelObj.options.collapse.icons !== '')? panelObj.options.collapse.icons : 'fa fa-minus' }}\"></i>\n                                    </a>\n                                    <a href=\"\"\n                                       data-widgster=\"close\"\n                                       title=\"{{ (panelObj.options.close.title !== '')? panelObj.options.close.title : 'Fermer le panneau' }}\"\n                                       (click)=\"close()\"\n                                       *ngIf=\"panelObj.options.close.active\">\n                                        <i class=\"{{ (panelObj.options.close.icons !== '')? panelObj.options.close.icons : 'fa fa-close' }}\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </header>\n                <!-- End Header -->\n\n                <!-- Body -->\n                <div class=\"panel-body body collapse\"\n                     aria-expanded=\"true\"\n                     [ngClass]=\"{collapse: collapseClass}\">\n                    <panel-body [panelBodyObj]=\"panelObj\"></panel-body>\n                </div>\n                <!-- End Body -->\n\n\n                <!-- Footer -->\n                <footer class=\"panel-footer footer text-right collapse\"\n                        aria-expanded=\"true\"\n                        [ngClass]=\"{collapse: collapseClass}\"\n                        *ngIf=\"panelObj.footer.list.length\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"pull-left\">\n                            </div>\n                            <div class=\"pull-right\">\n                                <a href=\"\" *ngIf=\"panelObj.footer.list[0].type === 'LINK'\">\n                                    {{panelObj.footer.list[0].title}}\n                                    <i class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n                </footer>\n                <!-- End Footer -->\n            </div>\n            ",
                directives: [panel_body_component_1.PanelBody],
                pipes: [atexo_pipe_8.ToClassPipe],
                encapsulation: core_23.ViewEncapsulation.Emulated
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_23.ElementRef !== 'undefined' && core_23.ElementRef) === 'function' && _a) || Object])
        ], Panel);
        return Panel;
        var _a;
    }());
    exports.Panel = Panel;
});
define("components/dashboard/dashboard.component", ["require", "exports", 'angular2/core', 'angular2/src/facade/lang', "common/constants/atexo.constant", "common/services/atexo.service", "components/dashboard/providers/panel.provider", "components/dashboard/components/alert/alert.component", "components/dashboard/components/panel/panel.component"], function (require, exports, core_24, lang_7, atexo_constant_6, atexo_service_6, panel_provider_1, alert_component_1, panel_component_1) {
    "use strict";
    var Dashboard = (function () {
        function Dashboard(panelProvider) {
            this.progress = atexo_service_6.Progress.getInstance();
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
            if (!lang_7.isPresent(this.config)) {
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
            atexo_constant_6.AtexoRestConstant.request.panel.all.url = this.config.json.panel;
            atexo_constant_6.AtexoRestConstant.request.alert.all.url = this.config.json.alert;
        };
        Dashboard.prototype.panelServiceAll = function () {
            var _this = this;
            var param = {
                limit: this.limit,
                offset: this.offset
            };
            atexo_service_6.Progress.getInstance().incrementNbrProgress();
            this.panelProvider.all(param).subscribe(function (res) {
                if (res.status === 200) {
                    _this.endContent = false;
                    _this.panelsZonesArray = res.json();
                    atexo_service_6.Progress.getInstance().decrementNbrProgress();
                }
                else {
                    _this.endContent = true;
                }
            });
        };
        __decorate([
            core_24.Input('config'), 
            __metadata('design:type', Object)
        ], Dashboard.prototype, "config", void 0);
        Dashboard = __decorate([
            core_24.Component({
                selector: 'dashboard',
                providers: [panel_provider_1.PanelProvider]
            }),
            core_24.View({
                template: "\n            <div class=\"dashboard parent\">\n                <alert></alert>\n                <div class=\"row wrapper\" id=\"sortable\" [ngClass]=\"{'sortable-start': startsortable}\">\n                    <div localtion=\"zone-a\"\n                         class=\"column container\"\n                         [ngClass]=\"zone.zone.custom_class\"\n                         id=\"{{zone.zone.id}}\"\n                         *ngFor=\"#zone of panelsZonesArray; #i=index\">\n                        <!-- Panel -->\n                        <panel [panelObj]=\"panelObj\"\n                               class=\"panel-component\"\n                               *ngFor=\"#panelObj of zone.panels; #i=index\"></panel>\n                        <!-- End Panel -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-backdrop  in\" *ngIf=\"progress.showBackdrop()\"></div>\n            ",
                directives: [panel_component_1.Panel, alert_component_1.Alert]
            }), 
            __metadata('design:paramtypes', [panel_provider_1.PanelProvider])
        ], Dashboard);
        return Dashboard;
    }());
    exports.Dashboard = Dashboard;
});
define("atexo-dashboard", ["require", "exports", "components/dashboard/dashboard.component"], function (require, exports, dashboard_component_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(dashboard_component_1);
});
define("common/config/atexo.config", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.AtexoConfig = {
        application: {
            name: 'Dashboard',
            version: '1.0.0',
            date: '2016.02.01'
        }
    };
});
define("common/providers/dragula.provider", ["require", "exports", 'angular2/core'], function (require, exports, core_25) {
    "use strict";
    var DragulaService = (function () {
        function DragulaService() {
            this.cancel = new core_25.EventEmitter();
            this.cloned = new core_25.EventEmitter();
            this.drag = new core_25.EventEmitter();
            this.dragend = new core_25.EventEmitter();
            this.drop = new core_25.EventEmitter();
            this.out = new core_25.EventEmitter();
            this.over = new core_25.EventEmitter();
            this.remove = new core_25.EventEmitter();
            this.shadow = new core_25.EventEmitter();
            this.dropModel = new core_25.EventEmitter();
            this.removeModel = new core_25.EventEmitter();
            this.events = [
                'cancel',
                'cloned',
                'drag',
                'dragend',
                'drop',
                'out',
                'over',
                'remove',
                'shadow',
                'dropModel',
                'removeModel'
            ];
            this.bags = [];
        }
        DragulaService.prototype.add = function (name, drake) {
            var bag = this.find(name);
            if (bag) {
                throw new Error('Bag named: "' + name + '" already exists.');
            }
            bag = {
                name: name,
                drake: drake
            };
            this.bags.push(bag);
            if (drake.models) {
                this.handleModels(name, drake);
            }
            if (!bag.initEvents) {
                this.setupEvents(bag);
            }
            return bag;
        };
        DragulaService.prototype.find = function (name) {
            for (var i = 0; i < this.bags.length; i++) {
                if (this.bags[i].name === name) {
                    return this.bags[i];
                }
            }
        };
        DragulaService.prototype.destroy = function (name) {
            var bag = this.find(name);
            var i = this.bags.indexOf(bag);
            this.bags.splice(i, 1);
            bag.drake.destroy();
        };
        DragulaService.prototype.setOptions = function (name, options) {
            var bag = this.add(name, dragula(options));
            this.handleModels(name, bag.drake);
        };
        DragulaService.prototype.handleModels = function (name, drake) {
            var _this = this;
            var dragElm;
            var dragIndex;
            var dropIndex;
            var sourceModel;
            drake.on('remove', function (el, source) {
                if (!drake.models) {
                    return;
                }
                sourceModel = drake.models[drake.containers.indexOf(source)];
                sourceModel.splice(dragIndex, 1);
                _this.removeModel.emit([name, el, source]);
            });
            drake.on('drag', function (el, source) {
                dragElm = el;
                dragIndex = _this.domIndexOf(el, source);
            });
            drake.on('drop', function (dropElm, target, source) {
                if (!drake.models) {
                    return;
                }
                dropIndex = _this.domIndexOf(dropElm, target);
                sourceModel = drake.models[drake.containers.indexOf(source)];
                if (target === source) {
                    sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
                }
                else {
                    var notCopy = dragElm === dropElm;
                    var targetModel = drake.models[drake.containers.indexOf(target)];
                    var dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
                    if (notCopy) {
                        sourceModel.splice(dragIndex, 1);
                    }
                    targetModel.splice(dropIndex, 0, dropElmModel);
                    target.removeChild(dropElm);
                }
                _this.dropModel.emit([name, dropElm, target, source]);
            });
        };
        DragulaService.prototype.setupEvents = function (bag) {
            bag.initEvents = true;
            var that = this;
            var emitter = function (type) {
                function replicate() {
                    var args = Array.prototype.slice.call(arguments);
                    that[type].emit([bag.name].concat(args));
                }
                bag.drake.on(type, replicate);
            };
            this.events.forEach(emitter);
        };
        DragulaService.prototype.domIndexOf = function (child, parent) {
            return Array.prototype.indexOf.call(parent.children, child);
        };
        DragulaService = __decorate([
            core_25.Injectable(), 
            __metadata('design:paramtypes', [])
        ], DragulaService);
        return DragulaService;
    }());
    exports.DragulaService = DragulaService;
});
define("common/directives/dragula.directive", ["require", "exports", 'angular2/core', "common/providers/dragula.provider"], function (require, exports, core_26, dragula_provider_1) {
    "use strict";
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
            core_26.Input('dragula'), 
            __metadata('design:type', String)
        ], DragAndDropDirective.prototype, "bag", void 0);
        __decorate([
            core_26.Input(), 
            __metadata('design:type', String)
        ], DragAndDropDirective.prototype, "dragulaModel", void 0);
        DragAndDropDirective = __decorate([
            core_26.Directive({
                selector: '[dragula]',
                providers: [dragula_provider_1.DragulaService]
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof core_26.ElementRef !== 'undefined' && core_26.ElementRef) === 'function' && _a) || Object, dragula_provider_1.DragulaService])
        ], DragAndDropDirective);
        return DragAndDropDirective;
        var _a;
    }());
    exports.DragAndDropDirective = DragAndDropDirective;
});
define("components/about/about", ["require", "exports", 'angular2/core', 'angular2/router'], function (require, exports, core_27, router_1) {
    "use strict";
    var About = (function () {
        function About(params) {
            this.id = params.get('id');
        }
        About = __decorate([
            core_27.Component({
                selector: 'about'
            }),
            core_27.View({
                template: "\n\t\tWelcome to the about page! This is the ID: {{id}}\n\t"
            }), 
            __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
        ], About);
        return About;
        var _a;
    }());
    exports.About = About;
});
define("components/dashboard/services/panel.service", ["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_28, http_10) {
    "use strict";
    var PanelService = (function () {
        function PanelService(http) {
            this.http = http;
        }
        PanelService = __decorate([
            core_28.Injectable(), 
            __metadata('design:paramtypes', [(typeof (_a = typeof http_10.Http !== 'undefined' && http_10.Http) === 'function' && _a) || Object])
        ], PanelService);
        return PanelService;
        var _a;
    }());
    exports.PanelService = PanelService;
});
//# sourceMappingURL=atexo-dashboard.amd.js.map