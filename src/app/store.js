import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../features/counter/reducer";
import mutiCounterReducer from "../features/mutiCounter/reducer";
import todoReducer from "../features/todo/reducer";

const initialState = {};
const store = createStore(
  combineReducers({
    counter: counterReducer,
    mutiCounter: mutiCounterReducer,
    todo: todoReducer,
  }),
  initialState,
  composeWithDevTools()
);
export default store;
