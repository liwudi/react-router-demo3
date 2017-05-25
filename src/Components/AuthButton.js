import React, { Component } from 'react';


import LoginBtn from './LoginBtn';
export default class AuthButton extends Component {
	constructor(props){
		super(props);
	}
	exit(){
		localStorage.setItem("isLogins", false);
		console.log(this.props);
	}
	render(){
		return (
			(this.props.isLogin)?<p>欢迎!登出<LoginBtn text="退出" click={this.exit.bind(this)}/></p>:<p>请您先登陆</p>
		)
	}
}
