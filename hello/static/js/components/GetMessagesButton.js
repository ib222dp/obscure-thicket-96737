import React, {Component} from 'react';
import { Form, Button } from 'reactstrap';

export default class GetMessagesButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(localStorage.getItem('userid'));
	}
	
	render() {
		const errors = this.props.errors || {}
		
		return (
			<Form onSubmit={this.onSubmit}>
				<Button type="submit" color="primary" size="lg">Hämta meddelanden</Button> 
			</Form>
		)
	}
}