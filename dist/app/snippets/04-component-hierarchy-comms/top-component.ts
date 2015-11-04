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
				(propagator)="onEventPropagation($event)"
				[middle-age]="topAge">
			</middle>
			<p>Your age <strong>{{ageInMonths}}</strong> (in months)</p>
			<p>Your age <strong>{{ageInDecades}}</strong> (in decades)</p>
		</div>	
	`,
	directives: [MiddleComponent]
})

export class TopComponent {
	topAge: number = 0;
	ageInMonths: number = 0;
	ageInDecades: number = 0;
	
	onBlur(newage) {
		this.topAge = newage.value;
	}
	
	onEventPropagation(data) {
		switch (data.type) {
			case "months": this.ageInMonths = data.amount; break;
			case "decades": this.ageInDecades = data.amount; break;
			default: throw new Error(`data type ${data.type} is not recognised.`);
		}
		
	}
	
	
}