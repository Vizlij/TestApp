import { IMAGES } from '../types'

const loadImages = () => ({
  type: IMAGES.LOAD,
  payload: true
})

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  payload: images
})

const setError = err => ({
  type: IMAGES.LOAD_FAIL,
  payload: err
})

export { loadImages, setImages, setError }
