import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { Button } from 'reactstrap';

import {echo} from './actions/echo';
import {serverMessage} from './reducers';

class App extends Component {
	componentDidMount() {
		this.props.fetchMessage('Hi!')
	}
	
	logoutHandler = () => {
        localStorage.removeItem('persist:polls')
        this.props.history.push('/login/')
		window.location.href = window.location.href
    }
	
	render() {
		return (
		  <div>
			<h2>Welcome to React</h2>
			<p>
			  {this.props.message}
			</p>
			<Button type="button" color="primary" size="lg" onClick={this.logoutHandler}>Log Out</Button>
		  </div>
		);
	}
}

export default connect(
	state => ({ message: serverMessage(state) }), { fetchMessage: echo }
)(App);