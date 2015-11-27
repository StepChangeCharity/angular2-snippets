/// <reference path="../../../../references.ts" />

import { Component, View, NgIf, Injector, EventEmitter, Input, Output } from 'angular2/angular2';

@Component({
	selector: "debt",
	inputs: ["creditor", "balance", "payment"]
})

@View({
	template: `
		<h3>Debts</h3>
		<ul>
			<li><label>Creditor <input type="text"   /></label></li>
			<li><label>Balance  <input type="number" /></label></li>
			<li><label>Payment  <input type="number" /></label></li>
		</ul>			
	`,
	directives: []
})

export class DebtComponent {
	// @Input() someInput: boolean = false;
	// @Output() someOutput: EventEmitter = new EventEmitter();
	
	constructor() {	
		// To trigger the @Output emitter, use:
		// this.someOutput.next({ some: data });	
	}
	
}

