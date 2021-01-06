import React from 'react'
import {connect} from 'react-redux'
import {patchDeckCompleted} from '../Redux/actions'
import Button from '@material-ui/core/Button'


function ToggleCompletedComponent(props) {

	const clickHandler = () => {
		props.currentDeck.completed = !props.currentDeck.completed
		props.patchDeckCompleted(props.currentDeck)
	}

	if (props.decks.find(deck => deck.id === props.currentDeck.id).completed) {
		return (
			<Button style={{'marginRight': '5px'}}variant="contained" color="primary" onClick={() => clickHandler()}>
				Mark Incomplete
			</Button>
		)
	} else {
		return (
			<Button style={{'marginRight': '10px'}} variant="contained" color="secondary" onClick={() => clickHandler()}>
				Mark Completed
			</Button>
		)
	}
}

function msp(state) {
	return {
		user: state.user,
		decks: state.decks
	}
}

function mdp(dispatch) {
	return {
		patchDeckCompleted: currentDeck => dispatch(patchDeckCompleted(currentDeck))
	}
}

export default connect(msp, mdp)(ToggleCompletedComponent)