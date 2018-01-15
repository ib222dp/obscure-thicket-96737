import React, {Component} from 'react';
import { Alert, Button, Jumbotron,  Form } from 'reactstrap';

import TextInput from './TextInput';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
		this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
	}    
	
	state = {
		username: '',
		password: ''
	}

	handlePasswordInputChange = (event) => {
		const target = event.target;
		const value = target.type ===
			'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
		  [name]: value
		});
	}
	
	handleUsernameInputChange = (event) => {
		const target = event.target;
		const value = target.type ===
			'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
		  [name]: value
		});
		
		localStorage.setItem('username', value)
		if(value === 'Anv1') {
			localStorage.setItem('userid', '2')
		} else if(value === 'Anv2') {
			localStorage.setItem('userid', '3')
		} else if(value === 'Anv3') {
			localStorage.setItem('userid', '4')
		} else if(value === 'Anv4') {
			localStorage.setItem('userid', '5')
		} else if(value === 'Anv5') {
			localStorage.setItem('userid', '6')
		}
	}
	
	componentDidMount() {
		this.primaryInput.focus();
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.username, this.state.password);
	}
	
	render() {
		const errors = this.props.errors || {}
		
		return (
			<Jumbotron className="container">
				<Form onSubmit={this.onSubmit}>
				  <h1>Autentisering</h1>
				  {errors.non_field_errors?<Alert color="danger">{errors.non_field_errors}</Alert>:""}
				  <TextInput name="username" label="Användarnamn" error={errors.username} innerRef={(input) => (this.primaryInput = input)} onChange={this.handleUsernameInputChange}/>
				  <TextInput name="password" label="Lösenord" error={errors.password} type="password" onChange={this.handlePasswordInputChange}/>
				  <Button type="submit" color="primary" size="lg">Logga in</Button>
				</Form>
			</Jumbotron>
		)
	}
}