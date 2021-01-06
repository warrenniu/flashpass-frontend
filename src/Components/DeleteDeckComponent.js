import React from 'react'
import { connect } from 'react-redux'
import { deleteDeck } from '../Redux/actions'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function DeleteDeckComponent(props) {

	const clickHandler = () => {
		props.deleteDeck(props.currentDeckId)
		props.history.push('/decks')
	}

	return (
		<Button variant="contained" color="primary" onClick={() => clickHandler()}>
			Delete Deck
		</Button>
	)
}

function mdp(dispatch) {
	return {
		deleteDeck: deckObjId => dispatch(deleteDeck(deckObjId))
	}
}

export default connect(null, mdp)(withRouter(DeleteDeckComponent))