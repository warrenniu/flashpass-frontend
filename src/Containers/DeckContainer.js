import React from 'react'
import DeckComponent from '../Components/DeckComponent'
import CreateDeckComponent from '../Components/CreateDeckComponent'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getDecks} from '../Redux/actions'

class DeckContainer extends React.Component {

	componentDidMount() {
		this.props.getDecks()
	}

	arrayOfDecks = () => {
		const userDecksArray = this.props.decks.filter(deckEl => deckEl.user_id === this.props.currentUserId)
		return userDecksArray.map(deckEl => <DeckComponent key={deckEl.id} deckObj={deckEl} />)
	}

	render () {
		return (
			<div>
				<h1>Deck Container</h1>
				<Switch>
					<Route path="/decks/create" component={CreateDeckComponent} />
					<Route path="/decks/:id" render={routerProps => {
						const deckId = parseInt(routerProps.match.params.id)
						const foundDeck = this.props.decks.find(deckEl => deckEl.id === deckId)
						return foundDeck ? <DeckComponent deckObj={foundDeck} /> : <h3>Loading...</h3>
					}} />
					<Route path="/decks" render={() => this.props.decks.length === 0 ? <p>Loading...</p> : this.arrayOfDecks()} />
				</Switch>
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