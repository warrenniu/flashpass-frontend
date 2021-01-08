import {combineReducers} from 'redux'

const defaultState = {
	user: null,
	decks: []
}

function userReducer(prevState = defaultState.user, action) {
	switch (action.type) {
		case "GET_USER" :
			return action.payload.user
		case "REMOVE_USER":
			return null
		case "POST_LOGIN":
			if (action.payload.user) {
				return action.payload.user
			} else if (action.payload.message) {
				return action.payload.message
			} else {
				return null
			}
		case "POST_USER":
			return prevState
		default:
			return prevState 
	}
}

function decksReducer(prevState = defaultState.decks, action) {
	switch (action.type) {
		case "GET_DECKS" :
			return action.payload
		case "POST_DECK" :
			return [...prevState, action.payload]
		case "DELETE_DECK" :
			return [...prevState.filter(deck => deck.id !== action.payload)]
		case "PATCH_DECK_COMPLETED" :
			const deckToComplete = prevState.find(deck => deck.id === action.payload.id)
			deckToComplete.completed = action.payload.completed
			return [...prevState]
		case "POST_CARD" :
			const deckToAddCard = prevState.find(deck => deck.id === action.payload.deck_id)
			deckToAddCard.cards = [...deckToAddCard.cards, action.payload]
			return [...prevState]
		case "DELETE_CARD" :
			const deckToDeleteCard = prevState.find(deck => deck.id === action.payload.deck_id)
			deckToDeleteCard.cards = [...deckToDeleteCard.cards.filter(card => card.id !== action.payload.id)]
			return [...prevState]
		case "PATCH_CARD" :
			const deckToPatchCard = prevState.find(deck => deck.id === action.payload.deck_id)
			deckToPatchCard.cards = [...deckToPatchCard.cards.filter(card => card.id !== action.payload.id)]
			deckToPatchCard.cards = [...deckToPatchCard.cards, action.payload]
			return [...prevState]
		default :
			return prevState
	}
}

const rootReducer = combineReducers({
	user: userReducer,
	decks: decksReducer
})

export default rootReducer