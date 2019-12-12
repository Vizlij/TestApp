import { GLOBAL_LOADER } from '../types'

export const loaderActions = bool => {
  return {
    type: 'GLOBAL_LOADER',
    payload: bool
  }
}