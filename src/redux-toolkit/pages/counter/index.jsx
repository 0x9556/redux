import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from './counterSlice'

const Counter = memo(() => {

    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
        </div>
    )
})

export default Counter