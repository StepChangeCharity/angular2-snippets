import { 
	Component, View, NgIf, Injector, 
	EventEmitter, Input, Output
} from 'angular2/angular2';

import { TopComponent } from './top-component';


// ************ ComponentHierarchyCommsSnippet **************

@Component({
	selector: "component-hierarchy-comms",
})

@View({
	template: `
		<h2>Component Hierarchy Communications Snippet</h2>
		<p>
			The purpose of this snippet is to illustrate how communication between
			a root and n-level children can/should/does work.
		</p>
		
		
		<h3>Issues</h3>
		<ol>
			<li>Classes have to be declared <strong>before</strong> their usage 
			(<small>so children are declare above the parent - which makes sense, but may catch you out</small>)
			</li>
		</ol>
		
		<h3>Resources</h3>
		<p>
			Any resources you found useful when developing this snippet (e.g. plunks, articles, etc)
		</p>
		
		<h3>Snippet</h3>
		<hr/>
		
		<top></top>
	`,
	directives: [TopComponent]
})

export class ComponentHierarchyCommsSnippet {
	
	constructor() {	
	}
	
}

