import { AsyncStorage } from 'react-native'

const setUserToken = async (token) => {
  try {
    let userToken = {
      key: 'token',
      value: token
    }
    await AsyncStorage.setItem(userToken.key, userToken.value)
  } catch (error) {
    alert('ERROR - ' + error)
  }
}

const getUserToken = async () => {
  try {
    let userToken = {
      key: 'token'
    }
    const value = await AsyncStorage.getItem(userToken.key)
    if (value !== null) {
      return value
    } else {
      return null
    }
  } catch (error) {
    alert('ERROR - ' + error)
  }
}

const removeUserToken = async () => {
  try {
    let userToken = {
      key: 'token'
    }
    await AsyncStorage.removeItem(userToken.key)
  } catch (error) {
    alert('ERROR - ' + error)
  }
}

export {
  setUserToken,
  getUserToken,
  removeUserToken
}