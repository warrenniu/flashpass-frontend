import React from 'react'
import {connect} from 'react-redux'
import {postCard} from '../Redux/actions'

class CreateCardComponent extends React.Component {

	state = {
		question: "",
		answer: "",
		deck_id: this.props.currentDeckId
	}

	inputChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	formSubmitHandler = (e) => {
		e.preventDefault()
		this.props.postCard(this.state)
		this.setState({question: "", answer: ""})
	}

	render() {
		return (
			<div>
				<h1>Create Card Component</h1>
				<form onSubmit={this.formSubmitHandler}>
					<label htmlFor="Card Question">Question: </label>
					<input type="text" placeholder="Question" name="question" value={this.state.question} onChange={this.inputChangeHandler} />
					<label htmlFor="Card Answer">Answer: </label>
					<input type="text" placeholder="Answer" name="answer" value={this.state.answer} onChange={this.inputChangeHandler} />
					<button>Add Card</button>	
				</form>
			</div>
		)
	}
}


function mdp(dispatch) {
	return {
		postCard: newCardObj => dispatch(postCard(newCardObj))
	}
}

export default connect(null, mdp)(CreateCardComponent)