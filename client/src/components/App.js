import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login.js';
import Pantry from './Pantry.js';
import GroceryList from './GroceryList.js';
import Recipes from './Recipes.js';
// import {connect } from 'react-redux';
// import * as actions from '../actions';

import Header from './Header';
const Landing = () => <h2> Landing </h2>

class App extends Component {
	componentDidMount() { //use this for any initial ajax request
		//this.props.fetchUser(); //name is fetchUser func
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact={true} path="/" component= {Landing} />
						<Route path="/login" component= {Login} /> 
						<Route path="/recipes" component= {Recipes} />
						<Route path="/pantry" component= {Pantry} />
						<Route path="/grocerylist" component= {GroceryList} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}


export default App;
