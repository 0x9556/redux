import {
    INCREMENT,
    DECREMENT,
    ADD_NUMBER,
    SUB_NUMBER,
    CHANGE_BANNER,
    GET_HOME_MUTIDATA
} from './constants'

import axios from 'axios'

const incAction = () => ({
    type: INCREMENT
})

const decAction = () => ({
    type:DECREMENT
})

const addAction = (num) => ({
    type: ADD_NUMBER,
    data:num
})

const subAction = (num) => ({
    type: SUB_NUMBER,
    data:num
})

const changeBannerAction = (_data) => ({
    type: CHANGE_BANNER,
    data:_data
})

const getHomedataListener = () => ({
    type:GET_HOME_MUTIDATA
})

const getHomeDataListenerThunk = dispatch => {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        dispatch(changeBannerAction(res.data.data.banner.list))
    })
}



export {
    incAction,
    decAction,
    addAction,
    subAction,
    changeBannerAction,
    getHomedataListener,
    getHomeDataListenerThunk
}