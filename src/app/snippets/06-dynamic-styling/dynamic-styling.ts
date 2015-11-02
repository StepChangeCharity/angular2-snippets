import { Component, View, NgFor } from 'angular2/angular2';
import { UserRenderer } from './user-renderer';

// Defines the model for a user, each displayed as a separate panel by the user-renderer component
export class UserModel{

    // Define string constants for active and deleted
    public static ACTIVE: string = "active";
    public static DELETED: string = "deleted";

    // Define a 'status' property which will control how the user-renderer component displays the user panel.
    status: string = UserModel.ACTIVE;

    constructor(
        public id: number = null,
        public name: string = "",
        public address: string = ""
    ){}

    // On calling the below two methods, the user's 'status' property will be set to that of the above string constants.
    setStatusDeleted():void {
        this.status = UserModel.DELETED;
        console.log(this.name + ", " + this.address + " : status changed to " + this.status)
    }

    setStatusActive():void {
        this.status = UserModel.ACTIVE;
        console.log(this.name + ", " + this.address + " : status changd to " + this.status)
    }
}

@Component({
    selector: "dynamic-styling-snippet"
})

@View({
    template: `
		<h2>Dynamic styling snippet</h2>
		<p>
			Demonstrates how to modify styling based on model properties.

			The 'Active'/'Deactivate' buttons on each user panel set the 'status' property on each user to 'active' and
			'deleted' respectively.<br>
			The status property defines which style is used for the panel using the [ng-class] directive, which changes
			dynamically.<br>
			The 'Activate' and 'Deactivate' buttons are rendered when the status is 'deleted' and 'active' respectively
			making use of the [Ng-If] directive.<br>
			Changes to the user properties done via the interface are logged in the console.
		</p>

		<h3>Issues</h3>
		<p>
			Rather than specifying the string literal of the user's 'status' property when defining styles on the
			'user-renderer' component, we should be able to use the notation '.&dollar;{UserModel.ACTIVE}' to reference
			the static string property directly.<br>
			I can't seem to get this working properly in this project - see the angular-login-filtering-demo on GitHub
			to see it working as intended.
		</p>

		<h3>Snippet</h3>
		<hr/>

        <!-- Use [*ng-for] to loop through an array of items.
        <!-- The [#user] notation allows the 'user' object to be accessed again within the template. -->
        <user-renderer *ng-for="#user of users" [user]="user"></user-renderer>

	`,
    directives: [NgFor, UserRenderer]
})

// Populate the 'users' array with a couple of example users.
export class DynamicStylingSnippet {

    users:UserModel[] = [
        new UserModel(1, 'Fred Flintstone', '301 Cobblestone Way, Bedrock 70777'),
        new UserModel(2, 'Barney Rubble', '301 Cobblestone Way, Bedrock 70777')
    ];

}