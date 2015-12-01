import * as types from "./action-types";

export function editName(fName: string, lName: string) {
	return {
		type: types.EDIT_NAME,
		fName,
		lName
	}
}

