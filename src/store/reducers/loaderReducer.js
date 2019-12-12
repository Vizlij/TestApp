import { GLOBAL_LOADER } from '../types'

const initialState = {
  loader: true
}

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_LOADER: return { ...state, loader: action.payload }
    default: return state
  }
}
