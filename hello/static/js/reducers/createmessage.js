import * as createmessage from '../actions/createmessage';

const initialState = {
	message: "",
	recipient: "",
	username: ""
}

export default (state=initialState, action) => {
	switch(action.type) {
		case createmessage.CREATEMESSAGE_SUCCESS:
			console.log(action.payload)
			return {
				message: action.payload.message
			}
		default:
			return state
	}
}

export const createdMessage = (state) => state.message