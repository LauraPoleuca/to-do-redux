import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { todoReducers } from "./reducers/todosReducer";
import { tabReducer } from "./reducers/tabReducer";

const reducer = combineReducers({
  todos: todoReducers,
  currentTab: tabReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
