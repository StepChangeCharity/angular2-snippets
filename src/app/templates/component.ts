/// <reference path="../../../references.ts" />

import {
	Component, View, NgIf, Injector, 
	EventEmitter, Input, Output 
} from 'angular2/angular2';

@Component({
	selector: "--component--"
})

@View({
	template: `
		<div class="left-pane">
			<h2>[Snippet Title]</h2>
			<p>
				[Description]
			</p>
			
			<h3>Issues</h3>
			<p>
				[Any issues you've had, which may need further investigation]
			</p>
			
			<h3>Resources</h3>
			<p>
				Any resources you found useful when developing this snippet (e.g. plunks, articles, etc)
			</p>
		</div>

		<div class="right-pane">				
			<h3>Snippet</h3>
			<hr/>
			
			<p>your control snippet</p>
		</div>
		<div class="clear"></div>			
		
	`,
	directives: []
})

export class SomeComponent {
	// @Input() someInput: boolean = false;
	// @Output() someOutput: EventEmitter = new EventEmitter();
	
	constructor() {	
		// To trigger the @Output emitter, use:
		// this.someOutput.next({ some: data });	
	}
	
}

