import {Pipe} from "angular2/angular2";

@Pipe({
    name: 'userContains'
})

// A custom pipe extends another class with a transform() method which may be overwritten.
// You can see how the custom pipe is called in the search-pipe component.
// It returns a subset of the list of users ('value' argument) filtered by the 'field' and 'term' parameters in the second
//  argument's array.
// It has been made re-usable, so any field or term can be passed into it.
export class UserContains {
    transform(value, [field, term]) {
        console.log(field + " " + term);
        return value.filter((item)=> item[field].includes(term));
    }
}