import React from 'react'
import EditCardComponent from './EditCardComponent'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import DeleteCardComponent from './DeleteCardComponent'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

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
				<Flippy
					flipOnHover={false}
					flipOnClick={true}
					flipDirection="horizontal"
					ref={(r) => this.flippy = r}
					style={{ width: '200px', height: '200px' }}
				>
					<FrontSide style={{backgroundColor: '#41669d'}}>
						{this.props.cardObj.question}
					</FrontSide>
					<BackSide style={{ backgroundColor: '#175852'}}>
						{this.props.cardObj.answer}
					</BackSide>
				</Flippy>
				
				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${previousCardId}`}>
					{sortedCards.lastIndexOf(this.props.cardObj) > 0 ? 
						<Button variant="contained" color="primary">
							Previous
						</Button>
						:
						null
					}
				</NavLink>

				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${nextCardId}`}>
					{sortedCards.lastIndexOf(this.props.cardObj) + 1 < sortedCards.length ? 
						<Button variant="contained" color="primary">
							Next
						</Button> 
						: 
						null
					}
				</NavLink>

				<DeleteCardComponent currentCard={this.props.cardObj} />
				
				<NavLink to={`/decks/${this.props.cardObj.deck_id}/cards/${this.props.cardObj.id}/edit`}>
					<Button variant="contained" color="primary">
						Edit Card
					</Button>
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