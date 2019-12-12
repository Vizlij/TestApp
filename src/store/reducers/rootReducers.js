import { combineReducers } from 'redux'
import { loaderReducer } from './loaderReducer'
import { imagesReducer } from './imagesReducer'

export const rootReducers = combineReducers({
  loader: loaderReducer,
  images: imagesReducer
})