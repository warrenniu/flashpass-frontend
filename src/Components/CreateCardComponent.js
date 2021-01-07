import React from 'react'
import {connect} from 'react-redux'
import {postCard} from '../Redux/actions'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import CreateIcon from '@material-ui/icons/Create';

class CreateCardComponent extends React.Component {

	state = {
		question: "",
		answer: "",
		deck_id: this.props.currentDeckId,
	}

	inputChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	formSubmitHandler = (e) => {
		e.preventDefault()
		this.props.postCard(this.state)
		this.setState({question: "", answer: ""})
		
		alert("Card added to deck")
	}

	render() {
		return (
			<div>
				<h3 style={{'color': '#FFF'}}><CreateIcon color="primary" fontSize="small" />Create FlashCard</h3>
				<form style={{'marginBottom': '15px'}} onSubmit={this.formSubmitHandler}>
					<Input style={{'marginRight': '15px'}} type="text" placeholder="Question" name="question" value={this.state.question} onChange={this.inputChangeHandler} />
					<Input style={{'marginRight': '15px'}} type="text" placeholder="Answer" name="answer" value={this.state.answer} onChange={this.inputChangeHandler} />
					<Button variant="contained" color="primary" type="submit">
						Add Card
					</Button>	
				</form>
			</div>
		)
	}
}

function msp(state) {
	return {
		decks: state.decks,
	}
}

function mdp(dispatch) {
	return {
		postCard: newCardObj => dispatch(postCard(newCardObj))
	}
}

export default connect(msp, mdp)(withRouter(CreateCardComponent))