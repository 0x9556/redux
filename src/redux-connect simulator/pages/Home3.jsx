import React, { PureComponent } from 'react'
import connect from '../utils/connect'
import {
    getHomedataListener
} from '../store/actionCreators'
class Home3 extends PureComponent {
    componentDidMount() {
        this.props.getHomeData()
    }

    render() {
        return (
            <div>
                <h2>Home3</h2>
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
        dispatch(getHomedataListener())
    }
})

export default connect(mapStateToProprs, mapDispatchToProps)(Home3)