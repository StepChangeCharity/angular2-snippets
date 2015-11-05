/// <reference path="../../../references.ts" />

import {Component, View, FORM_DIRECTIVES, NgIf} from "angular2/angular2";

@Component({
    selector: 'user-search'
})

@View({
    directives: [FORM_DIRECTIVES, NgIf],
    styles:[`
		.userlist-search {
			width: 50%;
			max-width: 800px;
			min-width: 480px;
			margin: 0 auto;
			padding: 10px;
			font-family: Tahoma, Geneva, sans-serif;
			font-size: 14px;
			color: #00427D;
			border: 2px solid #0074D9;
			border-radius: 12px;
			background-color: white;
		}
		.userlist-search input[type=text]
		{
			background-color: white;
			border: solid 2px #0074D9;
			border-radius: 6px;
			color:#00427D;
			height: 25px;
			padding-left:10px;
			width: 200px;
		}
	`],
    // The input field will set the searchTerm property on the class, which is used in the search-pipe component to filter the
    //  list of displayed users.
    template:
        `
		<div class="userlist-search">
			<p><label>Search user:</label>&nbsp;&nbsp;<input type="text" [(ng-model)]='searchTerm'></p>
		</div>
	`
})

export class UserSearch {
    searchTerm:string = "";
}