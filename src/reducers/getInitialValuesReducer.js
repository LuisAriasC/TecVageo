import {
    GET_INITIAL_VALUES
} from '../actions/types';



export default (state = {}, action) => {
    switch(action.type){
        case GET_INITIAL_VALUES:
            return {...state, countries: action.payload.countries, travellTypes: action.payload.travellTypes, destinations: action.payload.destinations}
        default:
            return state;
    }
}