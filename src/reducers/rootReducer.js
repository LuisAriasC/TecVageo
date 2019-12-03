import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import getInitialValuesReducer from './getInitialValuesReducer';
import selectedOptionsReducer from './selectOptionsReducer';
import historyReducer from './historyReducer';
import authReducer from './authReducer';

export default combineReducers({
    initialValues: getInitialValuesReducer,
    selectedOptions: selectedOptionsReducer,
    historyOptions: historyReducer,
    authOptions: authReducer
    //form: formReducer,
});