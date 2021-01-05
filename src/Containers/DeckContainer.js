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
		const userDecksArray = this.props.decks.filter(deckEl => deckEl.user_id === this.props.user.id)
		const sortedUserDecksArray = userDecksArray.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
		return sortedUserDecksArray.map(deckEl => <DeckComponent key={deckEl.id} deckObj={deckEl} />)
	}

	render () {
		console.log("in deck container props.user", this.props.user)
		return (
			<div>
				<Switch>
					<Route path="/decks/create" component={CreateDeckComponent} />
					<Route path="/decks/:id" render={routerProps => {
						const deckId = parseInt(routerProps.match.params.id)
						const foundDeck = this.props.decks.find(deckEl => deckEl.id === deckId)
						return foundDeck ? 
							(
							<>
								<DeckComponent deckObj={foundDeck} />
							</>
							)
							: 
							<h3>Loading...</h3>
					}} />
					<Route path="/decks" render={() => 
						this.props.decks.length === 0 || this.props.user === null
						?
						<p>No Decks to Load</p>
						:
						this.arrayOfDecks()}
					/>
				</Switch>
			</div>
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
		getDecks: () => dispatch(getDecks())
	}
}

export default connect(msp, mdp)(DeckContainer)