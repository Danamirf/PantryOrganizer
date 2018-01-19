import React, { Component } from 'react';
import Login from './Login.js';
//import './../materialize-css/dist/css/materalize.min.css';

class Header extends Component {
	// renderContent() {
	// 	return 'List of recipes';
	// }

	render() {
		return(
			<nav style={navStyle}>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						Pantry Organizer
					</a>
					<ul className="right">
						<li>
							Login Here
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state){
	return { recipes: state.recipes }; 
}

var navStyle = {
	'background-color': '#00BFFF'
};


//export default connect(mapStateToProps) (Header);
export default Header;