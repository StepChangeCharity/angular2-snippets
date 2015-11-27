/// <reference path="../../../../references.ts" />

import { Component, View, NgIf, Injector, EventEmitter, Input, Output } from 'angular2/angular2';
import { vwIncome } from "../models";

@Component({
	selector: "income"
	//inputs: ["income"]	
})

@View({
	template: `
		<h3>Income</h3>
		<ul>
			<li><label>Work <input type="number" [(ng-model)]="income.work" /></label></li>
			<li><label>Benefits <input type="number" [(ng-model)]="income.benefits" /></label></li>
		</ul>				
	`,
	directives: []
})

export class IncomeComponent {
	@Input() income: vwIncome;
	// @Output() someOutput: EventEmitter = new EventEmitter();
	
	constructor() {	
		// To trigger the @Output emitter, use:
		// this.someOutput.next({ some: data });	
	}
	
}

