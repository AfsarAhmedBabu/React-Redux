import { combineReducers } from "redux";
import reducer from "./accountreducer";
import geoReducer from "./geolocationReducer";

const reducers = combineReducers({
    account: reducer,
    georeducer: geoReducer
});

export default reducers;