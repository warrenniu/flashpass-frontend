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

	deck = this.props.decks.filter(deck => deck.id === this.props.cardObj.deck_id)

	cards = this.deck[0].cards

	render() {
		console.log(this.cards.lastIndexOf(this.props.cardObj))
		let nextCardId = this.cards[this.cards.lastIndexOf(this.props.cardObj) + 1] ? this.cards[this.cards.lastIndexOf(this.props.cardObj) + 1].id : null
		let previousCardId = this.cards[this.cards.lastIndexOf(this.props.cardObj) - 1] ? this.cards[this.cards.lastIndexOf(this.props.cardObj) - 1].id : null
		return (
			<div>
				<h1>Card Component</h1>
				{this.state.clicked ? <p onClick={this.clickHandler}>A: {this.props.cardObj.answer}</p> : <p onClick={this.clickHandler}>Q: {this.props.cardObj.question}</p> }
				
				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${previousCardId}`}>
					{this.cards.lastIndexOf(this.props.cardObj) > 0 ? <button>Previous</button> : null}
				</NavLink>

				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${nextCardId}`}>
					{this.cards.lastIndexOf(this.props.cardObj) + 1 < this.cards.length ? <button>Next</button> : null}
				</NavLink>

				<DeleteCardComponent currentCard={this.props.cardObj} />
				<Route path="/decks/:id/cards/:id/edit" render={() => <EditCardComponent currentCard={this.props.cardObj} />} />
			</div>
		)
	}
}

const msp = state => {
	return { decks: state.decks }
}

export default connect(msp)(CardComponent)