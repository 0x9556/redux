import React, { memo } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './pages/counter'
import Home from './pages/home'


const App = memo(() => {
    return (
        <Provider store={store}>
            <Counter />
            <Home/>
        </Provider>
    )
})

export default App