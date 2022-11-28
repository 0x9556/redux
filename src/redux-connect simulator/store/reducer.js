import {
    INCREMENT,
    DECREMENT,
    ADD_NUMBER,
    SUB_NUMBER,
    CHANGE_BANNER
} from './constants'


const defaultState = {
    counter: 0,
    banner: []
}

function counterReducer(state = defaultState, action) {
    
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state
        case INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.data }
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.data }
        case CHANGE_BANNER:
            return { ...state, banner: action.data }
    }
}


export default reducer