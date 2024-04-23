import { createStore , combineReducers } from "redux";
import todoreducers from "./reducers/todoreducers";
const reducers = combineReducers({todo: todoreducers})
const store = createStore(reducers);

export default store;