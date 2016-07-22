import {Injectable} from '@angular/core';
import {Http, RequestOptions, Request, RequestMethod, URLSearchParams} from '@angular/http';

@Injectable()
export class PanelService {
    http:Http;
    search:URLSearchParams;

    constructor(http:Http) {
        this.http = http;
    }


}
