import React from 'react'
import DeckComponent from '../Components/DeckComponent'
import CreateDeckComponent from '../Components/CreateDeckComponent'
import {connect} from 'react-redux'
import {getDecks} from '../Redux/actions'

class DeckContainer extends React.Component {

	componentDidMount() {
		this.props.getDecks()
	}

	arrayOfDecks = () => {
		console.log(this.props.decks)
		const userDecksArray = this.props.decks.filter(deckEl => deckEl.user_id === this.props.currentUserId)
		console.log(userDecksArray)
		return userDecksArray.map(deckEl => <DeckComponent key={deckEl.id} deckObj={deckEl} />)
	}

	render () {
		return (
			<div>
				<h1>Deck Container</h1>
				<CreateDeckComponent />
				{this.props.decks.length === 0 ? <p>Loading...</p> : this.arrayOfDecks()}
			</div>
		)
	}
}

function msp(state) {
	return {
		decks: state.decks,
		currentUserId: state.currentUserId
	}
}

function mdp(dispatch) {
	return {
		getDecks: () => dispatch(getDecks())
	}
}


export default connect(msp, mdp)(DeckContainer)