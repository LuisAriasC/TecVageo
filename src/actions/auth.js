import {
    LOGGED_IN,
    SIGN_IN,
    SIGN_OUT
} from '../types/auth.type';
import api from '../apis/api';

export const loggedIn = () => dispatch => {
    try {
        const tok = localStorage.getItem('tv-token');
        if(!tok) {
            dispatch({type: LOGGED_IN, payload: false});
        } else {
            dispatch({type: LOGGED_IN, payload: true});
        }
    } catch (err) {
        throw(err);
    }
}

export const signIn = (clientInfo) => async dispatch => {
    var info = {};
    var _error = false;
    try {
        const response = await api.post('/api/client-login', clientInfo)
        .catch(error => {
            _error = !_error;
            //dispatch({type: SIGN_IN, payload: info});
        });
        if(_error){
            info.client = {};
            info.client.name = '';
            info.client.surname = '';
            info.client.username = '';
            info.token = '';
            info.isSignedIn = false;
        } else {
            info = response.data;
            info.isSignedIn = true;
        }
        dispatch({type: SIGN_IN, payload: info});
    } catch (err) {
        throw(err);
    }
}

export const signOut = clientInfo => async dispatch => {
    console.log(clientInfo);
    //const response = await api.post('/client-login', {clientInfo});
    //console.log(response);
    dispatch({type: SIGN_OUT, isLoggedIn: false});
}