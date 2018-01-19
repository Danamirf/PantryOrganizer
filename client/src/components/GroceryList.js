import React, { Component } from 'react';
import axios from 'axios';

class GroceryList extends Component {

	constructor(props) { 
		super (props); //this calls the parents method component		
		this.state = { groceries: [] };
	}

	render(){
		return <h2> GroceryList </h2>
	}

	componentDidMount() {
		
	}
}
export default GroceryList;


// 			axios.get('http://localhost:5000/api/grocerylist')
// 			.then(res => this.setState({ groceries: res.data} ))
// 			.catch(err => console.log(err));