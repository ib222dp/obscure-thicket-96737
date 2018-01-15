import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const CREATEMESSAGE_REQUEST = '@@createmessage/CREATEMESSAGE_REQUEST';
export const CREATEMESSAGE_SUCCESS = '@@createmessage/CREATEMESSAGE_SUCCESS';
export const CREATEMESSAGE_FAILURE = '@@createmessage/CREATEMESSAGE_FAILURE';

export const createmessage = (payload) => ({
	[RSAA]: {
		endpoint: '/api/message/post/',
		method: 'POST',
		body: JSON.stringify({
			messageText: payload.message,
			recipientId: payload.recipient,
			subject: payload.subject,
			creatorId: payload.userid,
			archived: payload.archived
		}),
		headers: withAuth({ 'Content-Type': 'application/json' }),
		types: [
			CREATEMESSAGE_REQUEST, CREATEMESSAGE_SUCCESS, CREATEMESSAGE_FAILURE
		]
	}
})