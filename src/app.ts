import { bootstrap, bind } from 'angular2/angular2';
import { ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS } from 'angular2/http';
import { IStore, MemoryStore, LocalStorageStore } from "./app/snippets/05-todo/services/store/store"; 
import { AppComponent } from './app/app';

bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent),
    HTTP_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
		// , MemoryStore
		, bind(MemoryStore).toClass(LocalStorageStore)
]).catch(err => console.error(err));

