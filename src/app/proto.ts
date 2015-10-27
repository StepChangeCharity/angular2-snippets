import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { HomeComponent } from 'app/snippets/home';

@Component({
    selector: 'proto'
})

@View({
	template: `
	<router-outlet></router-outlet>
	`,
	directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', redirectTo: '/Home' },
  { path: '/Home', component: HomeComponent, as: 'Home' }
])

export class MyAppComponent {

  constructor() {
		
  }

}
