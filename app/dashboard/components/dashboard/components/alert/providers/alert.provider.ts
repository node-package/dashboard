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

    all(_search?:Object, _header?:Object) {

        _search = (typeof _search !== 'undefined') ? _search : AtexoRestConstant.request.alert.all.parameter;
        _header = (typeof _header !== 'undefined') ? _header : AtexoRestConstant.request.alert.all.header;

        var options = new RequestOptions({
            method: AtexoRestConstant.request.alert.all.method,
            headers: Util.getInstance().RequestHeader().setHeaderParams(_header),
            url: Util.getInstance().Rest().setPath(AtexoRestConstant.request.alert.all.url).build(),
            search: Util.getInstance().RequestOptions().setSearchParams(_search)
        });
        var req = new Request(options);
        return this.http.request(req);

        // Or use Get function to get request
        // return this.http.get(this.requestUrl);
    }

}