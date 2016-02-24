"use strict";
var http_1 = require('angular2/http');
var atexo_enum_constant_1 = require('./atexo-enum.constant');
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
//# sourceMappingURL=atexo-rest.constant.js.map