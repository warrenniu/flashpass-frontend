import React from 'react'
import { connect } from 'react-redux'
import { deleteCard } from '../Redux/actions'
import {withRouter} from 'react-router-dom'

function DeleteCardComponent(props) {

	const clickHandler = () => {
		const deckId = props.currentCard.deck_id
		const firstCardId = props.decks.find(deck => deck.id === deckId).cards[0].id
		props.deleteCard(props.currentCard)
		props.history.push(`/decks/${deckId}/cards/${firstCardId}`)
		alert("Card deleted from deck")
	}

	return (
		<button onClick={() => clickHandler()}>Delete Card</button>
	)
}

function msp(state) {
	return {
		decks: state.decks,
	}
}

function mdp(dispatch) {
	return {
		deleteCard: cardObj => dispatch(deleteCard(cardObj))
	}
}

export default connect(msp, mdp)(withRouter(DeleteCardComponent))