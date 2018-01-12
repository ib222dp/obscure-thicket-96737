import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const CREATEMESSAGE_REQUEST = '@@createmessage/CREATEMESSAGE_REQUEST';
export const CREATEMESSAGE_SUCCESS = '@@createmessage/CREATEMESSAGE_SUCCESS';
export const CREATEMESSAGE_FAILURE = '@@createmessage/CREATEMESSAGE_FAILURE';

export const createmessage = (payload) => ({
	[RSAA]: {
		endpoint: '/api/echo/',
		method: 'POST',
		body: JSON.stringify({
			message: payload.message,
			recipient: payload.recipient,
			username: payload.username
		}),
		headers: withAuth({ 'Content-Type': 'application/json' }),
		types: [
			CREATEMESSAGE_REQUEST, CREATEMESSAGE_SUCCESS, CREATEMESSAGE_FAILURE
		]
	}
})