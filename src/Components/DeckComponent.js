import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CardComponent from './CardComponent'
import CreateCardComponent from './CreateCardComponent'
import DeleteDeckComponent from './DeleteDeckComponent'
import ToggleCompletedComponent from './ToggleCompletedComponent'
import {connect} from 'react-redux'
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'
import SchoolIcon from '@material-ui/icons/School'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function DeckComponent(props) {
	
	const arrayOfCards = () => {
		const sortedCards = props.deckObj.cards.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
		return sortedCards.map(cardEl => <CardComponent key={cardEl.id} cardObj={cardEl} />)
	}

	return (
		<div style={{
			'border': '1px solid black',
			'borderRadius': '3%',
			'boxShadow': `5px 5px 5px 2px grey`,
			'width': '535px',
			'marginBottom': '15px',
			'padding': '15px',
			'textAlign': 'center',
			'marginLeft': 'auto',
			'marginRight': 'auto'
			}}>

			{props.deckObj.cards[0] ?
				<Button style={{ 'fontSize': '24px' }} color="primary" component={RouterLink} to={`/decks/${props.deckObj.id}/cards/${props.deckObj.cards[0].id}`} >
					<DoubleArrowIcon color="primary" fontSize="small" />{props.deckObj.title}
				</Button>
				:
				<Button style={{ 'fontSize': '24px' }} color="primary" component={RouterLink} to={`/decks/${props.deckObj.id}/cards`} >
					<DoubleArrowIcon color="primary" fontSize="small" />{props.deckObj.title}
				</Button>
			}

			<h3><SchoolIcon color="primary" fontSize="small" /> <u>Subject</u>: {props.deckObj.subject}</h3>

			{props.deckObj.completed ?
				<h3><LibraryAddCheckIcon color="primary" fontSize="small" /> <u>Status</u>: Completed</h3>
				:
				<h3><CancelPresentationIcon color="primary" fontSize="small" /> <u>Status</u>: Not Completed</h3>
			}
			
			<h3><FormatListNumberedIcon color="primary" fontSize="small" /> <u>Card Count</u>: {props.decks.find(deck => deck.id === props.deckObj.id).cards.length}</h3>
			<ToggleCompletedComponent currentDeck={props.deckObj} />
			<DeleteDeckComponent currentDeckId={props.deckObj.id} /> 
			{window.location.pathname === "/decks" ? null : <CreateCardComponent currentDeckId={props.deckObj.id} />}
			<Switch>
				<Route path="/decks/:id/cards/:id" render={routerProps => {
					const cardId = parseInt(routerProps.match.params.id)
					const foundCard = props.deckObj.cards.find(cardEl => cardEl.id === cardId)
					return foundCard ? <CardComponent cardObj={foundCard} /> : <h3>Loading...</h3>
				}} />
				<Route exact path="/decks/:id/cards" render={() => arrayOfCards()} />
			</Switch>
		</div>
	)
}

function msp(state) {
	return {
		user: state.user,
		decks: state.decks
	}
}

export default connect(msp)(DeckComponent)