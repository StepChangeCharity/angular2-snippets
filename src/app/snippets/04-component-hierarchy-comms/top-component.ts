import { 
	Component, View, NgIf, Injector, 
	EventEmitter, Input, Output
} from 'angular2/angular2';

import { MiddleComponent } from './middle-component';

// ************ TopComponent **************

@Component({
	selector: "top"
})
@View({
	template:	`
		<div class="hac box box-top">
			<p class="box-label">top</p>

			<label>Your age: <input type="number" #newage (blur)="onBlur(newage)" /> (years) 
				
			<middle  
				(propagator)="onMonthly($event)"
				[middle-age]="topAge">
			</middle>
			<p>Your age <strong>{{ageInMonths}}</strong> (months)</p>
		</div>	
	`,
	directives: [MiddleComponent]
})

export class TopComponent {
	topAge: integer = 0;
	ageInMonths: integer = 0;
	
	onBlur(newage) {
		this.topAge = newage.value;
	}
	
	onMonthly(monthly) {
		//console.log("top", monthly);
		this.ageInMonths = monthly;
	}
	
	
}