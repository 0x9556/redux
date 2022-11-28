import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import {
    GET_HOME_MUTIDATA
} from './constants'
import { changeBannerAction } from './actionCreators'


function* getHomedata() {
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata")

    yield put(changeBannerAction(res.data.data.banner.list))
}


function* mySaga() {
    yield takeEvery(GET_HOME_MUTIDATA, getHomedata)
}

export default mySaga