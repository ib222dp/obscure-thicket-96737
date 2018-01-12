import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { Button } from 'reactstrap';

import MessageForm from './containers/MessageForm';
import {createdMessage} from './reducers';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.toggleMessageForm = this.toggleMessageForm.bind(this);
	}
	
	componentDidMount() {
		
	}
	
	logoutHandler = () => {
        localStorage.removeItem('persist:polls')
        this.props.history.push('/login/')
		window.location.href = window.location.href
    }
	
	toggleMessageForm = () => {
		const { visible } = this.state;
		this.setState({
			visible: !visible,
		});
	}
	
	render() {
		return (
			<div>
				<div>
					<Button type="button" color="primary" size="lg" onClick={this.logoutHandler}>Logga ut</Button>
					<Button type="button" color="primary" size="lg" onClick={this.toggleMessageForm}>Visa/dölj meddelandeformulär</Button>
				</div>
				<div>
					{ this.state.visible && <MessageForm /> }
					<p>
						{this.props.message}
					</p>
				</div>
			</div>
		);
	}
}

export default connect(state => ({ message: createdMessage(state) }))(App);