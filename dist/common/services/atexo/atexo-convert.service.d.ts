export declare class Convert {
    static instance: Convert;
    static isCreating: Boolean;
    private strDelimiter;
    private arrData;
    private jsonData;
    private arrProperty;
    constructor();
    static getInstance(): Convert;
    cvsToJson(csv: string, strDelimiter?: string): String;
    getArrayData(): any[];
    getArrProperty(): string[];
}
