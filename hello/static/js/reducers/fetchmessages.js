import * as fetchmessages from '../actions/fetchmessages';

const initialState = {
	createdMessages: [],
	createdThreads: [],
	receivedMessages: [],
	receivedThreads: [],
	messages: [],
	errors: {}
}

export default (state=initialState, action) => {
	switch(action.type) {
		case fetchmessages.FETCHMESSAGES_SUCCESS:
			return {
				messages: [...action.payload.createdMessages,
					 ...action.payload.createdThreads,
					...action.payload.receivedMessages,
					...action.payload.receivedThreads
				]
			}
		case fetchmessages.FETCHMESSAGES_FAILURE:
			return {
				errors: action.payload.response || {'non_field_errors': action.payload.statusText}
			}
		default:
			return state
	}
}

export const fetchedMessages = (state) => state.messages