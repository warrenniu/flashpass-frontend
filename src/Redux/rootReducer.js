import {combineReducers} from 'redux'

const defaultState = {
	user: null
	// user: {
	// 	"email": "rtetelbaum@mailbox.org",
	// 	"first_name": "Roman",
	// 	"last_name": "Tetelbaum",
	// 	"decks": [
	// 	{
	// 	"id": 1,
	// 	"title": "Roman's Rails Review",
	// 	"subject": "Coding Interview",
	// 	"completed": false,
	// 	"user_id": 1,
	// 	"cards": [
	// 		{
	// 		"id": 1,
	// 		"question": "What is the table that joins two models in a has-many to has-many relationship?",
	// 		"answer": "Join table",
	// 		"deck_id": 1,
	// 		"created_at": "2021-01-02T20:25:19.408Z",
	// 		"updated_at": "2021-01-02T20:25:19.408Z"
	// 		},
	// 		{
	// 		"id": 2,
	// 		"question": "Explain how we can define Ruby regular expressions?",
	// 		"answer": "A Ruby regular expression is a special sequence of characters that helps you match or find other strings.",
	// 		"deck_id": 1,
	// 		"created_at": "2021-01-02T20:25:19.423Z",
	// 		"updated_at": "2021-01-02T20:25:19.423Z"
	// 		}]
	// 	}
	// 	]
	// 	}
}

function userReducer(prevState = defaultState, action) {
	switch (action.type) {
		case "POST_LOGIN":
			return {...prevState, user: action.payload}
		case "POST_USER":
			return prevState
		case "POST_DECK" :
			return [...prevState.user.decks, action.payload]
		case "DELETE_DECK" :
			return [...prevState.user.decks.filter(deck => deck.id !== action.payload)]
		case "PATCH_DECK_COMPLETED" :
			const deckToComplete = prevState.user.decks.find(deck => deck.id === action.payload.id)
			deckToComplete.completed = action.payload.completed
			return [...prevState]
		case "POST_CARD" :
			const deckToAddCard = prevState.user.decks.find(deck => deck.id === action.payload.deck_id)
			deckToAddCard.cards = [...deckToAddCard.cards, action.payload]
			return [...prevState]
		case "DELETE_CARD" :
			const deckToDeleteCard = prevState.user.decks.find(deck => deck.id === action.payload.deck_id)
			deckToDeleteCard.cards = [...deckToDeleteCard.cards.filter(card => card.id !== action.payload.id)]
			return [...prevState]
		case "PATCH_CARD" :
			const deckToPatchCard = prevState.user.decks.find(deck => deck.id === action.payload.deck_id)
			deckToPatchCard.cards = [...deckToPatchCard.cards.filter(card => card.id !== action.payload.id)]
			deckToPatchCard.cards = [...deckToPatchCard.cards, action.payload]
			return [...prevState]
		default: 
			return prevState 
	}
}

// function decksReducer(prevState = defaultState.user.decks, action) {
// 	switch (action.type) {
// 		case "GET_DECKS" :
// 			return action.payload
// 		case "POST_DECK" :
// 			return [...prevState, action.payload]
// 		case "DELETE_DECK" :
// 			return [...prevState.filter(deck => deck.id !== action.payload)]
// 		case "PATCH_DECK_COMPLETED" :
// 			const deckToComplete = prevState.find(deck => deck.id === action.payload.id)
// 			deckToComplete.completed = action.payload.completed
// 			return [...prevState]
// 		case "POST_CARD" :
// 			const deckToAddCard = prevState.find(deck => deck.id === action.payload.deck_id)
// 			deckToAddCard.cards = [...deckToAddCard.cards, action.payload]
// 			return [...prevState]
// 		case "DELETE_CARD" :
// 			const deckToDeleteCard = prevState.find(deck => deck.id === action.payload.deck_id)
// 			deckToDeleteCard.cards = [...deckToDeleteCard.cards.filter(card => card.id !== action.payload.id)]
// 			return [...prevState]
// 		case "PATCH_CARD" :
// 			const deckToPatchCard = prevState.find(deck => deck.id === action.payload.deck_id)
// 			deckToPatchCard.cards = [...deckToPatchCard.cards.filter(card => card.id !== action.payload.id)]
// 			deckToPatchCard.cards = [...deckToPatchCard.cards, action.payload]
// 			return [...prevState]
// 		default :
// 			return prevState
// 	}
// }

const rootReducer = combineReducers({
	user: userReducer
})

export default rootReducer