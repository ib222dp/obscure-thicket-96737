import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import Message from './containers/MessageForm';
import GetMessages from './containers/GetMessagesButton';
import {createdMessage} from './reducers';
import {threads} from './reducers';

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
						{ this.state.visible && <Message createdMessage={this.props.createdMessage}/> }
					</Col>
					<Col>
						<ListGroup>
							{this.props.threads.map((thread) =>
								<ListGroupItem key={thread.id}>
									<p><strong>Från: </strong>
										{thread.creatorId == localStorage.getItem('userid') ? 
											localStorage.getItem('username') : thread.creatorId
										}
									</p>
									<p><strong>Till: </strong>
										{thread.recipientId == localStorage.getItem('userid') ? 
											localStorage.getItem('username') : thread.recipientId
										}
									</p>
									<p><strong>Ämne: </strong>
										{thread.subject}
									</p>
									{thread.messages !== undefined && thread.messages.length > 0 && 
									<p><strong>Meddelande: </strong>
										{thread.messages[0].messageText}
									</p>}
									{thread.messages !== undefined && thread.messages.length > 0 && 
									<p><strong>Skapat: </strong>
										{thread.messages[0].creationDate}
									</p>}
								</ListGroupItem>
							)}
						</ListGroup>
					</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default connect(
state => ({ 
			threads: threads(state),
			createdMessage: createdMessage(state)
		}) )(App);