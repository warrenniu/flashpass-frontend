import React from 'react'
import DeckComponent from '../Components/DeckComponent'
import CreateDeckComponent from '../Components/CreateDeckComponent'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
// import {getDecks} from '../Redux/actions'

class DeckContainer extends React.Component {

	// componentDidMount() {
	// 	this.props.getDecks()
	// }

	arrayOfDecks = () => {
		// const userDecksArray = this.props.decks.filter(deckEl => deckEl.user_id === this.props.user.id)
		const userDecksArray = this.props.user.decks
		return userDecksArray.map(deckEl => <DeckComponent key={deckEl.id} deckObj={deckEl} />)
	}

	render () {
		console.log(this.props)
		return (
			<div>
				<Switch>
					<Route path="/decks/create" component={CreateDeckComponent} />
					<Route path="/decks/:id" render={routerProps => {
						const deckId = parseInt(routerProps.match.params.id)
						const foundDeck = this.props.user.decks.find(deckEl => deckEl.id === deckId)
						return foundDeck ? 
							(
							<>
								<DeckComponent deckObj={foundDeck} />
							</>
							)
							: 
							<h3>Loading...</h3>
					}} />
					<Route path="/decks" render={() => {
						if (this.props.user) {
							this.props.user.decks.length === 0 ? <p>Loading...</p> : this.arrayOfDecks()
						} else {
							<p>Loading...</p>
						}
						} 
					}
					 />
				</Switch>
			</div>
		)
	}
}

function msp(state) {
	return {
		// decks: state.decks,
		user: state.user.user
	}
}

// function mdp(dispatch) {
// 	return {
// 		getDecks: () => dispatch(getDecks())
// 	}
// }


export default connect(msp)(DeckContainer)