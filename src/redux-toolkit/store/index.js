import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../pages/counter/counterSlice'
import HomeReducer from '../pages/home/homeSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        home: HomeReducer
    },
    
})

export default store