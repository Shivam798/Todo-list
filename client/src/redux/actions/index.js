import axios from 'axios'
import { ADDNEWTODO } from './type.js';

const API_URL='http://localhost:8000';
export const addUserTodo = (data) => async(dispatch) => {
    try {
        
        const res=  await axios.post(`${API_URL}/todos`,{data})
        dispatch({type: ADDNEWTODO ,payload:res.data})
    } catch (error) {
        console.log('api call todos',error.message);
    }
}