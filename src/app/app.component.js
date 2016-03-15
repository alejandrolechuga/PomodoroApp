'use strict';

import {Component, View, Input} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavigationComponent} from './navigation/navigation.component';

@Component({
  selector: 'pomodoro',
  templateUrl: './templates/app.component.html',
  directives: [NavigationComponent]
})
@RouteConfig([
  { path: '/', component: Pomodoro, name: 'Pomodoro'}
])
export class Pomodoro {
  constructor() {
    this.title = "Pomodoro";
  }
}
