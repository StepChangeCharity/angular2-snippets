import { Component, View, NgIf, Injector } from 'angular2/angular2';
import { ChildControlComponent } from '/app/snippets/01-input-and-output/child-control';

@Component({
	selector: 'input-and-output-snippet'
})

@View({
	template: `
		<div class="left-pane">
			<h2>Input and Output Snippet</h2>
			<p>
				Demonstrates passing data down to a child control and firing events back
				up again.
			</p>
			
			<h3>Issues</h3>
			<p>
				I've had to resort to using "events" and "inputs" decorators in this example.  I've had
				@Input and @Output working in another app, but couldn't get it working here :-(
			</p>
			<p>
				Further investigation is required.
			</p>			
		</div>
		<div class="right-pane">			
			<h3>Snippet</h3>
			<hr/>
			
			<child-control 
				[amount]='startAmount'
				(update)="onSquare($event)">
			</child-control> 
			<p [hidden]="!showAnswer" style="color:red">Square is {{squaredAmount}}
		</div>
		<div class="clear"></div>
	`,
	directives: [ChildControlComponent, NgIf]
})

export class InputsAndOutputs {
	startAmount: integer = 0;
	squaredAmount: integer = 0;
	showAnswer: boolean = false;
	
	constructor() {	
		this.startAmount = 2;
	}
	
	onSquare(sq) {
		this.squaredAmount = sq;
		
		// got an answer, so start showing
		this.showAnswer = true; 
	}
	
}



