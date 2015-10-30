import { 
	Component, View, NgIf, Injector, 
	EventEmitter, Input, Output
} from 'angular2/angular2';

import { BottomComponent } from './bottom-component';

// ************ MiddleComponent **************
@Component({
	selector: "middle"
})
@View({
	template: `
		<div class="hac box box-middle" style="position: relative">
			<p class="box-label">middle</p>
			
			<bottom
				[bottom-age]="middleAge"
				(monthly-output)="onMonthly($event)"
				(update)="onDecade($event)"
				></bottom>
		</div>
	`,
	directives: [BottomComponent]
})

export class MiddleComponent {
	@Input() middleAge: integer = 0;
	@Output() propagator: EventEmitter = null;

	constructor() {
		this.propagator = new EventEmitter();		
	}
	
	onMonthly(monthly) {
		this.propagator.next( {type: "months", amount: monthly });
	}
	
	onDecade(decades) {
		this.propagator.next( {type: "decades", amount: decades} );
	}
	
}

