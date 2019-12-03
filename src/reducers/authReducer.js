import {
    LOGGED_IN,
    SIGN_IN,
    SIGN_OUT
} from '../types/auth.type';



export default (state = {}, action) => {
    switch(action.type){
        case LOGGED_IN:
            const tok = localStorage.getItem('tv-token');
            if(!tok) {
                return {...state, isSignedIn: false};
            } else {
                return {...state, isSignedIn: true};
            }
        case SIGN_IN:
            return {...state, name: action.payload.client.name,
                              surname: action.payload.client.surname,
                              username: action.payload.client.username,
                              token: action.payload.token,
                              isSignedIn: action.payload.isSignedIn 
                    };
        case SIGN_OUT:
            localStorage.clear();
            return {...state, isSignedIn: false};
        default:
            return state;
    }
}