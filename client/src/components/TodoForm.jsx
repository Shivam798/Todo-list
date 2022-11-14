import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUserTodo} from '../redux/actions/index.js'

const TodoForm = () => {
    const [test, setTest] = useState('')
    const dispatch = useDispatch();
    const SubmitHandle = (e) => {
       
       e.preventDefault();
       dispatch(addUserTodo(test));
       setTest('')
    }
    const Inputhandler =(e) => {
        setTest(e.target.value)
    }
    return (
    <form className='form' onSubmit={SubmitHandle}>
        <input 
            
            placeholder='Enter new todo...' 
            className='input'
            onChange={Inputhandler}
            value={test}
        />
    </form>
  )
}

export default TodoForm