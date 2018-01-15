import React from 'react';
import { connect } from 'react-redux';

import MessageForm from '../components/MessageForm';
import {createmessage} from  '../actions/createmessage';

const Message = (props) => {

	return (
		<div className="createmessage-page">
		   <MessageForm {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (message, recipient, subject, userid) => {
		dispatch(createmessage({message: message, recipient: recipient, subject: subject, userid: userid, archived: false}))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Message);