import { Component, View, NgIf, Injector } from 'angular2/angular2';

@Component({
	selector: "home"
})

@View({
	template: `
		<ol>
			<li><a href="#/01-input-and-output">Inputs &amp; Outputs</a></li>
			<li><a href="#/02-forms">Forms</a></li>			
			<li><a href="#/03-pipes">Pipes</a></li>			
		</ol>
	`,
	directives: []
})

export class HomeComponent {
	
	constructor() {
		
	}
	
}