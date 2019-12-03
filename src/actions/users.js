import {
    GET_USER,
    UPDATE_USER
} from '../types/users.type';
import api from '../apis/api';

export const getUserAction = (token) => async dispatch => {
    try {
        const response = await api.get('/api/client', {headers: { Authorization: token}}).catch((error) => {
            console.log('Error');
        });
        dispatch({type: GET_USER, payload: response.data});
    } catch(err){
        throw(err);
    }
}

export const updateUserAction = (token, update) => async dispatch => {
    try {
        const response = await api.put('/api/client', update, {headers: { Authorization: token}}).catch((error) => {
            console.log('Error');
        });
        dispatch({type: UPDATE_USER, payload: response.data});
    } catch(err){
        throw(err);
    }
}