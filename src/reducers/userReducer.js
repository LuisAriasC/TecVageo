import {
    GET_USER,
    UPDATE_USER
} from '../types/users.type';

export default (state = {}, action) => {
    switch(action.type){
        case GET_USER:
            return {...state, user: action.payload.client, travells: action.payload.travells};
        case UPDATE_USER:
            return {...state, user: action.payload.client, travells: action.payload.travells};
        default:
            return state;
    }
}