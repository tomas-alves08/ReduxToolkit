import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, bodyValue} from './Reducer/bodySlice'

const Body = () => {
    const body = useSelector(bodyValue)
    const dispatch = useDispatch()

    return (
    <>
        <h1 style={{fontSize: body}}>Body</h1>
        <div>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        </div>
    </>
)}

export default Body