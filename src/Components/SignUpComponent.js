import React from 'react'
import {connect} from 'react-redux'
import {postUser} from '../Redux/actions'

class SignUpComponent extends React.Component {
	state = {
		email: "",
		password: "",
		first_name: "",
		last_name: ""
	}

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submitHandler = (e) => {
		e.preventDefault()
		this.props.postUser(this.state)
	}

	render() {
		return (
			<>
			<h1>Sign Up Component</h1>
			<form onSubmit={this.submitHandler}>
				<input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
				<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
				<input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} />
				<input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} />
				<input type="submit" value="Sign Up" />
			</form>
			</>
		)
	}
}

function mdp(dispatch) {
	return {
		postUser: newUserObj => dispatch(postUser(newUserObj))
	}
}

export default connect(null, mdp)(SignUpComponent)