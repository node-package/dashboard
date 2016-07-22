import {Injectable} from '@angular/core';
import {Http, RequestOptions, Request, RequestMethod, URLSearchParams} from '@angular/http';
import {isPresent, isArray } from '@angular/core/src/facade/lang';

import {Util} from '../../../../../common/services/atexo.service';
import {AtexoRestConstant} from '../../../../../common/constants/atexo.constant';


@Injectable()
export class PanelBodySearchProvider {
    http:Http;
    search:any;

    constructor(http:Http) {
        this.http = http;
    }

    all(_url:string, _search?:Object) {
        var options = new RequestOptions({
            method: RequestMethod.Get,
            url: _url,
            search: Util.getInstance().URLParams().parse(_search)
        });
        var req = new Request(options);
        return this.http.request(req);
    }

}
