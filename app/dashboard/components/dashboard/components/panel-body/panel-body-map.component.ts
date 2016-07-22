import {Component, Directive, View, ElementRef, Input, Attribute} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';
import {isPresent, isBlank } from 'angular2/src/facade/lang';


import {AtexoColorChartConstant, AtexoChartConstant} from '../../../../common/constants/atexo.constant';
import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';
import {Util, Convert} from '../../../../common/services/atexo.service';

import {AtexoSpinner} from '../../../../common/components/atexo-spinner.component';

//PanelBodyEditorProvider

declare var d3:any;

@Component({
    selector: 'panel-body-map',
    providers: []
    //inputs: ['panelObj']
})

@View({
    template: `
            <div class="clearfix sub-header">
                <atexo-spinner *ngIf="xhrStatusDisplaySpinner"></atexo-spinner>
                <div [ngClass]="{active: xhrStatusDisplayResources}" id="mapd3" class="mapd3"></div>
            </div>

            `,
    pipes: [ToClassPipe],
    directives: [AtexoSpinner]
})

export class PanelBodyMap {

    @Input() panelBodyObj;

    public xhrStatusDisplaySpinner:boolean = true;
    public xhrStatusDisplayResources:boolean = false;
    public xhrStatusDisplayError:boolean = false;

    private mapId:string = '#mapd3';
    private mapScale:number = 1;
    private mapWidth:number = 600;
    private mapHeight:number = 550;
    private centerX:number = 2.454071;
    private centerY:number = 46.279229;

    private ngOnInit() {
        return true;
    }

    private ngAfterViewInit() {

        let selectedData = 'Attribution';
        let width = this.mapWidth, height = this.mapHeight;
        let path = d3.geo.path();
        let projection = d3.geo.conicConformal()
            .center([this.centerX, this.centerY])
            .scale(3000)
            .translate([width / 2, height / 2]);

        path.projection(projection);

        var mapTag = d3.select(this.mapId);

        var svg = d3.select(this.mapId).append('svg')
            .attr('id', 'svg')
            .attr('width', '100%')
            .attr('height', height)
            .attr('class', 'Blues');

        var deps = svg.append('g')
                .attr('transform', 'translate(20, 0)');

        var div = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);

        d3.json('server/mocks/departments.json', (req, geojson) => {
            var features = deps
                .selectAll('path')
                .data(geojson.features)
                .enter()
                .append('path')
                .attr('id', function (d) {
                    return 'd' + d.properties.CODE_DEPT;
                })
                .attr('d', path);

            d3.csv('server/mocks/data.csv', (csv) => {
                var quantile = d3.scale.quantile().domain([0, d3.max(csv, (e) => {
                    return +e[selectedData];
                })]).range(d3.range(9));

                let legend = svg.append('g')
                    .attr('transform', 'translate(525, 150)')
                    .attr('id', 'legend');

                legend.selectAll('.colorbar')
                    .data(d3.range(9))
                    .enter().append('svg:rect')
                    .attr('y', function (d) {
                        return d * 20 + 'px';
                    })
                    .attr('height', '20px')
                    .attr('width', '20px')
                    .attr('x', '0px')
                    .attr('class', function (d) {
                        return 'q' + d + '-9';
                    });

                let legendScale = d3.scale.linear()
                    .domain([0, d3.max(csv, function (e) {
                        return +e[selectedData];
                    })])
                    .range([0, 9 * 20]);

                let legendAxis = d3.svg.axis()
                    .scale(legendScale)
                    .orient('right')
                    .tickSize(6)
                    .ticks(9);

                let legendLabels = svg.append('g')
                    .attr('transform', 'translate(550, 150)')
                    .attr('class', 'y axis')
                    .call(legendAxis);

                csv.forEach((e, i) => {
                    d3.select('#d' + e.CODE_DEPT)
                        .attr('class', (d) => {
                            return 'department q' + quantile(+e[selectedData]) + '-9';
                        })
                        .on('mouseover', (d) => {
                            div.transition()
                                .duration(200)
                                .style('opacity', .9);
                            div.html('<b>Région : </b>' + e.NOM_REGION + '<br>'
                                    + '<b>Département : </b>' + e.NOM_DEPT + '<br>'
                                    + '<b>' + selectedData + ' : </b>' + e[selectedData] + '<br>')
                                .style('left', (d3.event.pageX + 30) + 'px')
                                .style('top', (d3.event.pageY - 30) + 'px');
                        })
                        .on('mouseout', (d) => {
                            div.transition()
                                .duration(500)
                                .style('opacity', 0);
                            div.html('')
                                .style('left', '0px')
                                .style('top', '0px');
                        })
                        .on('click', (d) => {
                            if (d.properties.CODE_REG === '11' && this.mapScale === 1) {
                                this.mapScale = 6;
                                let wt = -250;
                                let ht = -108;
                                deps.transition().duration(500).attr('transform', 'scale(' + this.mapScale + ') translate(' + wt + ', ' + ht + ')');
                                csv.forEach((e, i) => {
                                    if (e.CODE_REG !== '11') {
                                        d3.select('#d' + e.CODE_DEPT).transition()
                                            .duration(500)
                                            .style('opacity', 0.1);
                                    }
                                });

                            } else {
                                this.mapScale = 1;
                                deps.transition().duration(500).attr('transform', 'scale(' + this.mapScale + ') translate(20, 0)');
                                csv.forEach((e, i) => {
                                    d3.select('#d' + e.CODE_DEPT).transition()
                                        .duration(500)
                                        .style('opacity', 1);
                                });

                            }
                        });
                });

                this.xhrStatusDisplayResources = true;
                this.xhrStatusDisplaySpinner = false;
            });
        });

    }

}