// import { createStore } from "redux";
// import rootReducer from "./reducer";

// const store = createStore(rootReducer);

// export default store;

import {createStore, applyMiddleware } from 'redux' //combineReducer  || Compose
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducer'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default store