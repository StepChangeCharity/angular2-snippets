import { Component, View, NgIf, Injector } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';

@Component({
	selector: "home"
})

@View({
	template: `
		<ol>
		
			<li><a [router-link]="['/InAndOut']">Component inputs &amp; outputs</a></li>
			<li><a [router-link]="['/Forms']">Forms</a></li>
			<li><a [router-link]="['/Pipes']">Pipes</a></li>
			<li><a [router-link]="['/CompHierarchy']">Component hierarchy</a></li>
			<li><a [router-link]="['/ToDoApp']">ToDo application</a></li>
			<li><a [router-link]="['/DynamicStyling']">Dynamic styling</a></li>
			<li><a [router-link]="['/SimpleSearch']">Simple search pipe</a></li>
			<li><a [router-link]="['/ReduxApp']">Redux App</a></li>
			
		</ol>
	`,
	directives: [RouterLink]
})

export class HomeComponent {
	
	constructor() {
		
	}
	
}
