import ACTIONS_TYPE from '../actions/AuthActionsType'

const INITIAL_STATE = { isLoggedIn: false, isRegisterScreen: false }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.EXECUTE_LOGIN:
      return { ...state, isLoggedIn: true }

    case ACTIONS_TYPE.EXECUTE_LOGOUT:
      return { ...state, isLoggedIn: false }

    case ACTIONS_TYPE.IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload.isLoggedIn }

    case ACTIONS_TYPE.GO_REGISTER_SCREEN:
      return { ...state, isRegisterScreen: action.payload.isRegisterScreen }

    default:
      return state
  }
}