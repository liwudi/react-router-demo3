import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


import AuthButton from './AuthButton';
import Public from './Public';
import Private from './Private';
import Login from './Login';
export default class extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLogin: false,
		};
	}
	componentDidMount(){
		localStorage.setItem("isLogins", false);
		setInterval(()=>{
			console.log(typeof localStorage.getItem("isLogins"));
			if(localStorage.getItem("isLogins") == 'false'){
				this.setState({
					isLogin: false,
				})
			}
			if(localStorage.getItem("isLogins") == 'true'){
				this.setState({
					isLogin: true,
				})
			}
		},100)
	}

	render() {
		return(
			<Router>
				<div>
					<AuthButton isLogin={this.state.isLogin} />
					<ul>
						<li><Link to="/public">公开界面</Link></li>
						<li><Link to="/private">非公开界面</Link></li>
					</ul>
					<Route path="/public" component={Public}/>
					
					<Route path="/login" component={Login} />
					<Route path="/private" render={()=>(
						this.state.isLogin?(
							<Private />
						):(
							<Redirect to="/login" />
						)
					)}/>
				</div>
			</Router>
		)
	}
}