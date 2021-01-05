import React from 'react'
import EditCardComponent from './EditCardComponent'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import DeleteCardComponent from './DeleteCardComponent'

class CardComponent extends React.Component {

	state = {
		clicked: false
	}

	clickHandler = () => {
		this.setState({clicked: !this.state.clicked})
	}

	render() {
		let deck = this.props.decks.filter(deck => deck.id === this.props.cardObj.deck_id)
		let cards = deck[0].cards
		let sortedCards = cards.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
		let nextCardId = sortedCards[sortedCards.lastIndexOf(this.props.cardObj) + 1] ? sortedCards[sortedCards.lastIndexOf(this.props.cardObj) + 1].id : null
		let previousCardId = sortedCards[sortedCards.lastIndexOf(this.props.cardObj) - 1] ? sortedCards[sortedCards.lastIndexOf(this.props.cardObj) - 1].id : null
		return (
			<div>
				<h1>Card Component</h1>
				{this.state.clicked ? <p onClick={this.clickHandler}>A: {this.props.cardObj.answer}</p> : <p onClick={this.clickHandler}>Q: {this.props.cardObj.question}</p> }
				
				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${previousCardId}`}>
					{sortedCards.lastIndexOf(this.props.cardObj) > 0 ? <button>Previous</button> : null}
				</NavLink>

				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${nextCardId}`}>
					{sortedCards.lastIndexOf(this.props.cardObj) + 1 < sortedCards.length ? <button>Next</button> : null}
				</NavLink>

				<DeleteCardComponent currentCard={this.props.cardObj} />
				
				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${this.props.cardObj.id}/edit`}>
					<button>Edit Card</button>
				</NavLink>

				<Route path="/decks/:id/cards/:id/edit" render={() => <EditCardComponent currentCard={this.props.cardObj} />} />
			</div>
		)
	}
}

const msp = state => {
	return { decks: state.decks }
}

export default connect(msp)(CardComponent)