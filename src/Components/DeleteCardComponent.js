import React from 'react'
import { connect } from 'react-redux'
import { deleteCard } from '../Redux/actions'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'

function DeleteCardComponent(props) {

	const clickHandler = () => {
		const deckId = props.currentCard.deck_id
		const firstCardId = props.decks.find(deck => deck.id === deckId).cards[0].id
		props.deleteCard(props.currentCard)
		props.decks.find(deck => deck.id === deckId).cards[0] ? props.history.push(`/decks/${deckId}/cards/${firstCardId}`) : props.history.push(`/decks/${deckId}`)
		alert("Card deleted from deck")
	}

	return (
		<Button variant="contained" color="primary" onClick={() => clickHandler()}>
			Delete Card
		</Button>
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