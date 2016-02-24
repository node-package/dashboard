import { PanelBodyListProvider } from './providers/panel-body-list.provider';
export declare class PanelBodyList {
    panelBodyObj: any;
    panelBodyListProvider: PanelBodyListProvider;
    items: Array<any>;
    private chartData;
    private chartLabels;
    private chartColors;
    private chartType;
    private chartOptions;
    private displayType;
    private displayTypes;
    constructor(panelBodyListProvider: PanelBodyListProvider);
    ngOnInit(): boolean;
    updateDisplayType(i?: number): boolean;
    chartClicked(e: any): void;
    chartHovered(e: any): void;
    panelBodyListServiceAll(url: any): void;
}
