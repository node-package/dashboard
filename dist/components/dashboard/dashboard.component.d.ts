import { Progress } from '../../common/services/atexo.service';
import { PanelProvider } from './providers/panel.provider';
export declare class Dashboard {
    config: any;
    progress: Progress;
    panels: Object[];
    panelsZones: {
        a: any[];
        b: any[];
        c: any[];
        d: any[];
        z: any[];
    };
    panelsZonesArray: Array<any>;
    namePage: string;
    offset: number;
    limit: number;
    panelProvider: PanelProvider;
    endContent: boolean;
    startsortable: string;
    constructor(panelProvider: PanelProvider);
    ngOnInit(): boolean;
    ngAfterViewChecked(): boolean;
    private initConfig();
    panelServiceAll(): void;
}
