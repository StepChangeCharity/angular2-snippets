import { Component, View, NgFor } from 'angular2/angular2';
import { UserRenderer } from './user-renderer';
import { UserContains } from './user-contains';
import { UserSearch } from './user-search';

export class UserModel{

    public static ACTIVE: string = "active";
    public static DELETED: string = "deleted";

    status: string = UserModel.ACTIVE;

    constructor(
        public id: number = null,
        public name: string = "",
        public address: string = ""
    ){}

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
    selector: "simple-search-pipe"
})

@View({
    pipes:[UserContains],
    template: `
		<h2>Simple search pipe</h2>
		<p>
            Demonstrates how to code a pipe that will filter a list similar to that in snippet 06 'Dynamic styling'.
		</p>

		<h3>Issues</h3>
		<p>

		</p>

		<h3>Snippet</h3>
		<hr/>
        <div>
            <user-search #user-search></user-search>
        </div>
        <div>
            <!-- The array of users to render using the 'user-renderer' component is now filtered by the term typed into
                    the 'user-search' component.
                 The UserContains class returns a subset of the entire userService.users array. It is assigned two
                 parameters - the 'username' property of the individual users and the searchTerm taken from the
                 user-search component above (hash [#user-search] notation allows entire user-search object to be
                 used elsewhere in template). -->
            <user-renderer *ng-for="#user of users | userContains: 'name':userSearch.searchTerm"
                [user]="user"></user-renderer>
        </div>

	`,
    directives: [NgFor, UserRenderer, UserSearch]
})

// Populate the 'users' array with a couple of example users.
export class SimpleSearchPipe {

    users:UserModel[] = [
        new UserModel(1, 'Fred Flintstone', '301 Cobblestone Way, Bedrock 70777'),
        new UserModel(2, 'Wilma Flintstone', '301 Cobblestone Way, Bedrock 70777'),
        new UserModel(2, 'Pebbles Flintstone', '301 Cobblestone Way, Bedrock 70777'),
        new UserModel(3, 'Barney Rubble', '302 Cobblestone Way, Bedrock 70777'),
        new UserModel(4, 'Betty Rubble', '302 Cobblestone Way, Bedrock 70777'),
        new UserModel(4, 'Bam-Bam Rubble', '302 Cobblestone Way, Bedrock 70777')
    ];

}