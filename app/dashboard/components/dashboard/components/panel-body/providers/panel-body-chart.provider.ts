import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Request, RequestMethod, URLSearchParams} from 'angular2/http';
import {Util} from '../../../../../common/services/atexo.service';
import {AtexoRestConstant} from '../../../../../common/constants/atexo.constant';
import {isBlank} from 'angular2/src/facade/lang';

@Injectable()
export class PanelBodyChartProvider {
    http:Http;
    search:URLSearchParams;

    constructor(http:Http) {
        this.http = http;
    }

    get(panelBodyObj:Object) {

        let _search = (!isBlank(panelBodyObj['search'])) ? panelBodyObj['search'] : AtexoRestConstant.request.panel.all.parameter;
        let _header = (!isBlank(panelBodyObj['header'])) ? panelBodyObj['header'] : AtexoRestConstant.request.panel.all.header;

        var options = new RequestOptions({
            method: AtexoRestConstant.request.alert.all.method,
            headers: Util.getInstance().RequestHeader().setHeaderParams(_header),
            url: panelBodyObj['urlData'],
            search: Util.getInstance().RequestOptions().setSearchParams(_search)
        });

        var req = new Request(options);
        return this.http.request(req);
    }

}