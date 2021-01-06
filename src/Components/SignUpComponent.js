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
			<div style={{
				'border': '1px solid black',
				'borderRadius': '3%',
				'boxShadow': `5px 5px 5px 2px grey`,
				'width': '250px',
				'margin': '15px',
				'padding': '15px',
				'textAlign': 'center',
				'marginLeft': 'auto',
				'marginRight': 'auto'
				}}>
			<h3 style={{'color': '#008E4F'}}>Sign Up</h3>
			<form onSubmit={this.submitHandler}>
				<Input style={{'marginBottom': '10px'}} type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} /><br />
				<Input style={{'marginBottom': '10px'}} type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} /><br />
				<Input style={{'marginBottom': '10px'}} type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} /><br />
				<Input style={{'marginBottom': '10px'}} type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} /><br />
				<Button variant="contained" color="primary" type="submit">
					Sign Up
				</Button>
			</form>
			</div>
		)
	}
}

function mdp(dispatch) {
	return {
		postUser: newUserObj => dispatch(postUser(newUserObj))
	}
}

export default connect(null, mdp)(withRouter(SignUpComponent))