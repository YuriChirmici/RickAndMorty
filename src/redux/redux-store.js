import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

import default store;