import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducers } from './reducers/rootReducers'
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store