import React from 'react'
import {connect} from 'react-redux'
import {postLogin} from '../Redux/actions'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class LogInComponent extends React.Component {
	state = {
		email: "",
		password: ""
	}

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submitHandler = (e) => {
		e.preventDefault()
		this.props.postLogin(this.state)
		this.props.history.push(`/decks`)
	}

	render () {
		return (
			<>
				<h3>Log In</h3>
				<form onSubmit={this.submitHandler}>
					<Input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
					<Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
					<Button variant="contained" color="primary" type="submit">
						Log In
					</Button>
				</form>
			</>
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
		postLogin: userInfo => dispatch(postLogin(userInfo)),
	}
}

export default connect(msp, mdp)(withRouter(LogInComponent))