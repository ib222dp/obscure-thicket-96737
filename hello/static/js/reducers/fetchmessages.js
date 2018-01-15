import * as fetchmessages from '../actions/fetchmessages';

const initialState = {
	threads: [],
	errors: {}
}

export default (state=initialState, action) => {
	switch(action.type) {
		case fetchmessages.FETCHMESSAGES_SUCCESS:
			return {
					threads: [...action.payload.createdThreads, ...action.payload.receivedThreads]
			}
		case fetchmessages.FETCHMESSAGES_FAILURE:
			return {
				errors: action.payload.response || {'non_field_errors': action.payload.statusText}
			}
		default:
			return state
	}
}

export const threads = (state) => state.threads