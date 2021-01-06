import React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom'
import CardComponent from './CardComponent'
import CreateCardComponent from './CreateCardComponent'
import DeleteDeckComponent from './DeleteDeckComponent'
import ToggleCompletedComponent from './ToggleCompletedComponent'
import {connect} from 'react-redux'
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'
import SchoolIcon from '@material-ui/icons/School'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'

function DeckComponent(props) {
	
	const arrayOfCards = () => {
		const sortedCards = props.deckObj.cards.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
		return sortedCards.map(cardEl => <CardComponent key={cardEl.id} cardObj={cardEl} />)
	}

	return (
		<div>
			{props.deckObj.cards[0] ? 
				<NavLink to={`/decks/${props.deckObj.id}/cards/${props.deckObj.cards[0].id}`}>
					<h3>{props.deckObj.title}</h3>
				</NavLink>
				:
				<NavLink to={`/decks/${props.deckObj.id}/cards`}>
					<h3>{props.deckObj.title}</h3>
				</NavLink>
			}
			<h3><SchoolIcon color="primary" fontSize="small" /> {props.deckObj.subject}</h3>
			<h3><LibraryAddCheckIcon color="primary" fontSize="small" padding-bottom="0px" />{props.deckObj.completed ? " Completed" : " Not Completed"}</h3>
			<p>Card Count: {props.decks.find(deck => deck.id === props.deckObj.id).cards.length}</p>
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