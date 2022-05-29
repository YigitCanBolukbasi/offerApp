import { combineReducers } from "redux";
import offerReducer from "./offerReducer";

const reducer = combineReducers({
  offerLists: offerReducer,
});

export default reducer;
