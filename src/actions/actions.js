import { 
    GET_INITIAL_VALUES
 } from './types';

import { travellTypes } from '../data/travellTypes';
import { countries } from '../data/countries';
import { destinations } from '../data/destinations';
import { options } from '../data/travellOptions';
import { details } from '../data/details';



export const action_get_initial_values = () => dispatch => {
    var initialValues = {
        travellTypes,
        countries,
        destinations
    }
    dispatch({type: GET_INITIAL_VALUES, payload: initialValues});
}

export const action_set_travell_data = (travelData) => dispatch => {
    console.log("DATOS", travelData);
    dispatch({
        type: 'SET_TRAVELL_DATA',
        payload: travelData
    })
}

export const action_get_travell_data = (type) => dispatch => {
    const opts = options.filter(option => option.type === type.type && option.country === type.country && option.destination === type.destination);
    console.log(opts);
    dispatch({
        type: 'GET_TRAVELL_OPTIONS',
        payload: opts
    })
}

var selectedOptions = []

export const action_add_option = (option) => dispatch => {
    console.log("Opcion", option)
    selectedOptions.push(option)

    dispatch({
        type: 'PUSH_OPTION',
        payload: selectedOptions
    })
}

export const action_get_options = () => dispatch => {
    console.log("Opciones", selectedOptions);

    dispatch({
        type: 'GET_OPTIONS',
        payload: selectedOptions
    })
}

export const action_set_history_option = (option) => dispatch => {

    dispatch({
      type: 'SET_HISTORY_OPTION',
      payload: option  
    })
}

export const action_get_travell_details = (option) => dispatch => {
    const dets = details.filter(detail => detail.travellId === option);
    console.log(dets);
    dispatch({
      type: 'GET_TRAVELL_DETAILS',
      payload: dets  
    })
}