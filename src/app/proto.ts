import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { HomeComponent } from 'app/snippets/home';
import { InputsAndOutputs } from 'app/snippets/01-input-and-output/inputs-and-outputs';
import { FormsSnippet } from 'app/snippets/02-forms/forms-snippet';
import { PipesSnippet } from 'app/snippets/03-pipes/pipes-snippet';

@Component({
    selector: 'proto'
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
	{ path: '/02-forms', component: FormsSnippet, as: "FormsSnippet"}
	{ path: '/03-pipes', component: PipesSnippet, as: "PipesSnippet"}
])

export class MyAppComponent {

  constructor() {
		
  }

}
