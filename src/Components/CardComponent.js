import React from 'react'
import EditCardComponent from './EditCardComponent'
import {Route, NavLink} from 'react-router-dom'
import DeleteCardComponent from './DeleteCardComponent'

class CardComponent extends React.Component {

	state = {
		clicked: false
	}

	clickHandler = () => {
		this.setState({clicked: !this.state.clicked})
	}

	render() {
		return (
			<div>
				<h1>Card Component</h1>
				{this.state.clicked ? <p onClick={this.clickHandler}>A: {this.props.cardObj.answer}</p> : <p onClick={this.clickHandler}>Q: {this.props.cardObj.question}</p> }
				{/* <NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${this.props.cards.lastIndexOf(this.props.cardObj)}`}>
					{this.props.lastCardId === this.props.cardObj.id ? null : <button>Next</button>}
				</NavLink> */}
				<DeleteCardComponent currentCard={this.props.cardObj} />
				<Route path="/decks/:id/cards/:id/edit" render={() => <EditCardComponent currentCard={this.props.cardObj} />} />
			</div>
		)
	}
}

export default CardComponent