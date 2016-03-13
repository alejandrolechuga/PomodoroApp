'use strict';

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Pomodoro} from './app/app.component';

bootstrap(Pomodoro, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { userClass: HashLocationStrategy })
]).catch(err => console.error(err));
