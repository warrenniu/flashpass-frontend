import {combineReducers} from 'redux'

const defaultState = {
	users: [],
	decks: [],
	currentUserId: 1
}

function usersReducer(prevState = defaultState.users, action) {
	switch (action.type) {
		case "GET_USERS" :
			return action.payload
		default :
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
		default :
			return prevState
	}
}

function currentUserIdReducer(prevState = defaultState.currentUserId, action) {
	switch (action.type) {
		case "GET_CURRENTUSERID":
			return prevState
		default: 
			return prevState 
	}
}

const rootReducer = combineReducers({
	users: usersReducer,
	decks: decksReducer,
	currentUserId: currentUserIdReducer
})

export default rootReducer