import React, { PureComponent } from 'react'
import connect from '../utils/connect'
import {
    decAction,
    subAction
} from '../store/actionCreators'

class Home2 extends PureComponent {
    render() {
        return (
            <div>
                <h2>Home 2</h2>
                <h2>Counter : {this.props.counter}</h2>
                <button onClick={() => { this.props.decrement() }}>-1</button>
                <button onClick={() => { this.props.subNumber(5) }}>-5</button>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return ({
        counter: state.counter
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        decrement() {
            dispatch(decAction())
        },
        subNumber(num) {
            dispatch(subAction(num))
        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home2)