import {
    GET_TRAVELS,
    GET_TRAVEL
} from '../types/travel.type';



export default (state = {}, action) => {
    switch(action.type){
        case GET_TRAVELS:
            return {...state, travels: action.payload};
        case GET_TRAVEL:
            return {...state, travelDetails: action.payload}
        default:
            return state;
    }
}