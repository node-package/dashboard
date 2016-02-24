import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Request, RequestMethod, URLSearchParams} from 'angular2/http';
import {Util} from '../../../../../common/services/atexo.service';
import {AtexoRestConstant} from '../../../../../common/constants/atexo.constant';

@Injectable()
export class PanelBodyListProvider {
    http:Http;
    search:URLSearchParams;

    constructor(http:Http) {
        this.http = http;
    }

    all(url:string) {
        var options = new RequestOptions({
            method: RequestMethod.Get,
            url: url
        });
        var req = new Request(options);
        return this.http.request(req);
    }

}