import {
	legacy_createStore as createStore,
	applyMiddleware,
} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { setLocalStorage } from "../utils/localStorage";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
	setLocalStorage("store", store.getState().favoriteReducer);
});

window.store = store;
export default store;
