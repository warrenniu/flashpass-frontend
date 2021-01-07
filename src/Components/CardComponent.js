import React from 'react'
import EditCardComponent from './EditCardComponent'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import DeleteCardComponent from './DeleteCardComponent'
import Button from '@material-ui/core/Button'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { Link as RouterLink } from 'react-router-dom'


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
			<div style={{
				'textAlign': 'center'
				}}>
				<Flippy
					flipOnHover={false}
					flipOnClick={true}
					flipDirection="horizontal"
					ref={(r) => this.flippy = r}
					style={{
						width: '500px', 
						height: '300px',
						marginBottom: '15px'
					}}
				>
					<FrontSide style={{
							'backgroundColor': 'rgba(211,211,211, .5)',
							'border': "2px solid white",
							'borderRadius': '3%',
							'boxShadow': `5px 5px 5px 2px lightgrey`,
							'color': 'white',
							'fontSize': '24px',
							'textAlign': 'center'
						}}>
						<h3>QUESTION</h3>
						{this.props.cardObj.question}
					</FrontSide>
					<BackSide style={{
							'backgroundColor': 'rgba(211,211,211, .5)',
							'border': "2px solid white",
							'boxShadow': `5px 5px 5px 2px lightgrey`,
							'borderRadius': '3%',
							'color': 'white',
							'fontSize': '24px',
							'textAlign': 'center'
						}}>
						<h3>ANSWER</h3>
						{this.props.cardObj.answer}
					</BackSide>
				</Flippy>
				
				
				{sortedCards.lastIndexOf(this.props.cardObj) > 0 ?
				<Button style={{'marginRight': '10px'}} variant="contained" color="primary" component={RouterLink} to={`/decks/${this.props.cardObj.deck_id}/cards/${previousCardId}`}>
						Previous
				</Button>
					:
					null
				}

				{sortedCards.lastIndexOf(this.props.cardObj) + 1 < sortedCards.length ?
				<Button style={{'marginRight': '10px'}} variant="contained" color="primary" component={RouterLink} to={`/decks/${this.props.cardObj.deck_id}/cards/${nextCardId}`}>
						Next
				</Button>
					:
					null
				}

				<DeleteCardComponent currentCard={this.props.cardObj} />
				
				<Button variant="contained" color="primary" component={RouterLink} to={`/decks/${this.props.cardObj.deck_id}/cards/${this.props.cardObj.id}/edit`}>
						Edit Card
				</Button>

				<Route path="/decks/:id/cards/:id/edit" render={() => <EditCardComponent currentCard={this.props.cardObj} />} />
			</div>
		)
	}
}

const msp = state => {
	return { decks: state.decks }
}

export default connect(msp)(CardComponent)