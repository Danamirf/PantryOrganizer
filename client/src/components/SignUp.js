import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
	constructor(props) { 
		super (props); //this calls the parents method component		
		this.state = { email: '', password: ''};
		this.redirect = false;

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmailChange(event){
		this.setState({email: event.target.value});
	}

	handlePasswordChange(event){
		this.setState({password: event.target.value});
	}

	handleSubmit(event){
		axios.post('http://localhost:5000/api/users', {
				firstName: this.state.email,
				lastName: this.state.password
		}).then(function (response) {
		    console.log(response);
		    	this.setState({redirect: true})
		 	}).catch(function (error) {
		    console.log(error);
		  });

		event.preventDefault();
	}


	render(){
	//	return <h2> Login </h2>
	if (redirect)
	{
		return <Redirect to='/login'/>
	}
	return (
		<div>
			<div class="section"></div>
			  <main>
			    <center>
			      
			      <div class="section"></div>

			      <h5 class="text" style={msgColor}>Please, login into your account</h5>
			      <div class="section"></div>

			      <div class="container">
			        <div class="z-depth-1 grey lighten-4 row" style={containerStyle}>

			          <form class="col s12" method="post" onSubmit={this.handleSubmit}>
			            <div class='row'>
			              <div class='col s12'>
			              </div>
			            </div>

			            <div class='row'>
			              <div class='input-field col s12'>
			                <input class='validate' type='email' name='email' placeholder='Enter your email here' style={msgColor} value={this.state.email} id='email' onChange={this.handleEmailChange} />
			                
			              </div>
			            </div>

			            <div class='row'>
			              <div class='input-field col s12'>
			                <input class='validate' type='password' name='password' placeholder='Enter your password here' style={msgColor} value={this.state.password} id='password' onChange={this.handlePasswordChange} />
			               
			              </div>
			   
			            </div>

			            <br />
			            <center>
			              <div class='row'>
			                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect' style={loginColor}>Login</button>
			              </div>
			            </center>
			          </form>
			        </div>
			      </div>
			    </center>

			    <div class="section"></div>
			    <div class="section"></div>
			  </main>
			</div>
		 )
	}

	onInputChange(formData)
	{
		
		//const userData = _.debounce((formData) => { this.videoSearch(term) }, 300);
	}
}


var passwordStyle = {
	'float': 'right'
};

var msgColor = {
	'color': '#00BFFF' 
};

var loginColor = {
	'background-color': '#00BFFF'
};

var containerStyle = {
	'display': 'inline-block',
	'padding': '32px 48px 0px 48px',
	'border': '1px solid #EEE'
};
//<img class="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" />

export default Login;