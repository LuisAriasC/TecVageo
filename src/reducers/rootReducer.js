import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import getInitialValuesReducer from './getInitialValuesReducer';
import selectedOptionsReducer from './selectOptionsReducer';
import historyReducer from './historyReducer';


export default combineReducers({
    initialValues: getInitialValuesReducer,
    selectedOptions: selectedOptionsReducer,
    historyOptions: historyReducer
    //form: formReducer,
});