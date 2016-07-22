// app/common/services/atexo/atexo-convert.service.ts
/**
 *
 * @name atexo-convert.service.ts
 *
 */

import {Injectable} from 'angular2/core';
import {isPresent, isBlank} from 'angular2/src/facade/lang';

@Injectable()
export class Convert {

    static instance:Convert;
    static isCreating:Boolean = false;

    private strDelimiter:string = ';';
    private arrayObject:Array<any> = [];
    private jsonData:String;
    private arrayProperty:Array<any> = [];
    private arrayPropertyValue:Object = {};


    public cvsToJson(csv:string, strDelimiter?:string) {
        let lines = csv.split('\n'),
            linesLength = (lines[lines.length - 1] === '') ? lines.length - 1 : lines.length;

        if (isPresent(strDelimiter)) {
            this.strDelimiter = strDelimiter;
        }

        this.getArrayProperty(lines[0]);

        for (let i = 1; i < linesLength; i++) {

            let obj = {},
                currentline = lines[i].split(this.strDelimiter);

            for (var j = 0; j < this.arrayProperty.length; j++) {
                obj[this.arrayProperty[j]] = currentline[j];

                if (isBlank(this.arrayPropertyValue[this.arrayProperty[j]])) {
                    this.arrayPropertyValue[this.arrayProperty[j]] = new Array();
                    this.arrayPropertyValue[this.arrayProperty[j]].push(currentline[j]);
                } else {
                    if (this.arrayPropertyValue[this.arrayProperty[j]].indexOf(currentline[j]) === -1) {
                        this.arrayPropertyValue[this.arrayProperty[j]].push(currentline[j]);
                    }
                }

            }

            this.arrayObject.push(obj);
        }

        //console.log(this.arrayPropertyValue);

        //return this.arrayObject; //JavaScript object
        this.jsonData = JSON.stringify(this.arrayObject);
        return this.jsonData; //JSON
    }

    /**
     * @public
     * @name getData
     * @description
     * @returns {Array<Object>}
     */
    public getData() {
        return this.arrayObject;
    }

    /**
     * @public
     * @name getJson
     * @description
     * @returns {Object}
     */
    public getJson() {
        return this.jsonData;
    }

    /**
     * @public
     * @name getProperty
     * @description
     * @returns {Array<string>}
     */
    public getProperty() {
        return this.arrayProperty;
    }

    /**
     * @public
     * @name getAllPropertyValue
     * @description
     * @returns {Array<Object>}
     */
    public getAllPropertyValue() {
        return this.arrayPropertyValue;
    }

    /**
     * @public
     * @name getAllPropertyValue
     * @description
     * @returns {Array<Object>}
     */
    public getAllPropertyValueByName(name:string) {
        return this.getAllPropertyValue()[name];
    }

    public getArrayProperty(lineProperty:String) {
        let arrayProperty:Array<String> = [];
        arrayProperty = lineProperty.split(this.strDelimiter);
        if (arrayProperty[arrayProperty.length - 1] === '') {
            arrayProperty.pop();
        }
        return this.arrayProperty = arrayProperty;
    }


}