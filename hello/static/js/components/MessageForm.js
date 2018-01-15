import React, {Component} from 'react';
import { Alert, Button, Jumbotron,  Form, Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import TextInput from './TextInput';

export default class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.select = this.select.bind(this);
		this.state = {
			loggedInUser: localStorage.getItem('username'),
			dropdownOpen: false,
			message: '',
			recipient: 'Välj mottagare',
			subject: ''
		};
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type ===
			'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
		  [name]: value
		});
	}
	
	componentDidMount() {
		this.primaryInput.focus();
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.message, this.state.recipient, this.state.subject, localStorage.getItem('userid'));
	}
	
	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	
	select(event) {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
			recipient: event.target.getAttribute('id')
		});
	}
	
	render() {
		const errors = this.props.errors || {}
		
		return (
			<Jumbotron className="container">
				<Form onSubmit={this.onSubmit}>
					<h1>Skriv meddelande</h1>
					{errors.non_field_errors?<Alert color="danger">{errors.non_field_errors}</Alert>:""}
					<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<DropdownToggle>{this.state.recipient}</DropdownToggle>
						<DropdownMenu>
							<DropdownItem id='2' disabled={this.state.loggedInUser === 'Anv1'} onClick={this.select}>Anv1</DropdownItem>
							<DropdownItem id='3' disabled={this.state.loggedInUser === 'Anv2'} onClick={this.select}>Anv2</DropdownItem>
							<DropdownItem id='4' disabled={this.state.loggedInUser === 'Anv3'} onClick={this.select}>Anv3</DropdownItem>
							<DropdownItem id='5' disabled={this.state.loggedInUser === 'Anv4'} onClick={this.select}>Anv4</DropdownItem>
							<DropdownItem id='6' disabled={this.state.loggedInUser === 'Anv5'} onClick={this.select}>Anv5</DropdownItem>
						</DropdownMenu>
					</ButtonDropdown>
					<TextInput name="subject" label="Ämne" error={errors.message} innerRef={(input) => (this.primaryInput = input)} onChange={this.handleInputChange}/>
					<TextInput name="message" label="Meddelande" error={errors.message} type="textarea" innerRef={(input) => (this.primaryInput = input)} onChange={this.handleInputChange}/>
					<Button type="submit" color="primary" size="lg">Skicka meddelande</Button>
				</Form>
			</Jumbotron>
		)
	}
}