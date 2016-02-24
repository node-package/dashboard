// app/common/services/atexo/atexo-convert.service.ts
/**
 *
 * @name atexo-convert.service.ts
 *
 */

import {Injectable} from 'angular2/core';

@Injectable()
export class Convert {

    static instance:Convert;
    static isCreating:Boolean = false;

    private strDelimiter:string = ';';
    private arrData:Array<any>;
    private jsonData:String;
    private arrProperty:Array<string> = [];

    constructor() {
        if (!Convert.isCreating) {
            throw new Error('[Convert] You can\'t call new in Singleton instances!');
        }
    }

    static getInstance() {
        if (Convert.instance == null) {
            Convert.isCreating = true;
            Convert.instance = new Convert();
            Convert.isCreating = false;
        }
        return Convert.instance;
    }

    public cvsToJson(csv:string, strDelimiter?:string) {
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

        //return this.arrData; //JavaScript object
        this.jsonData = JSON.stringify(this.arrData);
        return this.jsonData; //JSON
    }

    public getArrayData() {
        return this.arrData;
    }

    public getArrProperty() {
        return this.arrProperty;
    }

}