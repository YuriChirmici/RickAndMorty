import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import charactersReducer from "./characters-reducer";

const reducers = combineReducers({
	characters: charactersReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;