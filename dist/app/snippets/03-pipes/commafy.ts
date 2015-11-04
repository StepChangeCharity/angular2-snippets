import { Component, View, Pipe, bootstrap, bind, PipeTransform } from 'angular2/angular2';

@Pipe({
	name: "commafy"
})

export class CommafyPipe implements PipeTransform {
	
	transform(value: number, args: string[]) : any {
		let parts = value.toString().split(".");

		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		return parts.join(".");
	}
	
}
