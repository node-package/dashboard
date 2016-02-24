import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Request, RequestMethod, URLSearchParams} from 'angular2/http';
import {Util} from '../../../../../common/services/atexo.service';
import {AtexoRestConstant} from '../../../../../common/constants/atexo.constant';

@Injectable()
export class AlertProvider {
    http:Http;
    search:URLSearchParams;

    constructor(http:Http) {
        this.http = http;
    }

    all(_parameter?:Object) {

        _parameter = (typeof _parameter !== 'undefined') ? _parameter : AtexoRestConstant.request.panel.all.parameter;

        var options = new RequestOptions({
            method: AtexoRestConstant.request.alert.all.method,
            url: Util.getInstance().Rest().setPath(AtexoRestConstant.request.alert.all.url).build(),
            search: Util.getInstance().RequestOptions().setSearchParams(_parameter)
        });
        var req = new Request(options);
        return this.http.request(req);

        // Or use Get function to get request
        // return this.http.get(this.requestUrl);
    }

}