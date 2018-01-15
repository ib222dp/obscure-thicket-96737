import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { Button, Container, Row, Col } from 'reactstrap';

import Message from './containers/MessageForm';
import GetMessages from './containers/GetMessagesButton';
import {fetchedMessages} from './reducers';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.toggleMessageForm = this.toggleMessageForm.bind(this);
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
				<Container>
					<Row>
						<Col>
							<GetMessages />
						</Col>
						<Col>
							<Button type="button" color="primary" size="lg" className="float-left" onClick={this.toggleMessageForm}>Visa/dölj meddelandeformulär</Button>
						</Col>
						<Col>
							<Button type="button" color="primary" size="lg" className="float-right" onClick={this.logoutHandler}>Logga ut</Button>
						</Col>
					</Row>
					<Row>
					<Col>
						{ this.state.visible && <Message /> }
					</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default connect(state => ({ fetchedMessages: fetchedMessages(state) }) )(App);