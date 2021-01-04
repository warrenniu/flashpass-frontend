import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

const NavComponent = (props) => {
    return (
        <div>
            <NavLink 
            to="/"
            >
            Home
            </NavLink>

            <NavLink 
            to="/decks/create"
            >
            {props.user ? "Create Deck" : ""}
            </NavLink>

            <NavLink 
            to="/decks"
            >
            {props.user ? "My Decks" : ""}
            </NavLink>

            <NavLink 
            to="/login"
            >
            {props.user ? "Log Out" : "Log In"}
            </NavLink>
						
            <NavLink 
            to="/signup"
            >
            {props.user ? "" : "Sign Up"}
            </NavLink>
        </div>
    )
}

function msp(state) {
    return {
        user: state.user.user
    }
}

export default connect(msp)(NavComponent)
