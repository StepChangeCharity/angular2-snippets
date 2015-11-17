import { bootstrap, bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS, HTTP_PROVIDERS, Http } from 'angular2/http';
import { IStore, LocalStorageStore, ApiStorageStore } from "./app/snippets/05-todo/services/store/store";
import { CommsService } from "./app/snippets/05-todo/services/comms-service"; 
import { AppComponent } from './app/app';

bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent),
    HTTP_BINDINGS,
		HTTP_PROVIDERS,
		Http,
    bind(LocationStrategy).toClass(HashLocationStrategy), 
		
		bind(LocalStorageStore).toClass(ApiStorageStore), 
		CommsService
]).catch(err => console.error(err));

