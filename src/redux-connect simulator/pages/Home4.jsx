import React, { PureComponent } from 'react'
import connect from '../utils/connect'
import {
    getHomeDataListenerThunk
} from '../store/actionCreators'
class Home4 extends PureComponent {
    componentDidMount() {
        this.props.getHomeData()
    }

    render() {
        return (
            <div>
                <h2>Home4</h2>
                <ul>
                    {
                        this.props.banner.map(e => {
                            return (
                                <li key={e.acm}>{e.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProprs = state => ({
    banner: state.banner
})

const mapDispatchToProps = dispatch => ({
    getHomeData() {
        dispatch(getHomeDataListenerThunk)
    }
})

export default connect(mapStateToProprs, mapDispatchToProps)(Home4)