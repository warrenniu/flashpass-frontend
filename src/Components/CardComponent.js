import React from 'react'
import EditCardComponent from './EditCardComponent'
import DeleteCardComponent from './DeleteCardComponent'

function CardComponent(props) {
	return (
		<div>
			<h1>Card Component</h1>
			<p>Q: {props.cardObj.question}</p>
			<p>A: {props.cardObj.answer}</p>
			<DeleteCardComponent currentCard={props.cardObj} />
			<EditCardComponent currentCard={props.cardObj} />
		</div>
	)
}

export default CardComponent