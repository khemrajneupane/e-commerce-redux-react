import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import itemListReducer from "./reducers/itemListReducer";
import itemDetailReducer from "./reducers/itemDetailReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import basketReducer from "./reducers/basketReducer";

const reducer = combineReducers({
  itemList: itemListReducer,
  itemDetailList: itemDetailReducer,
  shoppingBasket: basketReducer
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;