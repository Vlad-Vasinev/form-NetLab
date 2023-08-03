import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { combineReducers } from "redux";
import { FormReducer } from "./formReducer";

// import CounterReducer from "./counterReducer";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers( {
    form: FormReducer,
} )

const persistedReducer = persistReducer(persistConfig, reducer);
const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk)
);

export const store = createStore(persistedReducer, composedEnhancer);

export const persistor = persistStore(store);

// const composedEnhancer = composeWithDevTools(
//     applyMiddleware(thunk)
//   )

// export const store = createStore(reducer, composedEnhancer );