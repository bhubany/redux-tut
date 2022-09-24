import { combineReducers } from "redux";
import cardItems from "./reducer";

export default combineReducers({
    cardItems,
    //... import and keep if multiple reducers are present
})