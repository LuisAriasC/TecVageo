import {
    GET_TRAVELS,
    GET_TRAVEL
} from '../types/travel.type';
import api from '../apis/api';

export const getTravelHistory = () => async dispatch => {
    try {
        const token = localStorage.getItem('tv-token');
        const response = await api.get('/api/travels-client', {headers: { Authorization: token}}).catch((error) => {
            console.log('Error');
        });
        console.log(response);
        dispatch({type: GET_TRAVELS, payload: response.data});
    } catch(err){
        throw(err);
    }
}

export const getTravel = (travelId) => async dispatch => {
    try {
        const token = localStorage.getItem('tv-token');
        const response = await api.get(`/api/travels-client${travelId}`, {headers: { Authorization: token}}).catch((error) => {
            console.log('Error');
        });
        console.log(response);
        //dispatch({type: GET_TRAVEL, payload: response.data});
    } catch(err){
        throw(err);
    }
}

