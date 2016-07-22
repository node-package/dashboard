import {Component, OnInit} from '@angular/core';
import {Dashboard} from '../dashboard/components/dashboard/dashboard.component';
@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  template: '<dashboard [config]="config"></dashboard>',
  directives: [Dashboard]
})
export class DashboardComponent implements OnInit {

  public config:Object = {
    cBaseUrl: '/',
    cPanel: 'mocks/panel.json',
    cAlert: 'mocks/alert.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
