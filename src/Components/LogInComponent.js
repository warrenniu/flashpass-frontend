import React from 'react'
import {connect} from 'react-redux'
import {postLogin} from '../Redux/actions'
import {withRouter} from 'react-router-dom'

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
				<h1>Login Component</h1>
				<form onSubmit={this.submitHandler}>
					<input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
					<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
					<input type="submit" value="Log In" />
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
		postLogin: userInfo => dispatch(postLogin(userInfo))
	}
}

export default connect(msp, mdp)(withRouter(LogInComponent))