import * as actionTypes from '../actions/type.js'
export const todoReducers = (state=[],action) => {
    switch(action.type){
        case actionTypes.ADDNEWTODO:
            return [action.payload,...state]
        default:
            return state;
    }
}