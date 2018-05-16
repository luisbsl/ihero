import ACTIONS_TYPE from './AuthActionsType'

import { getUserToken, removeUserToken } from '../providers/StorageProvider'

const executeLogin = () => {
  return {
    type: ACTIONS_TYPE.EXECUTE_LOGIN,
    payload: null
  }
}

const executeLogout = async () => {
  await removeUserToken()
  return {
    type: ACTIONS_TYPE.EXECUTE_LOGOUT,
    payload: null
  }
}

const verifyLoggedIn = async () => {
  const token = await getUserToken().then(token)
  let isLoggedIn = false
  if (token !== null) {
    isLoggedIn = true
  }
  return {
    type: ACTIONS_TYPE.IS_LOGGED_IN,
    payload: { isLoggedIn: isLoggedIn }
  }
}

const goRegisterScreen = () => {
  alert('Dispatching')
  return {
    type: ACTIONS_TYPE.GO_REGISTER_SCREEN,
    payload: { isRegisterScreen: true }
  }
}

export {
  executeLogin,
  verifyLoggedIn,
  executeLogout,
  goRegisterScreen
}