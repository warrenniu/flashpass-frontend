import React from 'react'
import {connect} from 'react-redux'
import {patchCard} from '../Redux/actions'

class EditCardComponent extends React.Component {

	state = {
		question: this.props.currentCard.question,
		answer: this.props.currentCard.answer,
		deck_id: this.props.currentCard.deck_id,
		id: this.props.currentCard.id
	}

	inputChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	formSubmitHandler = (e) => {
		e.preventDefault()
		this.props.patchCard(this.state)
	}

	render() {
		return (
			<div>
				<h1>Edit Card Component</h1>
				<form onSubmit={this.formSubmitHandler}>
					<label htmlFor="Card Question">Question: </label>
					<input type="text" placeholder={this.state.question} name="question" value={this.state.question} onChange={this.inputChangeHandler} />
					<label htmlFor="Card Answer">Answer: </label>
					<input type="text" placeholder={this.state.answer} name="answer" value={this.state.answer} onChange={this.inputChangeHandler} />
					<button>Edit Card</button>	
				</form>
				
			</div>
		)

	}
}
function mdp(dispatch) {
	return {
		patchCard: updatedCardObj => dispatch(patchCard(updatedCardObj))
	}
}

export default connect(null, mdp)(EditCardComponent)