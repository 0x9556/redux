import React, { PureComponent } from 'react'
import store from '../store'
import {
    incAction,
    addAction,
} from '../store/actionCreators'
export default class Home extends PureComponent {


    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                storeState:store.getState()
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <h2>Counter : {store.getState().counter}</h2>
                <button onClick={()=>{this.increment()}}>+1</button>
                <button onClick={()=>{this.addNumber(5)}}>+5</button>
            </div>
        )
    }

    increment() {
        store.dispatch(incAction())
    }

    addNumber(num) {
        store.dispatch(addAction(num))
    }
}
