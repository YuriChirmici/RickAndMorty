import {charactersAPI} from "../api/api";

const SET_CHARACTER = "characters/SET_CHARACTER";
const SET_CHARACTERS_COUNT = "characters/SET_CHARACTERS_COUNT";
const TOGGLE_IS_FETCHING = "characters/TOGGLE_IS_FETCHING";

let initialState = {
	count: 0,
	character: [],
	isFetching: true,
}

const charactersReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_CHARACTER: 
			return {...state, character: action.character};
		case SET_CHARACTERS_COUNT: 
			return {...state, count: action.count};
		case TOGGLE_IS_FETCHING: 
			return {...state, isFetching: action.isFetching};
		default:
			return state;
	}
}

const setCharacter = (character) => {
	return {type: SET_CHARACTER, character}
}

const setCharactersCount = (count) => {
	return {type: SET_CHARACTERS_COUNT, count};
}

const toggleIsFetching = (isFetching) => {
	return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const requestNewCharacter = (characterId) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	let result = await charactersAPI.requestCharacter(characterId);
	dispatch(toggleIsFetching(false));

	let character = {
		id: result.id,
		name: result.name,
		status: result.status,
		species: result.species,
		gender: result.gender,
		origin: result.origin.name,
		location: result.location.name,
		image: result.image,
	};

	dispatch(setCharacter(character));
}

export const requestCharactersCount = () => async (dispatch) => {
	let result = await charactersAPI.requestCharactersCount();
	dispatch(setCharactersCount(result));
}

export default charactersReducer;