import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import { bootstrap, bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS } from 'angular2/http';
import { AppComponent } from 'app/app';

bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent),
    HTTP_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).catch(err => console.error(err));
