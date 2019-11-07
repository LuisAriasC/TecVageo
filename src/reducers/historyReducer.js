export default (state = {}, action) => {
    switch(action.type){
        case 'SET_HISTORY_OPTION':
            return {...state, selectedHistory: action.payload}
        case 'GET_TRAVELL_DETAILS':
            console.log("PAYLOAD", action.payload);
            return {...state, travellDetails: action.payload}
        default:
            return state;
    }
}