import React from 'react'
// import { deleteDeck } from '../Redux/actions'
// import { connect } from 'react-redux'
import CardComponent from './CardComponent'
import CreateCardComponent from './CreateCardComponent'
import DeleteDeckComponent from './DeleteDeckComponent'

function DeckComponent(props) {
	
	const arrayOfCards = () => {
		return props.deckObj.cards.map(cardEl => <CardComponent key={cardEl.id} cardObj={cardEl} />)
	}

	// const clickHandler = () => {
	// 	props.deleteDeck(props.deckObj.id)
	// }

	return (
		<div>
			<h1>Deck Component</h1>
			<p>{props.deckObj.title}</p>
			<p>{props.deckObj.subject}</p>
			<p>{props.deckObj.completed ? "Completed" : "Not Completed"}</p>
			<p>{props.deckObj.count}</p>
			{/* <button onClick={() => clickHandler()}>Delete Deck</button> */}
			<DeleteDeckComponent currentDeckId={props.deckObj.id} /> 
			<CreateCardComponent currentDeckId={props.deckObj.id} />
			{arrayOfCards()}
		</div>
	)
}

// function mdp(dispatch) {
// 	return {
// 		deleteDeck: deckObjId => dispatch(deleteDeck(deckObjId))
// 	}
// }

// export default connect(null, mdp)(DeckComponent)

export default DeckComponent