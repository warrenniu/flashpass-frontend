import React from 'react'
import {connect} from 'react-redux'
import {patchCard} from '../Redux/actions'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

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
		alert("Card has been edited")
		this.props.history.push(`/decks/${this.state.deck_id}/cards/${this.state.id}`)
	}

	render() {
		return (
			<div>
				<h3>Edit FlashCard</h3>
				<form onSubmit={this.formSubmitHandler}>
					<Input type="text" placeholder={this.state.question} name="question" value={this.state.question} onChange={this.inputChangeHandler} />
					<Input type="text" placeholder={this.state.answer} name="answer" value={this.state.answer} onChange={this.inputChangeHandler} />
					<Button variant="contained" color="primary" type="submit">
						Edit Card
					</Button>
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

export default connect(null, mdp)(withRouter(EditCardComponent))