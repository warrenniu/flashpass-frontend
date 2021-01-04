import React from 'react'
import {connect} from 'react-redux'
import {patchDeckCompleted} from '../Redux/actions'

function ToggleCompletedComponent(props) {

	const clickHandler = () => {
		props.currentDeck.completed = !props.currentDeck.completed
		props.patchDeckCompleted(props.currentDeck)
	}

	return (
		<button onClick={() => clickHandler()}>{props.user.user.decks.find(deck => deck.id === props.currentDeck.id).completed ? "Mark Incomplete" : "Mark Completed"}</button>
	)
}

function msp(state) {
	return {
		user: state.user
	}
}

function mdp(dispatch) {
	return {
		patchDeckCompleted: currentDeck => dispatch(patchDeckCompleted(currentDeck))
	}
}

export default connect(msp, mdp)(ToggleCompletedComponent)