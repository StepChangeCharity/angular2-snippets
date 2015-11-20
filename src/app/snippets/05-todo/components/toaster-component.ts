/// <reference path="../../../../references.ts" />

import { Component, View, Injector } from "angular2/angular2";
import { CommsService } from "../services/comms-service";
import { Toaster, ToasterType } from "../models/toaster";

@Component({
	selector: "toaster"
})

@View({
	template: `
		<style>
			.toaster-container {
				padding: 1em;
				width: 30%;
				border-radius: 10px;
				position: absolute;
				top: 10px; right: 10px;
				
				/* default to grey background in case we're passed a type we don't know about */
				background-color: #ddd;
			}
			.toaster-type-success { background-color: #9BE49B; }
			.toaster-type-warning { background-color: #FFD7C2; }
			.toaster-type-error   { background-color: #FFA9A9; }
			.toaster-message {
				padding: 0; margin: 0;
			}
		</style>
		
		<div [hidden]="toast.message.length === 0" class="toaster-container {{getTypeCss()}}">
			<p class="toaster-message">
				{{toast.message}}
			</p>
		</div>
	`,
	directives: []
})

export class ToasterComponent {
	static TOASTER_TIMEOUT: number = 3000;
	
	commsService: CommsService = null;
	toast: Toaster = new Toaster(ToasterType.Empty, "");
	
	constructor(comms: CommsService) {
		this.commsService = comms;

		this.commsService.toasterPipeline.subscribe( (data) => {
			// show the new toast
			this.toast = <Toaster>data;
			
			setTimeout(function() {
				// user has had time to read the message, so clear it off
				this.toast.message = "";
				
			}.bind(this), ToasterComponent.TOASTER_TIMEOUT);
		});
	}

	getTypeCss(): string {
		// The [] get the "name" assigned to the enum value
		let enumName: string = ToasterType[this.toast.type];
		return "toaster-type-" + enumName.toLowerCase();
	}	
	
}

