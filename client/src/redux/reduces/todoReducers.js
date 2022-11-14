import * as actionTypes from '../actions/type.js'
export const todoReducers = (state=[],action) => {
    switch(action.type){
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state]
        default:
            return state;
    }
}