/// <reference path="../../../../references.ts" />

import { Component, View, NgIf, Injector, EventEmitter, Input, Output } from 'angular2/angular2';
import { vwExpenditure } from "../models";

@Component({
	selector: "expenditure"
	//inputs: ["expenses"]
})

@View({
	template: `
		<h3>Expenditure</h3>
		<ul>
			<li><label>Gas <input type="number" [(ng-model)]="expenses.gas" /></label></li>
			<li><label>Electric <input type="number" [(ng-model)]="expenses.electric" /></label></li>
			<li><label>Water <input type="number" [(ng-model)]="expenses.water" /></label></li>
		</ul>				
	`,
	directives: []
})

export class ExpenditureComponent {
	@Input() expenses: vwExpenditure;
	// @Output() someOutput: EventEmitter = new EventEmitter();
	
	constructor() {	
		// To trigger the @Output emitter, use:
		// this.someOutput.next({ some: data });	
	}
	
}

