'use strict';

import {Component, View, Input} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'pomodoro',
  template: '<span>{{ title }}</span>'
})
@RouteConfig([
  { path: '/', component: Pomodoro, name: 'Pomodoro'}
])
export class Pomodoro {
  constructor() {
    this.title = "Pomodoro";
  }
}
