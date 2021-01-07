import React from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../Redux/actions'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

class NavComponent extends React.Component {

	logOutHandler = () => {
		localStorage.removeItem("token")
		this.props.removeUser()
	}
		
	render() {
		return (
			<div>
				{this.props.user ?
					<div>
						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/home">
							Home
						</Button><br />

						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/decks/create">
							Create FlashDeck
						</Button><br />

						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/decks">
							My FlashDecks
						</Button><br />

						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/login" onClick={() => this.logOutHandler()}>
							Log Out
						</Button>
					</div>
					:
					<div>
						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/home">
							Home
						</Button><br />
						
						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/login">
							Log In
						</Button><br />
					
						<Button style={{'fontSize': '20px'}} color="primary" component={RouterLink} to="/signup">
							Sign Up
						</Button>
					</div>
				}
			</div>
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
