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
            {props.currentUserId ? "Create Deck" : ""}
            </NavLink>

            <NavLink 
            to="/decks"
            >
            {props.currentUserId ? "My Decks" : ""}
            </NavLink>

            <NavLink 
            to="/login"
            >
            {props.currentUserId ? "Log Out" : "Log In"}
            </NavLink>
						
            <NavLink 
            to="/signup"
            >
            {props.currentUserId ? "" : "Sign Up"}
            </NavLink>
        </div>
    )
}

function msp(state) {
    return {
        currentUserId: state.currentUserId
    }
}

export default connect(msp)(NavComponent)
