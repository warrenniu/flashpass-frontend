import { GET_USERS, GET_DECKS, GET_CURRENTUSERID } from './actionTypes';

const BASE_URL = "http://localhost:4000"

export function getUsers() {
	return function(dispatch, getState) {
		fetch(`${BASE_URL}/api/v1/users`)
			.then(response => response.json())
			.then(arrayOfUsers => {
				dispatch({type: GET_USERS, payload: arrayOfUsers})
			})
    }
}

export function getDecks() {
	return function(dispatch, getState) {
		fetch(`${BASE_URL}/api/v1/decks`)
			.then(response => response.json())
			.then(arrayOfDecks => {
				dispatch({type: GET_DECKS, payload: arrayOfDecks})
			})
	}
}