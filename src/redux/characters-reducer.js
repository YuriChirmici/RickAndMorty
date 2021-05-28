import {charactersAPI} from "../api/api";

const SET_CHARACTER = "characters/SET_CHARACTER";
const SET_CURRENT_CHARACTER = "characters/SET_CURRENT_CHARACTER";
const SET_CHARACTERS_COUNT = "characters/SET_CHARACTERS_COUNT";
const TOGGLE_IS_FETCHING = "characters/TOGGLE_IS_FETCHING";

let initialState = {
	count: 0,
	currentCharacterId: 0,
	characters: {},
	isFetching: true,
}

const charactersReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_CHARACTER: 
			return {
				...state,  
				characters: {
					...state.characters, 
					[action.character.id]: action.character
				},
				currentCharacterId: action.character.id,
				isFetching: false,
			};
		case SET_CURRENT_CHARACTER:
			return {
				...state,
				currentCharacterId: action.characterId,
			}
		case SET_CHARACTERS_COUNT: 
			return {...state, count: action.count};
		case TOGGLE_IS_FETCHING: 
			return {...state, isFetching: action.isFetching};
		default:
			return state;
	}
}

const setCharacter = (character) => (
	{type: SET_CHARACTER, character}
);

const setCurrentCharacter = (characterId) => (
	{type: SET_CURRENT_CHARACTER, characterId}
);

const setCharactersCount = (count) => (
	{type: SET_CHARACTERS_COUNT, count}
);

const toggleIsFetching = (isFetching) => (
	{type: TOGGLE_IS_FETCHING, isFetching}
);

const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

export const requestNewCharacter = (characterId, characters) => async (dispatch) => {
	if(characterId in characters) {
		dispatch(setCurrentCharacter(characterId))
	} else {
		dispatch(toggleIsFetching(true));
		let result = await charactersAPI.requestCharacter(characterId);
		let character = {
			id: result.id,
			name: result.name,
			status: capitalize(result.status),
			species: result.species,
			gender: result.gender,
			origin: result.origin.name,
			location: result.location.name,
			image: result.image,
		};

		dispatch(setCharacter(character));
	}
}

export const requestCharactersCount = () => async (dispatch) => {
	let result = await charactersAPI.requestCharactersCount();
	dispatch(setCharactersCount(result));
}

export default charactersReducer;