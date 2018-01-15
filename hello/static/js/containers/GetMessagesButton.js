import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import GetMessagesButton from '../components/GetMessagesButton';
import {fetchmessages} from  '../actions/fetchmessages';

const GetMessages = (props) => {

	return (
		 <GetMessagesButton {...props}/>
	)
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (userid) => {
		dispatch(fetchmessages(userid))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(GetMessagesButton);