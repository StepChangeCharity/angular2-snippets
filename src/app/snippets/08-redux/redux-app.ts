/// <reference path="../../../references.ts" />

import { Component, View, NgIf, Injector, EventEmitter, Input, Output } from 'angular2/angular2';
import { vwSession, vwDebt, vwExpenditure, vwIncome, vwUser } from "./models";
import { ExpenditureComponent } from "./components/expenditure-component";
import { IncomeComponent } from "./components/income-component";
import { UserComponent } from "./components/user-component";


@Component({
	selector: "redux-app"
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
			<h3>Redux Snippet</h3>
			<hr/>
			
			<div>
				<user [user]="session.user"></user>
				<income [income]="session.income"></income>
				<expenditure [expenses]="session.expenditure"></expenditure>
			</div>
		</div>
		<div class="clear"></div>			
		
	`,
	directives: [UserComponent, IncomeComponent, ExpenditureComponent]
})

export class ReduxApp {
	// @Input() someInput: boolean = false;
	// @Output() someOutput: EventEmitter = new EventEmitter();
	
	session: vwSession = vwSession.createDummy();
	
	// u: vwUser = new vwUser("Bob", "Smith");
	// e: vwExpenditure = new vwExpenditure();
	// i: vwIncome = new vwIncome();
	// 
	// 
	// _creditor: string = "abc123";
	// _balance: number = 1234;
	// _payment: number = 10;
	
	constructor() {	
		// To trigger the @Output emitter, use:
		// this.someOutput.next({ some: data });
		console.log("User", this.u);	
		
	}
	
}

