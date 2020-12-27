import React from 'react'
import { connect } from 'react-redux'
import { deleteCard } from '../Redux/actions'

function DeleteCardComponent(props) {

	const clickHandler = () => {
		props.deleteCard(props.currentCard)
	}

	return (
		<button onClick={() => clickHandler()}>Delete Card</button>
	)
}

function mdp(dispatch) {
	return {
		deleteCard: cardObj => dispatch(deleteCard(cardObj))
	}
}

export default connect(null, mdp)(DeleteCardComponent)