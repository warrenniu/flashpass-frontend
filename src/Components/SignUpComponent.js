import React from 'react'
import {connect} from 'react-redux'
import {postUser} from '../Redux/actions'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

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
		this.props.history.push('/login')
	}

	render() {
		return (
			<>
			<h3>Sign Up</h3>
			<form onSubmit={this.submitHandler}>
				<Input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
				<Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
				<Input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} />
				<Input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} />
				<Button variant="contained" color="primary" type="submit">
					Sign Up
				</Button>
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

export default connect(null, mdp)(withRouter(SignUpComponent))