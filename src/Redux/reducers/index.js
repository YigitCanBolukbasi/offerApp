import { combineReducers } from "redux";
import offerReducer from "./offerReducer";

const reducer = combineReducers({
  offerList: offerReducer,
});

export default reducer;
