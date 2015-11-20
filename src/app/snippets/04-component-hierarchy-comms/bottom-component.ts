/// <reference path="../../../references.ts" />

import {
	Component, View, NgIf, Injector, 
	EventEmitter, Input, Output
} from 'angular2/angular2';


// ************ BottomComponent **************
@Component({
	selector: "bottom",
	events: ["update"]
})
@View({
	template: `
		<div class="hac box box-bottom">
			<p class="box-label">bottom</p>
		
			age = {{bottomAge}} <button (click)="onFire()">Fire!</button>
		</div>
	`
})

export class BottomComponent {
	@Input() bottomAge: number = 0;
	@Output() monthlyOutput: EventEmitter<number> = null;
	update: EventEmitter<number> = null;
	
	constructor() {
		this.monthlyOutput = new EventEmitter<number>();
		this.update = new EventEmitter<number>();
	}
	
	onFire() {
		var monthlyVersion = this.asMonths();
		var decadeVersion = this.asDecades();
		
		this.update.next(decadeVersion);		
		this.monthlyOutput.next(monthlyVersion);
	}
	
	asMonths() {
		let monthly = (this.bottomAge * 12);
		
		return monthly;
	}
	
	asDecades() {
		let decades = (this.bottomAge / 10);
		
		return decades;
	}
		
}

