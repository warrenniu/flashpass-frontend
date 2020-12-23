import React from 'react'
import CardComponent from './CardComponent'
import CreateCardComponent from './CreateCardComponent'

function DeckComponent() {
	return (
		<div>
			<h1>Deck Component</h1>
			<CreateCardComponent />
			<CardComponent />
		</div>
	)
}

export default DeckComponent