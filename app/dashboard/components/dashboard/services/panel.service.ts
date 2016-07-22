import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Request, RequestMethod, URLSearchParams} from 'angular2/http';

@Injectable()
export class PanelService {
    http:Http;
    search:URLSearchParams;

    constructor(http:Http) {
        this.http = http;
    }


}