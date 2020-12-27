import React from 'react'
import EditCardComponent from './EditCardComponent'
import DeleteCardComponent from './DeleteCardComponent'

function CardComponent(props) {
	return (
		<div>
			<h1>Card Component</h1>
			<p>{props.cardObj.question}</p>
			<p>{props.cardObj.answer}</p>
			<DeleteCardComponent currentCard={props.cardObj} />
			<EditCardComponent />
		</div>
	)
}

export default CardComponent