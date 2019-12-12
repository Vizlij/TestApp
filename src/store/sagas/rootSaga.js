import { all } from 'redux-saga/effects'
import { handleImagesLoad } from './imagesSaga'

export function* rootSaga() {
  yield all([handleImagesLoad()])
}
