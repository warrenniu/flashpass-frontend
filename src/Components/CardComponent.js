import React from 'react'
import EditCardComponent from './EditCardComponent'

function CardComponent(props) {
	return (
		<div>
			<h1>Card Component</h1>
			<p>{props.cardObj.question}</p>
			<p>{props.cardObj.answer}</p>
			<EditCardComponent />
		</div>
	)
}

export default CardComponent