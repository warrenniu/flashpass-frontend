import React from 'react'
import DeckComponent from '../Components/DeckComponent'
import CreateDeckComponent from '../Components/CreateDeckComponent'

function DeckContainer() {
	return (
		<div>
			<h1>Deck Container</h1>
			<CreateDeckComponent />
			<DeckComponent />
		</div>
	)
}

export default DeckContainer