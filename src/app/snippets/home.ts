import { Component, View, NgIf, Injector } from 'angular2/angular2';

@Component({
	selector: "home"
})

@View({
	template: `
		<ol>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ol>
	`,
	directives: []
})

export class HomeComponent {
	
	constructor() {
		
	}
	
}