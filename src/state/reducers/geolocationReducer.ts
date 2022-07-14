import { action, geo } from "../typedeclare";

const geoReducer = (geo:geo = {lat:37.4267861, lng:-122.0806032}, action:action ) => {

    switch(action.type) {

        case 'geocode':
            return action.payload;
        default:
            return geo;
    }

}


export default geoReducer;