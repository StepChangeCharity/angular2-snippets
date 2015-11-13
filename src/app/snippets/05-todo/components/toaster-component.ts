/// <reference path="../../../../references.ts" />

import { Component, View, Injector } from "angular2/angular2";

export class Toaster {
	constructor(type: string, msg: string) {
		this.type = type;
		this.message = msg;
	}
	
	// "success" | "warning" | "error"
	type: string;
	
	message: string;	
}

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
		
		<div [hidden]="toast.message.length === 0" class="toaster-container toaster-type-{{toast.type}}">
			<p class="toaster-message">
				{{toast.message}}
			</p>
		</div>
	`,
	directives: []
})

export class ToasterComponent {
	toast: Toaster = null;
	
	constructor() {
		//this.toast = new Toaster("success", "Hello there!");
		this.toast = new Toaster("", "");
	}
}

