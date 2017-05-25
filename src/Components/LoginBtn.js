import React, { Component } from 'react';

export default class LoginBtn extends Component {
	constructor(props){
		super(props);
		
	}
	render(){
		return (
			<button onClick = {
				this.props.click	
			}>{this.props.text}</button>
		)
	}
}