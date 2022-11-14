import axios from 'axios'
import { ADDNEW_TODO } from './type.js';

const API_URL='http://localhost:8000';
export const addUserTodo = (test) => async(dispatch) => {
    try {
        
        const res =  await axios.post(`${API_URL}/todos`,{test})
        // this object in  dispatch get into the action in todoReduce.js and state keep the data at the last data.
        
        dispatch({type: ADDNEW_TODO ,payload:res.data});
    } catch (error) {
        console.log('api call todos',error.message);
    }
}
