import React from 'react'
import { connect } from 'react-redux'
import { deleteDeck } from '../Redux/actions'
import { withRouter } from 'react-router-dom'

function DeleteDeckComponent(props) {

	const clickHandler = () => {
		props.deleteDeck(props.currentDeckId)
		props.history.push('/decks')
	}

	return (
		<button onClick={() => clickHandler()}>Delete Deck</button>
	)
}

function mdp(dispatch) {
	return {
		deleteDeck: deckObjId => dispatch(deleteDeck(deckObjId))
	}
}

export default connect(null, mdp)(withRouter(DeleteDeckComponent))