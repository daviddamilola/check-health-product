import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'



const middleware = [thunk];
const initialStore = {};

const store = createStore(rootReducer,
   initialStore,
    applyMiddleware(...middleware));

export default store;