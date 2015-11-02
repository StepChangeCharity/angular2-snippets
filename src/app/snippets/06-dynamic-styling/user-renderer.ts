import {Component, View, Input, NgClass, NgIf} from "angular2/angular2";
import {UserModel} from "./dynamic-styling";

@Component({
    selector: 'user-renderer'
})

@View({
    directives:[NgClass, NgIf],
    // Each user object rendered by user-renderer is given a class based on its current 'status' property (see below)
    //  - 'active' or 'deleted'. This allows us to define different styles for each that are applied dynamically
    //  as the status changes.
    styles: [`
		.active .userpanel {
			width: 50%;
			max-width: 800px;
			min-width: 480px;
			margin-top: 20px;
			margin-left: auto;
			margin-right: auto;
			padding: 10px;
			font-family: Tahoma, Geneva, sans-serif;
			font-size: 14px;
			color: #0074D9;
			border: 2px solid #2496FC;
			border-radius: 12px;
			background-color: white;
			margin-bottom: 20px;
		}
		.active .userpanel .userpanel-header {
			font-size: 22px;
			color: #0074D9;
			padding-bottom: 5px;
			border-bottom: 2px solid #0074D9;
		}
		.active .userpanel .userpanel-header .userpanel-header-button {
			float: right;
		}
		.active .userpanel .userpanel-header-text, .userpanel-header-button {
			display: inline;
		}
		.active .userpanel .userpanel-header-text-id {
			font-size: 22px;
			color: #2496FC;
		}
		.active .userpanel .userpanel-header-text-name {
			font-size: 22px;
			color: #B10DC9;
		}
		.active .userpanel .userpanel-header .userpanel-header-button button{
			padding: 5px;
			background: #3498db;
			background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
			background-image: -moz-linear-gradient(top, #3498db, #2980b9);
			background-image: -ms-linear-gradient(top, #3498db, #2980b9);
			background-image: -o-linear-gradient(top, #3498db, #2980b9);
			background-image: linear-gradient(to bottom, #3498db, #2980b9);
			-webkit-border-radius: 28;
			-moz-border-radius: 28;
			border-radius: 10px;
			color: #ffffff;
			font-size: 14px;
			margin-bottom: 5px;
		}
		.active .userpanel .userpanel-header .userpanel-header-button button:hover{
			background: #3cb0fd;
			background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
			background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
		}
		.active .userpanel .userpanel-address {
			color: #CB5CDA;
			margin-top: 10px;
			margin-bottom: 10px;
		}
		.deleted .userpanel {
			width: 50%;
			max-width: 800px;
			min-width: 480px;
			margin-top: 20px;
			margin-left: auto;
			margin-right: auto;
			padding: 10px;
			font-family: Tahoma, Geneva, sans-serif;
			font-size: 14px;
			color: #0074D9;
			border: 2px solid #AAAAAA;
			border-radius: 12px;
			background-color: white;
			margin-bottom: 20px;
		}
		.deleted .userpanel .userpanel-header {
			font-size: 22px;
			color: #0074D9;
			padding-bottom: 5px;
			border-bottom: 2px solid #AAAAAA;
		}
		.deleted .userpanel .userpanel-header .userpanel-header-button {
			float: right;
		}
		.deleted .userpanel .userpanel-header-text, .userpanel-header-button {
			display: inline;
		}
		.deleted .userpanel .userpanel-header-text-id {
			font-size: 22px;
			color: #2496FC;
		}
		.deleted .userpanel .userpanel-header-text-name {
			font-size: 22px;
			color: #AAAAAA;
		}
		.deleted .userpanel .userpanel-header .userpanel-header-button button{
			padding: 5px;
			background: #3498db;
			background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
			background-image: -moz-linear-gradient(top, #3498db, #2980b9);
			background-image: -ms-linear-gradient(top, #3498db, #2980b9);
			background-image: -o-linear-gradient(top, #3498db, #2980b9);
			background-image: linear-gradient(to bottom, #3498db, #2980b9);
			-webkit-border-radius: 28;
			-moz-border-radius: 28;
			border-radius: 10px;
			color: #ffffff;
			font-size: 14px;
			margin-bottom: 5px;
		}
		.deleted .userpanel .userpanel-header .userpanel-header-button button:hover{
			background: #3cb0fd;
			background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
			background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
			background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
		}
		.deleted .userpanel .userpanel-address {
			color: #AAAAAA;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	`],
    // The ng-class directive is used here to give the panel a top-level class defined by the user's current
    //  'status' property.
    // The [*ng-if] directive is used to change which button (activate/deactivate) appears depending on the user's
    //  'status'.
    template:
        `
		<div [ng-class]="user.status">
			<div class="userpanel">
				<div class="userpanel-header">
					<div class="userpanel-header-text">
						<span class="userpanel-header-text-name">{{user.name}}</span>
					</div>
					<div class="userpanel-header-button" *ng-if="user.status=='active'">
						<button (click) = "user.setStatusDeleted()">Deactivate</button>
					</div>
					<div class="userpanel-header-button" *ng-if="user.status=='deleted'">
						<button (click) = "user.setStatusActive()">Activate</button>
					</div>
				</div>
				<div class="userpanel-address">
					password: {{user.address}}
				</div>
			</div>
		</div>
	`
})

export class UserRenderer{

    // A 'user' object is passed from the parent dynamic-styling component for rendering.
    // This needs declaring here.
    @Input() user:UserModel;
}