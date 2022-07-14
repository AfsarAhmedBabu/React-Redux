import { combineReducers } from "redux";
import reducer from "./accountreducer";

const reducers = combineReducers({
    account: reducer
});

export default reducers;