import { PanelBodySearchProvider } from './providers/panel-body-search.provider';
export declare class PanelBodySearch {
    panelBodyObj: any;
    panelBodySearchProvider: PanelBodySearchProvider;
    timeOut: any;
    milliseconds: number;
    items: Array<any>;
    q: string;
    display: boolean;
    focusClass: boolean;
    constructor(panelBodySearchProvider: PanelBodySearchProvider);
    ngOnInit(): boolean;
    quickSearch(): void;
    quickSearchClear(): boolean;
    quickSearchDisplay(display?: boolean): void;
    panelBodySearchServiceAll(): boolean;
}
