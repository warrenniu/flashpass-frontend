import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeUser} from '../Redux/actions'

class NavComponent extends React.Component {

	logOutHandler = () => {
		localStorage.removeItem("token")
		this.props.removeUser()
	}
		
	render() {
		console.log("in nav props.user:", this.props.user)
		return (
			<ul>
				<NavLink 
				to="/"
				>
				<li>Home</li>
				</NavLink>

				<NavLink 
				to="/decks/create"
				>
				{this.props.user ? <li>Create Deck</li> : ""}
				</NavLink>

				<NavLink 
				to="/decks"
				>
				{this.props.user ? <li>My Decks</li> : ""}
				</NavLink>

				<NavLink 
				to="/login"
				>
				{this.props.user ? <li onClick={() => this.logOutHandler()}>Log Out</li> : <li>Log In</li>}
				</NavLink>
				
				<NavLink 
				to="/signup"
				>
				{this.props.user ? "" : <li>Sign Up</li>}
				</NavLink>
			</ul>
		)
	}
}

function msp(state) {
    return {
        user: state.user
    }
}

function mdp(dispatch) {
	return {
		removeUser: () => dispatch(removeUser())
	}
}

export default connect(msp, mdp)(NavComponent)
