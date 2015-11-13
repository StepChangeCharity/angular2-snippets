import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig, RouterLink } from 'angular2/router';
import { HomeComponent } from './home';
import { InputsAndOutputs } from './snippets/01-input-and-output/inputs-and-outputs';
import { FormsSnippet } from './snippets/02-forms/forms-snippet';
import { PipesSnippet } from './snippets/03-pipes/pipes-snippet';
import { ComponentHierarchyCommsSnippet } from './snippets/04-component-hierarchy-comms/component-hierarchy-comms';
import { ToDoApp } from './snippets/05-todo/todo-app';
import { DynamicStylingSnippet } from './snippets/06-dynamic-styling/dynamic-styling';
import { SimpleSearchPipe } from './snippets/07-simple-search-pipe/search-pipe';

@Component({
    selector: 'app'
})

@View({
	template: `
	<p style="margin:0;padding:0;"><a [router-link]="['/Home']">/home</a></p>
	<router-outlet></router-outlet>
	`,
	directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/', redirectTo: '/home' },
	{ path: '/home',                         as: 'Home',           component: HomeComponent },
	{ path: '/01-in-out',                    as: "InAndOut",       component: InputsAndOutputs },
	{ path: '/02-forms',                     as: "Forms",          component: FormsSnippet },
	{ path: '/03-pipes',                     as: "Pipes",          component: PipesSnippet },
	{ path: '/04-component-hierarchy',       as: "CompHierarchy",  component: ComponentHierarchyCommsSnippet },
	{ path: '/05-todo-app',                  as: "ToDoApp",        component: ToDoApp },
	{ path: '/06-dynamic-styling',           as: "DynamicStyling", component: DynamicStylingSnippet },
	{ path: '/07-simple-search-pipe',        as: "SimpleSearch",   component: SimpleSearchPipe }
])

export class AppComponent {

  constructor() {
  }

}
