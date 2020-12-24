import React from 'react'
import CardComponent from './CardComponent'
import CreateCardComponent from './CreateCardComponent'

function DeckComponent(props) {
	
	const arrayOfCards = () => {
		return props.deckObj.cards.map(cardEl => <CardComponent key={cardEl.id} cardObj={cardEl} />)
	}

	return (
		<div>
			<h1>Deck Component</h1>
			<p>{props.deckObj.title}</p>
			<p>{props.deckObj.subject}</p>
			<p>{props.deckObj.completed ? "Completed" : "Not Completed"}</p>
			<p>{props.deckObj.count}</p>
			<CreateCardComponent deckId={props.deckObj.id} />
			{arrayOfCards()}
		</div>
	)
}

export default DeckComponent