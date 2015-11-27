/// <reference path="../../../../references.ts" />

import { Component, View, NgIf, Injector, EventEmitter, Input, Output } from 'angular2/angular2';
import { vwUser } from "../models";

@Component({
	selector: "user"
	//inputs: ["user"]
})

@View({
	template: `
		<h3>User Details {{user.firstName}} {{user.lastName}}</h3>
		<ul>
			<li><label>First Name <input type="text" [(ng-model)]="user.firstName" /></label></li>
			<li><label>Last Name <input type="text" [(ng-model)]="user.lastName" /></label></li>
		</ul>				
	`,
	directives: []
})

export class UserComponent {
	@Input() user: vwUser;
	// @Output() someOutput: EventEmitter = new EventEmitter();
	
	constructor() {	
		// To trigger the @Output emitter, use:
		// this.someOutput.next({ some: data });	
	}
	
}

