import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { HomeComponent } from 'app/home';
import { InputsAndOutputs } from 'app/snippets/01-input-and-output/inputs-and-outputs';
import { FormsSnippet } from 'app/snippets/02-forms/forms-snippet';
import { PipesSnippet } from 'app/snippets/03-pipes/pipes-snippet';
import { ComponentHierarchyCommsSnippet } from 'app/snippets/04-component-hierarchy-comms/component-hierarchy-comms';
import { ToDoApp } from 'app/snippets/05-todo/todo-app';
import { DynamicStylingSnippet } from 'app/snippets/06-dynamic-styling/dynamic-styling';

@Component({
    selector: 'app'
})

@View({
	template: `
	<p><a href="#/Home">/home</a></p>
	<router-outlet></router-outlet>
	`,
	directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', redirectTo: '/Home' },
  { path: '/Home', component: HomeComponent, as: 'Home' },
	{ path: '/01-input-and-output', component: InputsAndOutputs, as: "InputAndOutputSnippet"},
	{ path: '/02-forms', component: FormsSnippet, as: "FormsSnippet"},
	{ path: '/03-pipes', component: PipesSnippet, as: "PipesSnippet"},
	{ path: '/04-component-hierarchy-comms', component: ComponentHierarchyCommsSnippet, as: "PipesSnippet"},
	{ path: '/05-todo-app', component: ToDoApp, as: "ToDoApp"},
	{ path: '/06-dynamic-styling', component: DynamicStylingSnippet, as: "DynamicStylingSnippet"},
])

export class AppComponent {

  constructor() {
		
  }

}
