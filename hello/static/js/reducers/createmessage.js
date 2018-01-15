import * as createmessage from '../actions/createmessage';

const initialState = {
	messageText: "",
	errors: {}
}

export default (state=initialState, action) => {
	switch(action.type) {
		case createmessage.CREATEMESSAGE_SUCCESS:
			return {
				message: action.payload.messageText
			}
		case createmessage.CREATEMESSAGE_FAILURE:
			return {
				errors: action.payload.response || {'non_field_errors': action.payload.statusText}
			}
		default:
			return state
	}
}

export const createdMessage = (state) => state.message