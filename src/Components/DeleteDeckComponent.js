import React from 'react'
import { connect } from 'react-redux'
import { deleteDeck } from '../Redux/actions'

function DeleteDeckComponent(props) {

	const clickHandler = () => {
		props.deleteDeck(props.currentDeckId)
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

export default connect(null, mdp)(DeleteDeckComponent)