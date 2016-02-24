// app/common/services/atexo/atexo-util.service.ts
/**
 *
 * @name atexo-util.service.ts
 *
 */

import {Injectable} from 'angular2/core';
import {URLSearchParams} from 'angular2/http';
import {isPresent, isJsObject, isString, isArray, isBlank } from 'angular2/src/facade/lang';

import {AtexoPathConstant, AtexoRestConstant, RequestUrlType} from '../../constants/atexo.constant';


@Injectable()
export class Util {
    static instance:Util;
    static isCreating:Boolean = false;

    constructor() {
        if (!Util.isCreating) {
            throw new Error('[Util] You can\'t call new in Singleton instances!');
        }
    }

    static getInstance() {
        if (Util.instance == null) {
            Util.isCreating = true;
            Util.instance = new Util();
            Util.isCreating = false;
        }
        return Util.instance;
    }

    Path() {
        return new Path();
    }

    Rest() {
        return new Rest();
    }

    RequestOptions() {
        return new RequestOptions();
    }

    Json() {
        return new Json();
    }

    URLParams() {
        return new URLParams();
    }

    arrayObjectFindIndex(arr:Array<any>, callback) {
        let len:number = arr.length,
            index:number,
            i:number;

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
    }

    Grep(arr:Array<any>, callback:any) {
        let newArr:Array<any> = [],
            len:number = arr.length,
            i:number;
        for (i = 0; i < len; i++) {
            var e = arr[i];
            if (callback(e)) {
                newArr.push(e);
            }
        }
        return newArr;
    }

    Map(arr, callback) {
        let newArr = [],
            len = arr.length,
            i;
        for (i = 0; i < len; i++) {
            var e = arr[i];
            var n = callback(e);
            newArr.push(n);
        }
        return newArr;
    }

}


class Rewriter {
    private base:string = '';
    private uri:string = '';
    private type:number = RequestUrlType.Relative;

    constructor(base:string, uri?:any) {
        uri = isPresent(uri) ? uri : '';
        this.base = base;
        this.checkUri(uri);
    }

    private checkUri(uri:any) {
        if (isString(uri)) {
            this.type = RequestUrlType.Relative;
            this.uri = uri;
        } else {
            this.type = uri['type'];
            this.uri = uri['url'];
        }
        return this;
    }

    setPath(uri:any):Rewriter {
        this.checkUri(uri);
        return this;
    }

    build():string {
        if (this.type === RequestUrlType.Relative) {
            return this.base + this.uri;
        }
        return this.uri;

    }
}

class Path extends Rewriter {
    constructor(path?:string) {
        path = isPresent(path) ? path : '';
        super(AtexoPathConstant.base, path);
    }
}

class Rest extends Rewriter {
    constructor(url?:string) {
        url = isPresent(url) ? url : '';
        super(AtexoRestConstant.baseUrl, url);
    }
}

class RequestOptions {

    searchParams:URLSearchParams;

    constructor() {
        this.searchParams = new URLSearchParams();
    }

    setSearchParams(data?:Object):URLSearchParams {
        if (!isPresent(data)) {
            return;
        } else {
            if (isJsObject(data)) {
                for (var item in data) {
                    if (data.hasOwnProperty(item)) {
                        this.searchParams.set(item, data[item]);
                    }
                }
            }
            return this.searchParams;
        }
    }
}


class URLParams {

    private params:URLSearchParams;

    constructor() {
        return this;
    }

    parse(_params?:Object) {
        let params:URLSearchParams = new URLSearchParams();
        if (isPresent(_params)) {
            //this.params = new URLSearchParams();
            for (var k in _params) {
                if (_params.hasOwnProperty(k)) {
                    params.set(k, _params[k]);
                }
            }
            this.params = params;
        }
        return this.params;
    }

}


class Json {

    public result:any;
    public arrayResult:Array<any>;
    public easting:Array<any>;
    public eastingArray:Array<any>;
    public ordered:Array<any>;
    public orderedArray:Array<any>;

    constructor() {
        return this;
    }

    public getByProperty(arrayJson:Array<Object>, property?:any, value?:any) {

        let arrayProperty:Array<any> = [],
            arrayValue:Array<any> = [];
        if (isPresent(property) && isPresent(value)) {
            if (isString(property) && isString(value)) {
                arrayProperty.push(property);
                arrayValue.push(value);
            } else {
                arrayProperty = property;
                arrayValue = value;
            }
        }


        if (isPresent(arrayJson)) {
            this.result = arrayJson;
        }

        let i:number = 0,
            length:number = this.result.length,
            arrReturn:Array<any> = [];

        for (; i < length; i++) {
            if (arrayProperty.length === 0 || arrayValue.length === 0) {
                arrReturn.push(this.result[i]);
            } else {
                if (this.checkPropertyValue(this.result[i], arrayProperty, arrayValue)) {
                    arrReturn.push(this.result[i]);
                }
            }

        }

        this.result = arrReturn;
        return arrReturn;
    }

    public groupByProperty(property:any, arrayJson?:Array<Object>) {

        let arrayProperty:Array<any> = [];

        if (isString(property)) {
            arrayProperty.push(property);
        } else {
            arrayProperty = property;
        }

        if (isPresent(arrayJson)) {
            this.result = arrayJson;
        }

        let i:number = 0,
            length:number = this.result.length,
            arrReturn:Array<any> = [[]],
            arrEasting:Array<any> = [],
            arrOrdered:Array<any> = [],
            easting:Array<any> = this.easting;

        this.result.map((obj) => {
            if (arrOrdered.indexOf(obj[arrayProperty[0]]) === -1) {
                arrOrdered
                    .push(obj[arrayProperty[0]]);
                arrReturn[arrOrdered.indexOf(obj[arrayProperty[0]])] = this.newArray(this.easting.length);
            }


            arrReturn
                [arrOrdered.indexOf(obj[property[0]])]
                [easting.indexOf(obj[property[1]])] += Number(obj[property[2]]);

        });

        this.arrayResult = arrReturn;
        this.ordered = arrOrdered;
        return arrReturn;
    }

    private newArray(length:number, defaltValue?:any) {
        let i:number = 0,
            _defaultValue:any = 0,
            arr:Array<any> = new Array(length);

        if (isPresent(defaltValue)) {
            _defaultValue = defaltValue;
        }
        for (i; i < length; i++) {
            arr[i] = _defaultValue;
        }
        return arr;

    }

    public setArrayJson(arrayJson:Array<Object>) {
        this.result = arrayJson;
    }

    public getArrayJson():Array<Object> {
        return this.result;
    }

    public getResult():Array<Object> {
        return this.result;
    }

    public getArrayResult():Array<number> {
        return this.arrayResult;
    }

    public getEasting():Array<string> {
        return this.easting;
    }

    public setEasting(easting:Array<any>) {
        this.easting = easting;
        this.setEastingArray();
    }

    public getOrdered() {
        return this.ordered;
    }

    public setEastingArray() {
        /*this.easting.map(function (row) {
         this.setEastingArray[row] = 0;
         });*/
        return true;
    }


    private checkPropertyValue(arrayJson:Object, property:Array<any>, value:Array<any>) {
        let i:number = 0,
            length:number = property.length,
            result:boolean = true;
        for (; i < length; i++) {

            if (arrayJson[property[i]] !== value[i]) {
                result = false;
                return result;
            }
        }

        return result;
    }
}