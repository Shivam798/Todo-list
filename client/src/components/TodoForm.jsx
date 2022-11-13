import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addUserTodo } from '../redux/actions'

const TodoForm = () => {
    const [test, setTest] = useState('')
    const dispatch = useDispatch();
    const Inputhandler =(e) => {
        setTest(e.target.value)
    }
    const SubmitHandle = (e) => {
       e.preventDefault();
       dispatch(addUserTodo(test));
    }
    return (
    <form className='form' onSubmit={()=>SubmitHandle}>
        <input 
            
            placeholder='Enter new todo...' 
            className='input'
            onChange={Inputhandler}
        />
    </form>
  )
}

export default TodoForm