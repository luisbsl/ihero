// @flow

import ACTIONS_TYPE from '../actions/AuthActionsType'

const INITIAL_STATE = { isLoggedIn: false, isLoading: true }

export default (state: Object = INITIAL_STATE, action: Object) => {
  switch (action.type) {
    case ACTIONS_TYPE.EXECUTE_LOGIN:
      return { ...state, isLoggedIn: true }

    case ACTIONS_TYPE.EXECUTE_LOGOUT:
      return { ...state, isLoggedIn: false }

    case ACTIONS_TYPE.IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload.isLoggedIn, isLoading: action.payload.isLoading }

    default:
      return state
  }
}