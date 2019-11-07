export default (state = {}, action) => {
    switch(action.type){
        case 'SET_TRAVELL_DATA':
            return {...state, selectedTravell: action.payload}
        case 'GET_TRAVELL_OPTIONS':
            return {...state, availableOptions: action.payload}
        case 'PUSH_OPTION':
            return {...state, opts: action.payload}
        case 'GET_OPTIONS':
            return {...state, opts: action.payload}
        default:
            return state;
    }
}