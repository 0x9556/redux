import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import saga from './saga' 
import thunkMiddleware from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(sagaMiddleware,thunkMiddleware)

export default createStore(reducer, storeEnhancer)

sagaMiddleware.run(saga)


