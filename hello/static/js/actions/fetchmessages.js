import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const FETCHMESSAGES_REQUEST = '@@fetchmessages/FETCHMESSAGES_REQUEST';
export const FETCHMESSAGES_SUCCESS = '@@fetchmessages/FETCHMESSAGES_SUCCESS';
export const FETCHMESSAGES_FAILURE = '@@fetchmessages/FETCHMESSAGES_FAILURE';

export const fetchmessages = (userid) => ({
	[RSAA]: {
		endpoint: '/api/message/get/' + userid,
		method: 'GET',
		headers: withAuth({ 'Content-Type': 'application/json' }),
		types: [
			FETCHMESSAGES_REQUEST, FETCHMESSAGES_SUCCESS, FETCHMESSAGES_FAILURE
		]
	}
})