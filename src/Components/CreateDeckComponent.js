import React from 'react'
import { connect } from 'react-redux'
import {postDeck} from '../Redux/actions'

class CreateDeckComponent extends React.Component {

	state = {
		title: "",
		subject: "",
		completed: false,
		count: 0,
		user_id: this.props.currentUserId
	}
	
	inputChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	formSubmitHandler = (e) => {
		e.preventDefault()
		this.props.postDeck(this.state)
		this.setState({title: "", subject: ""})
	}

	render() {
		return (
			<div>
				<h1>Create Deck Component</h1>
				<form onSubmit={this.formSubmitHandler}>
					<label htmlFor="Deck Title">Deck Title: </label>
					<input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.inputChangeHandler} />
					<label htmlFor="Deck Subject">Deck Subject: </label>
					<input type="text" placeholder="subject" name="subject" value={this.state.subject}onChange={this.inputChangeHandler} />
					<button>Add Deck</button>	
				</form>
			</div>
		)
	}
}

function msp(state) {
	return {
		currentUserId: state.currentUserId
	}
}

function mdp(dispatch) {
	return {
		postDeck: newDeckObj => dispatch(postDeck(newDeckObj))
	}
}

export default connect(msp, mdp)(CreateDeckComponent)