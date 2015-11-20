import { bootstrap, bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS, HTTP_PROVIDERS, Http } from 'angular2/http';
import { IStore } from "./app/snippets/05-todo/services/store/_istore";
import { LocalStorageStore } from "./app/snippets/05-todo/services/store/localstorage-store";
import { ApiStorageStore } from "./app/snippets/05-todo/services/store/apistorage-store";
import { CommsService } from "./app/snippets/05-todo/services/comms-service"; 
import { AppComponent } from './app/app';

bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent),
    HTTP_BINDINGS,
		HTTP_PROVIDERS,
		Http,
    bind(LocationStrategy).toClass(HashLocationStrategy), 
		CommsService,
		
		// ToDo app Dependency Injection illustration
		// For API implementation, use "bind(LocalStorageStore).toClass(ApiStorageStore)"
		// For Local storage implementation, use "LocalStorageStore"
		LocalStorageStore
		 
]).catch(err => console.error(err));

