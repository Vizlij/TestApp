import { IMAGES } from '../types'

const initialState = {
  images: [],
  load: false,
  error: null
}

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD: return { ...state, load: action.payload }
    case IMAGES.LOAD_SUCCESS: return { ...state, images: action.payload, load: false }
    case IMAGES.LOAD_FAIL: return { ...state, error: action.payload, load: false }
    default: return state
  }
}