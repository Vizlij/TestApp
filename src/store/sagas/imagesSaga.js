import { call, put, all } from 'redux-saga/effects'
import { fetchImages } from '../../api/index'
import { loadImages, setImages, setError } from '../actions/imagesActions'

export function* handleImagesLoad() {
  try {
    const images = yield call(fetchImages)
    yield put(setImages(images))
  } catch (err) {
    yield all([setError(err.toString()), loadImages()])
  }
}
