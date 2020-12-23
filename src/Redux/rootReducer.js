import {combineReducers} from 'redux'

const defaultState = {
	users: [],
	decks: [],
	currentUserId: 1
}

function usersReducer(prevState = defaultState.users, action) {
	switch (action.type) {
		case "GET_USERS" :
			console.log(action)
			console.log(prevState)
			return action.payload
		default :
			return prevState
	}
}

function decksReducer(prevState = defaultState.decks, action) {
	switch (action.type) {
		case "GET_DECKS" :
			console.log(action)
			console.log(prevState)
			return action.payload
		default :
			return prevState
	}
}

const rootReducer = combineReducers({
	users: usersReducer,
	decks: decksReducer,
	// currentUserId: currentUserIdReducer
})

export default rootReducer