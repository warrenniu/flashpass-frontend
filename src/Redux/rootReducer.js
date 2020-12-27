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
		case "POST_CARD" :
			const currentDeck = prevState.find(deck => deck.id === action.payload.deck_id)
			currentDeck.cards = [...currentDeck.cards, action.payload]
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