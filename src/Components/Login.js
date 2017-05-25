import React, { Component } from 'react';




import LoginBtn from './LoginBtn';
export default class Login extends Component {
	constructor(props){
		super(props);
		console.log(this.props);
		this.state = {
			redirectToReferrer: false,
		}
	}
	login(){
		this.setState({
			redirectToReferrer: true,
		})
		localStorage.setItem("isLogins", true);
	}
	render(){
		return (
			<div>若想访问/protected,请先登录<LoginBtn text = "登录" click={this.login.bind(this)}/></div>
		)
	}
}