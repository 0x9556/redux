import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import Home4 from './pages/Home4'
import store from './store'
import StoreContext from './utils/context'


export default class app extends PureComponent {
    render() {
        return (
            <div>
                <StoreContext.Provider value={store}>
                    <Home />
                    <Home2 />
                    <Home3 />
                    <Home4 />
                </StoreContext.Provider>

            </div>
        )
    }
}
